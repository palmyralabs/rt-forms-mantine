interface LSQueryConfig {
    lsKey: string;
}

interface LSQueryOptions {    
    setSortColumns: (d: any) => void;
    setQuickSearch: (v: any) => void;
    setFilter: (d: any) => void;
    setPage: (d: number) => void;
    resetSortOptions: () => void;
    resetQuickSearch: () => void;
    resetFilter: () => void;
    resetPage: () => void;
    reset: () => void;
    getLSOptions : () => any;
}


const useLSQueryOptions = (props:LSQueryConfig): LSQueryOptions => {
    const getLSOptions = () => {
        return {};
    }
    
    const setSortColumns = (d: any) => {

    };

    const setQuickSearch = (d: any) => {

    };

    const setFilter = (d: any) => {

    };

    const setPage = (d: any) => {

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


    return {
        getLSOptions, setSortColumns, setQuickSearch, setFilter, setPage,
        resetSortOptions, resetQuickSearch, resetFilter, resetPage, reset
    };
}

export { useLSQueryOptions };