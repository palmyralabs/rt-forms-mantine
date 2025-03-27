import { IServerQueryInput } from "@palmyralabs/rt-forms";

interface LSQueryConfig {
    lsKey: string;
    pageSize: number | number[];
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
type initParams = IServerQueryInput["initParams"];

// interface storedParams {
//     filter?: Record<any, any>;
//     sort?: strings;
//     page?: number;
//     pageSize?: number;
// };


const useLSQueryOptions = (props: LSQueryConfig): LSQueryOptions => {
    const pageSize = props.pageSize ? props.pageSize : 15;
    const initialLimit = pageSize instanceof Array ? pageSize[0] : pageSize;
    
    const storeData = () => {
        const v = JSON.stringify(params);
        sessionStorage.setItem(props.lsKey, v);
    }

    const getData = (): initParams => {
        const v = sessionStorage.getItem(props.lsKey);
        if (v) {
            try {
                return JSON.parse(v);
            } catch (error) {
                console.error('invalid data for tableFilter ', props.lsKey);
            }
        }
        return {};
    }

    const params: initParams = getData();
    if(params.limit == undefined)
        params.limit = initialLimit;

    const getLSOptions = () => {
        return params;
    }

    const setSortColumns = (d: any) => {
        if (d)
            params.sort = d;
        else
            delete params.sort;
        storeData();
    };

    const setQuickSearch = (d: any) => {

    };

    const setFilter = (d: any) => {
        if (d)
            params.filter = d;
        else
            delete params.filter;
        storeData();
    };

    const setPageSize = (pageSize: number) => {
        const oldOffset = getData().offset || 0;
        const limit: number = (pageSize > 0 || pageSize == -1) ? pageSize : 15;
        const offset: number = Math.floor(oldOffset / limit) * limit;
        params.limit = limit;
        params.offset = offset;
        storeData();
    };

    const setPage = (d: number) => {
        const limit = getData().limit || initialLimit || 15;
        const page = d || 0;
        params.offset = page * limit;        
        storeData();
    };

    const reset = () => {

    }

    const resetSortOptions = () => {

    };

    const resetQuickSearch = () => {

    };

    const resetFilter = () => {

    };

    const resetPage = () => {

    }

    const resetPageSize = () => {

    }

    return {
        getLSOptions, setSortColumns, setQuickSearch, setFilter, setPage, setPageSize,
        resetSortOptions, resetQuickSearch, resetFilter, resetPage, reset, resetPageSize
    };
}

export { useLSQueryOptions };