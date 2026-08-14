import { GridPersistenceMode } from './gridPersistence';
interface LSQueryConfig {
    lsKey: string;
    pageSize: number | number[];
    mode?: GridPersistenceMode;
}
interface LSQueryOptions {
    setSortColumns: (d: any) => void;
    setQuickSearch: (v: any) => void;
    setFilter: (d: any) => void;
    setPage: (d: number) => void;
    setPageSize: (d: number) => void;
    resetSortOptions: () => void;
    resetQuickSearch: () => void;
    resetFilter: () => void;
    resetPage: () => void;
    resetPageSize: () => void;
    reset: () => void;
    getLSOptions: () => any;
}
declare const useLSQueryOptions: (props: LSQueryConfig) => LSQueryOptions;
export { useLSQueryOptions };
