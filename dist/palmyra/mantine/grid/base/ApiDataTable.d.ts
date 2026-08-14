import { ApiDataTableOptions, IPageQueryable } from '@palmyralabs/rt-forms';
import { RefObject } from 'react';
declare function ApiDataTable(props: ApiDataTableOptions & {
    ref?: RefObject<IPageQueryable>;
    tableRef?: RefObject<any>;
    tableOptions?: any;
    onTableReady?: (table: any) => void;
}): import("react/jsx-runtime").JSX.Element;
export { ApiDataTable };
