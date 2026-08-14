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
export declare const configureGridPersistence: (cfg: {
    mode?: GridPersistenceMode;
}) => void;
export declare const getGridPersistenceMode: () => GridPersistenceMode;
export declare const getGridStore: (mode?: GridPersistenceMode) => GridStateStore;
export declare const resolveGridPersistence: (props: any) => ResolvedGridPersistence;
export declare const gridPersistenceKey: (keyOrEndPoint: any) => string;
export declare const getPersistedGridFilter: (keyOrEndPoint: any, mode?: GridPersistenceMode) => Record<string, any>;
export declare const stripWildcards: (v: any) => string;
export declare const containsFilter: (v: string | undefined | null) => string | undefined;
