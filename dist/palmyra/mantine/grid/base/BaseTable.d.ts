import { BaseTableOptions } from '@palmyralabs/rt-forms';
import { RefObject } from 'react';
type BaseTableExtra = {
    tableRef?: RefObject<any>;
    tableOptions?: any;
    onTableReady?: (table: any) => void;
};
export default function BaseTable(props: BaseTableOptions & BaseTableExtra): import("react/jsx-runtime").JSX.Element;
export {};
