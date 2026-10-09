import { DataGridPluginOptions, GridXOptions, IPageQueryable } from "@palmyralabs/rt-forms";
import { JSX, RefObject, useMemo, useRef } from "react";
import { TbFilterShare } from "react-icons/tb";
import { renderTitle } from "../widget";
import { DropdownButton } from "../widget/DropdownButton";
import { ApiDataTable } from "./base/ApiDataTable";
import './DataGrid.css';
import { FilterForm } from "./plugins/filter/FilterForm";
import { SelectablePagination } from "./plugins/pagination/SelectablePagination";
import { buildFetchFailureStoreOptions } from "./util/buildFetchFailureHook";
import { useGridFilter } from "./base/useGridFilter";

type GridXProps<ControlPropsType> =
    GridXOptions<ControlPropsType>
    & { ref?: RefObject<IPageQueryable> }
    & { onFetchFailure?: (error: any) => void }
    & { filter?: any }
    & {
        selectable?: 'single' | 'multi' | boolean,
        idProperty?: string,
        checkboxPosition?: 'first' | 'last',
        selectAllPages?: boolean,
        maxSelected?: number,
        defaultSelectedIds?: (string | number)[],
        defaultSelected?: (row: any) => boolean,
        defaultSelectBy?: { attribute: string, values: any[] },
        isRowSelectable?: (row: any) => boolean,
        onSelectionChange?: (rows: any[]) => void,
        selectionRef?: RefObject<{
            selectedRows: any[],
            selectedIds: string[],
            clear: () => void,
            selectIds: (ids: (string | number)[]) => void,
            selectAllPages: () => Promise<void>
        }>,
        editable?: boolean,
        editableColumns?: string[],
        editors?: Record<string, {
            type: 'text' | 'number' | 'amount' | 'date' | 'select' | 'radio' | 'lookup',
            options?: Record<string, any> | { value: any, label: string }[],
            endPoint?: string,
            idAttribute?: string,
            labelAttribute?: string,
            queryAttribute?: string,
            displayAttribute?: string,
            fetchLimit?: number,
            valueFormat?: string,
            displayPattern?: string,
            serverPattern?: string
        }>,
        onCellEdit?: (params: { id: any, attribute: string, value: any, oldValue: any, row: any }) => void,
        isCellEditable?: (row: any, attribute: string) => boolean,
        getEditorType?: (attribute: string) => 'text' | 'number',
        editRef?: RefObject<{
            edits: Record<string, Record<string, any>>,
            getEditedRows: () => { id: string, changes: Record<string, any> }[],
            clear: () => void
        }>
    };

function GridX<ControlPropsType>(props: GridXProps<ControlPropsType>) {
    const internalRef = useRef<IPageQueryable>(null);
    const queryRef = props.ref ?? internalRef;
    useGridFilter(queryRef, props.filter);
    const paginationRef = useRef<IPagination>(null);
    const tableRef = useRef<any>(null);
    const topic: string = props.topic || useMemo(() => 'id' + Math.random(), []);

    const onDataChange = (newData: any[], oldData?: any[]) => {

        if (paginationRef.current && paginationRef.current.refresh) {
            try {
                paginationRef.current.refresh();
            } catch (error) {
                console.error(error);
            }
        }

        if (props.onDataChange) {
            try {
                props.onDataChange(newData, oldData)
            } catch (error) {
                console.error(error);
            }
        }
    }

    const ignoreSinglePage = props.pagination?.ignoreSinglePage;

    const pluginOptions: DataGridPluginOptions = {
        ...props.DataGridControlProps, queryRef, columns: props.columns, getPluginOptions: props.getPluginOptions,
        pageSize: props.pageSize, quickSearch: props.quickSearch, topic, ignoreSinglePage
    };
    (pluginOptions as any).tableRef = tableRef;

    const Controls: (props: any) => JSX.Element = props.DataGridControls ||
        ((o: DataGridPluginOptions) => <><DropdownButton title="Filter" PrefixAdornment={<TbFilterShare />}>
            <FilterForm {...o} />
        </DropdownButton></>)
    const Pagination: (props: DataGridPluginOptions & { ref?: RefObject<IPagination> }) => JSX.Element =
        (props.DataGridPagination || SelectablePagination) as any;

    const storeOptions = useMemo(
        () => buildFetchFailureStoreOptions(props.onFetchFailure, (props as any).storeOptions),
        [props.onFetchFailure, (props as any).storeOptions]
    );

    return <>
        <div className='py-datagrid-header'>
            <div className='py-datagrid-header-right-container'>
                <div className="py-datagrid-title">{renderTitle(props.title)}</div>
            </div>
            <div className='py-datagrid-header-left-container'>
                <Controls {...pluginOptions} />
            </div>
        </div>
        <div className="py-data-grid-table">
            <ApiDataTable {...props} storeOptions={storeOptions} onDataChange={onDataChange} ref={queryRef} tableRef={tableRef} />
        </div>
        <Pagination {...pluginOptions} ref={paginationRef} />
    </>
}

export { GridX };
