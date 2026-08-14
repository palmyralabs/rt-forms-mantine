

export type GridPersistenceMode = 'localStorage' | 'sessionStorage' | 'urlParams' | 'none';

export interface GridStateStore {
    read(key: string): any;
    write(key: string, value: any): void;
}

export interface GridPersistOptions {
    mode?: GridPersistenceMode;
    key?: string;
}

export interface ResolvedGridPersistence {
    enabled: boolean;
    mode: GridPersistenceMode;
    key: string;
}

const STORAGE_PREFIX = 'py-grid:';
const URL_PREFIX = 'gs_';

const safeParse = (raw: string | null): any => {
    if (!raw) return {};
    try {
        return JSON.parse(raw);
    } catch (e) {
        return {};
    }
};

const isEmpty = (value: any): boolean =>
    !value || (typeof value === 'object' && Object.keys(value).length === 0);

const webStorageStore = (getStorage: () => Storage): GridStateStore => ({
    read(key: string) {
        try {
            return safeParse(getStorage().getItem(STORAGE_PREFIX + key));
        } catch (e) {
            return {};
        }
    },
    write(key: string, value: any) {
        try {
            const storage = getStorage();
            const name = STORAGE_PREFIX + key;
            if (isEmpty(value)) storage.removeItem(name);
            else storage.setItem(name, JSON.stringify(value));
        } catch (e) {
        }
    }
});

const sanitize = (key: string) => (key || 'grid').replace(/[^a-zA-Z0-9_.-]/g, '_');

const urlParamsStore: GridStateStore = {
    read(key: string) {
        if (typeof window === 'undefined') return {};
        try {
            const sp = new URLSearchParams(window.location.search);
            return safeParse(sp.get(URL_PREFIX + sanitize(key)));
        } catch (e) {
            return {};
        }
    },
    write(key: string, value: any) {
        if (typeof window === 'undefined') return;
        try {
            const url = new URL(window.location.href);
            const name = URL_PREFIX + sanitize(key);
            if (isEmpty(value)) url.searchParams.delete(name);
            else url.searchParams.set(name, JSON.stringify(value));
            window.history.replaceState(window.history.state, '', url.toString());
        } catch (e) {
            /* ignore */
        }
    }
};

const noopStore: GridStateStore = { read: () => ({}), write: () => { } };

let globalMode: GridPersistenceMode = 'sessionStorage';


export const configureGridPersistence = (cfg: { mode?: GridPersistenceMode }) => {
    if (cfg && cfg.mode) globalMode = cfg.mode;
};

export const getGridPersistenceMode = (): GridPersistenceMode => globalMode;

export const getGridStore = (mode?: GridPersistenceMode): GridStateStore => {
    switch (mode || globalMode) {
        case 'localStorage':
            return webStorageStore(() => window.localStorage);
        case 'urlParams':
            return urlParamsStore;
        case 'none':
            return noopStore;
        case 'sessionStorage':
        default:
            return webStorageStore(() => window.sessionStorage);
    }
};

const deriveKey = (endPoint: any): string => {
    if (!endPoint) return 'grid';
    if (typeof endPoint === 'string') return endPoint;
    return endPoint.query || endPoint.get || endPoint.list || JSON.stringify(endPoint);
};


export const resolveGridPersistence = (props: any): ResolvedGridPersistence => {
    const perGrid: GridPersistOptions = (props && props.persist) || {};
    const mode: GridPersistenceMode = perGrid.mode || globalMode;
    const key: string = perGrid.key || (props && props.lsKey) || deriveKey(props && props.endPoint);
    return { enabled: mode !== 'none', mode, key };
};

export const gridPersistenceKey = (keyOrEndPoint: any): string =>
    typeof keyOrEndPoint === 'string' ? keyOrEndPoint : deriveKey(keyOrEndPoint);


export const getPersistedGridFilter = (keyOrEndPoint: any, mode?: GridPersistenceMode): Record<string, any> => {
    try {
        const saved = getGridStore(mode).read(gridPersistenceKey(keyOrEndPoint));
        return (saved && saved.filter) || {};
    } catch (e) {
        return {};
    }
};

export const stripWildcards = (v: any): string => String(v ?? '').replace(/^\*+|\*+$/g, '');

export const containsFilter = (v: string | undefined | null): string | undefined =>
    v ? '*' + v + '*' : undefined;
