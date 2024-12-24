import { IPageQueryable, DataGridPluginOptions, GridXOptions } from "@palmyralabs/rt-forms";
import { forwardRef, MutableRefObject, useMemo, useRef } from "react";
import { DropdownButton } from "../widget/DropdownButton";
import { TbFilterShare } from "react-icons/tb";
import { FilterForm } from "./plugins/filter/FilterForm";
import { SelectablePagination } from "./plugins/pagination/SelectablePagination";
import './DataGrid.css'
import { renderTitle } from "../widget";
import { ApiDataTable } from "./base/ApiDataTable";

const GridX = forwardRef(function GridX<ControlPropsType>(props: GridXOptions<ControlPropsType>, ref: MutableRefObject<IPageQueryable>) {
    const queryRef = ref || useRef<IPageQueryable>();
    const paginationRef = useRef<IPagination>();
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
    }

    const Controls: (props: any) => JSX.Element = props.DataGridControls ||
        ((o: DataGridPluginOptions) => <><DropdownButton title="Filter" PrefixAdornment={<TbFilterShare />}>
            <FilterForm {...o} />
        </DropdownButton></>)
    const Pagination = props.DataGridPagination || SelectablePagination;

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
            <ApiDataTable {...props} onDataChange={onDataChange} ref={queryRef} />
        </div>
        <Pagination {...pluginOptions} ref={paginationRef} />
    </>
});

export { GridX }