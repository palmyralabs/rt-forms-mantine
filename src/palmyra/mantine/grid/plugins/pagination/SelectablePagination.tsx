import { Pagination, Select } from "@mantine/core";
import { DataGridPluginOptions } from "@palmyralabs/rt-forms";
import { delayGenerator } from "@palmyralabs/ts-utils";
import { forwardRef, RefObject, useCallback, useImperativeHandle, useRef, useState } from "react";
import './SelectablePagination.css';

const SelectablePagination = forwardRef(function pagination(o: DataGridPluginOptions, ref: RefObject<IPagination>) {

    const delay = useCallback(delayGenerator(50), [])
    const pageQuery = o.queryRef?.current;
    const [_count, setCount] = useState<number>(0); // Counter used to refresh the state of pagination
    const [_value, setValue] = useState<any>();

    const currentRef = ref ? ref : useRef<IPagination>(null);

    useImperativeHandle(currentRef, () => {
        return {
            refresh() {
                delay(() => setCount((d: number) => d + 1));
            }
        };
    }, [currentRef]);

    const handleRowsPerPageChange = (event, option) => {
        const limit = parseInt(option.value, 10);
        setValue(option.value)
        pageQuery.setPageSize(limit);
    }

    const totalRecords = pageQuery?.getTotalRecords() || 0;
    const queryLimit = pageQuery?.getQueryLimit() || { limit: 15 }

    const pageSizeOptions = Array.isArray(o.pageSize) ? o.pageSize : [o.pageSize];

    const currentPage = pageQuery?.getPageNo() || 0;
    const rowsPerPage = queryLimit.limit || 25;
    const totalPages = Math.ceil(totalRecords / rowsPerPage);
    const startRecord = currentPage * rowsPerPage + 1;
    const endRecord = Math.min((currentPage + 1) * rowsPerPage, totalRecords);

    const nextPage = (newPage: number) => {
        pageQuery.gotoPage(newPage - 1);
    };

    var page = {
        value: null,
        default: null
    }

    const sData = pageSizeOptions.map((pageSize) => {
        return page.value = pageSize
    })

    const isEnabled = () => {
        const minPage = o.ignoreSinglePage ? 1 : 0;
        return !isNaN(totalPages)
            && totalPages > minPage;
    }

    return <div>
        {(isEnabled()) && (
            <div>
                <div className="py-selectable-pagination-container">
                    <div className="py-selectable-pagination-left-container">
                        {pageSizeOptions && pageSizeOptions.length > 1 ? (
                            <div className="py-selectable-pagination-left-content-container">
                                <div><span>Showing</span></div>
                                <div className="py-selectable-pagination-select-field">
                                    <div style={{ width: '100px' }}>
                                        <Select
                                            id="rows-per-page-select"
                                            defaultValue={pageSizeOptions[0].toString()}
                                            onChange={handleRowsPerPageChange}
                                            size="xs"
                                            // value={value ? `` + value + `` : null}
                                            checkIconPosition="right"
                                            data={sData.toString().split(',')}>
                                        </Select>
                                    </div>
                                </div>
                                <div className="py-selectable-pagination-show-result"><span>{startRecord} - {endRecord} of {totalRecords} Results</span></div>
                            </div>
                        ) : null
                        }
                    </div>
                    <div className="py-selectable-pagination-right-container">
                        <Pagination total={totalPages}
                            onChange={nextPage}
                            value={pageQuery.getPageNo() + 1}
                        />
                    </div>
                </div>
            </div>
        )}
    </div>

});

export { SelectablePagination };
