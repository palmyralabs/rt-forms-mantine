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
import { IGridInlineEditProps } from "./base/useGridInlineEdit";
import { IGridExpansionProps } from "./base/useGridExpansion";

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
        paginationPosition?: 'top' | 'bottom' | 'both',
        paginationOptions?: {
            compact?: boolean,
            responsive?: boolean,
            compactWidth?: number,
            pageSizePosition?: 'left' | 'right',
            keyboardNavigation?: boolean,
            showGoTo?: boolean,
            disableOnLoading?: boolean,
            showRange?: boolean,
            showPageSize?: boolean,
            align?: 'left' | 'center' | 'right' | 'apart',
            size?: string,
            radius?: string,
            withEdges?: boolean,
            withControls?: boolean,
            siblings?: number,
            boundaries?: number
        }
    }
    & IGridInlineEditProps
    & IGridExpansionProps;

function GridX<ControlPropsType>(props: GridXProps<ControlPropsType>) {
    const internalRef = useRef<IPageQueryable>(null);
    const queryRef = props.ref ?? internalRef;
    useGridFilter(queryRef, props.filter);
    const paginationRef = useRef<IPagination>(null);
    const paginationTopRef = useRef<IPagination>(null);
    const tableRef = useRef<any>(null);
    const topic: string = props.topic || useMemo(() => 'id' + Math.random(), []);

    const onDataChange = (newData: any[], oldData?: any[]) => {

        [paginationRef, paginationTopRef].forEach((ref) => {
            if (ref.current && ref.current.refresh) {
                try {
                    ref.current.refresh();
                } catch (error) {
                    console.error(error);
                }
            }
        });

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
    (pluginOptions as any).paginationOptions = props.paginationOptions;

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

    const paginationPosition = props.paginationPosition || 'bottom';
    const showTop = paginationPosition === 'top' || paginationPosition === 'both';
    const showBottom = paginationPosition === 'bottom' || paginationPosition === 'both';

    return <>
        <div className='py-datagrid-header'>
            <div className='py-datagrid-header-right-container'>
                <div className="py-datagrid-title">{renderTitle(props.title)}</div>
            </div>
            <div className='py-datagrid-header-left-container'>
                <Controls {...pluginOptions} />
            </div>
        </div>
        {showTop && <Pagination {...pluginOptions} ref={paginationTopRef} />}
        <div className="py-data-grid-table">
            <ApiDataTable {...props} storeOptions={storeOptions} onDataChange={onDataChange} ref={queryRef} tableRef={tableRef} />
        </div>
        {showBottom && <Pagination {...pluginOptions} ref={paginationRef} />}
    </>
}

export { GridX };
