import { delayGenerator, topic } from "@palmyralabs/ts-utils";
import { useEffect, useState } from "react";
import './SelectablePagination.css';
import { DataGridPluginOptions } from "@palmyralabs/rt-forms";
import { Pagination, Select } from "@mantine/core";

const delay = delayGenerator(10)

const SelectablePagination = (o: DataGridPluginOptions) => {

    const pageQuery = o.queryRef?.current;
    const [_count, setCount] = useState<number>(0); // Counter used to refresh the state of pagination
    const [_value, setValue] = useState<any>();

    useEffect(() => {
        if (o.topic) {
            const handler = topic.subscribe(o.topic + "/data", () => {
                delay(() => setCount((d: number) => d + 1));
            });

            return () => { topic.unsubscribe(handler) };
        }
    }, [o.topic])

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

    return <div>
        {(!isNaN(totalPages)) && (
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
                        />
                    </div>
                </div>
            </div>
        )}
    </div>

}

export { SelectablePagination }