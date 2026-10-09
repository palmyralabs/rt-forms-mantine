import { Group, Pagination, Select, Text } from "@mantine/core";
import { DataGridPluginOptions } from "@palmyralabs/rt-forms";
import { delayGenerator } from "@palmyralabs/ts-utils";
import { RefObject, useCallback, useImperativeHandle, useState } from "react";
import './SelectablePagination.css';

function SelectablePagination(o: DataGridPluginOptions & { ref?: RefObject<{ refresh: () => void }> }) {
    const delay = useCallback(delayGenerator(50), []);
    const pageQuery: any = o.queryRef?.current;
    const [, setCount] = useState<number>(0);

    useImperativeHandle(o.ref, () => ({
        refresh() {
            delay(() => setCount((d: number) => d + 1));
        }
    }), [o.ref]);

    if (!pageQuery) return null;

    const pageSizeOptions = Array.isArray(o.pageSize) ? o.pageSize : (o.pageSize ? [o.pageSize] : [20]);
    const totalRecords = pageQuery.getTotalRecords?.() || 0;
    const rowsPerPage = pageQuery.getQueryLimit?.()?.limit || pageSizeOptions[0] || 20;
    const currentPage = pageQuery.getPageNo?.() || 0;
    const totalPages = Math.ceil(totalRecords / rowsPerPage) || 0;
    const startRecord = totalRecords ? currentPage * rowsPerPage + 1 : 0;
    const endRecord = Math.min((currentPage + 1) * rowsPerPage, totalRecords);

    const minPage = o.ignoreSinglePage ? 1 : 0;
    if (isNaN(totalPages) || totalPages <= minPage) return null;

    const onPageSizeChange = (value: string | null) => {
        if (value) pageQuery.setPageSize(parseInt(value, 10));
    };
    const onPageChange = (page: number) => pageQuery.gotoPage(page - 1);

    const showSizeSelect = pageSizeOptions.length > 1;

    return (
        <Group justify="space-between" align="center" wrap="wrap" gap="sm" w="100%" className="py-pagination">
            <Text size="sm" c="dimmed" className="py-pagination-info">
                Showing <b>{startRecord} – {endRecord}</b> of <b>{totalRecords}</b>
            </Text>

            <Group gap="md" wrap="nowrap" className="py-pagination-controls">
                {showSizeSelect && (
                    <Group gap={3} wrap="nowrap">
                        <Text size="xs" c="dimmed">Rows per page</Text>
                        <Select size="xs" className="py-pagination-size"
                            value={String(rowsPerPage)}
                            onChange={onPageSizeChange}
                            checkIconPosition="right"
                            allowDeselect={false}
                            comboboxProps={{ withinPortal: true }}
                            data={pageSizeOptions.map((s) => ({ value: String(s), label: String(s) }))} />
                    </Group>
                )}

                <Pagination
                    total={totalPages}
                    value={currentPage + 1}
                    onChange={onPageChange}
                    size="sm" radius="xl" withControls withEdges siblings={1} boundaries={1} />
            </Group>
        </Group>
    );
}

export { SelectablePagination };
