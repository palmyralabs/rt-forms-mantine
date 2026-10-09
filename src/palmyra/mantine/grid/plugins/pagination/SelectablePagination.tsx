import { ActionIcon, Group, NumberInput, Pagination, Select, Text } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { DataGridPluginOptions } from "@palmyralabs/rt-forms";
import { delayGenerator } from "@palmyralabs/ts-utils";
import { RefObject, useCallback, useImperativeHandle, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import './SelectablePagination.css';

interface IPaginationOptions {
    compact?: boolean;
    responsive?: boolean;
    compactWidth?: number;
    pageSizePosition?: 'left' | 'right';
    keyboardNavigation?: boolean;
    showGoTo?: boolean;
    disableOnLoading?: boolean;
    showRange?: boolean;
    showPageSize?: boolean;
    align?: 'left' | 'center' | 'right' | 'apart';
    size?: string;
    radius?: string;
    withEdges?: boolean;
    withControls?: boolean;
    siblings?: number;
    boundaries?: number;
}

function SelectablePagination(o: DataGridPluginOptions & { ref?: RefObject<{ refresh: () => void }> }) {
    const delay = useCallback(delayGenerator(50), []);
    const goDelay = useCallback(delayGenerator(400), []);
    const pageQuery: any = o.queryRef?.current;
    const [, setCount] = useState<number>(0);
    const [goInput, setGoInput] = useState<string | number>('');
    const { width } = useViewportSize();

    useImperativeHandle(o.ref, () => ({
        refresh() {
            delay(() => setCount((d: number) => d + 1));
        }
    }), [o.ref]);

    if (!pageQuery) return null;

    const opts: IPaginationOptions = (o as any).paginationOptions || {};
    const responsive = opts.responsive !== false;
    const compactWidth = opts.compactWidth || 640;
    const pageSizePosition = opts.pageSizePosition || 'right';
    const kb = !!opts.keyboardNavigation;
    const align = opts.align || 'apart';

    const pageSizeOptions = Array.isArray(o.pageSize) ? o.pageSize : (o.pageSize ? [o.pageSize] : [20]);
    const totalRecords = pageQuery.getTotalRecords?.() || 0;
    const rowsPerPage = pageQuery.getQueryLimit?.()?.limit || pageSizeOptions[0] || 20;
    const currentPage = pageQuery.getPageNo?.() || 0;
    const totalPages = Math.ceil(totalRecords / rowsPerPage) || 0;
    const startRecord = totalRecords ? currentPage * rowsPerPage + 1 : 0;
    const endRecord = Math.min((currentPage + 1) * rowsPerPage, totalRecords);
    const loading = opts.disableOnLoading !== false && !!pageQuery.isLoading;

    const minPage = o.ignoreSinglePage ? 1 : 0;
    if (isNaN(totalPages) || totalPages <= minPage) return null;

    const compact = !!opts.compact || (responsive && width > 0 && width < compactWidth);

    const goto = (page1Based: number) => {
        if (page1Based >= 1 && page1Based <= totalPages) pageQuery.gotoPage(page1Based - 1);
    };
    const onPageSizeChange = (value: string | null) => {
        if (value) pageQuery.setPageSize(parseInt(value, 10));
    };
    const onGoChange = (v: any) => {
        setGoInput(v);
        const n = Number(v);
        if (n >= 1 && n <= totalPages) {
            goDelay(() => {
                if (n - 1 !== (pageQuery.getPageNo?.() || 0)) pageQuery.gotoPage(n - 1);
            });
        }
    };

    const onKeyDown = kb ? (e: any) => {
        if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); goto(currentPage); }
        else if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); goto(currentPage + 2); }
        else if (e.key === 'Home') { e.preventDefault(); goto(1); }
        else if (e.key === 'End') { e.preventDefault(); goto(totalPages); }
    } : undefined;

    const showSizeSelect = opts.showPageSize !== false && pageSizeOptions.length > 1;
    const showRange = opts.showRange !== false;
    const justify = align === 'apart' ? 'space-between' : align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start';
    const controlsClass = 'py-pagination-controls' + (align === 'apart' ? '' : ' py-pagination-controls-inline');

    const sizeSelect = showSizeSelect ? (
        <Group gap={6} wrap="nowrap">
            <Text size="xs" c="dimmed">Rows per page</Text>
            <Select size="xs" className="py-pagination-size"
                value={String(rowsPerPage)}
                onChange={onPageSizeChange}
                disabled={loading}
                checkIconPosition="right"
                allowDeselect={false}
                comboboxProps={{ withinPortal: true }}
                data={pageSizeOptions.map((s) => ({ value: String(s), label: String(s) }))} />
        </Group>
    ) : null;

    return (
        <div className="py-pagination-wrapper">
            <Group justify={justify} align="center" wrap="wrap" gap="sm" w="100%"
                tabIndex={kb ? 0 : undefined} onKeyDown={onKeyDown} className="py-pagination">
                <Group gap="md" wrap="nowrap">
                    {!compact && pageSizePosition === 'left' && sizeSelect}
                    {!compact && showRange && (
                        <Text size="sm" c="dimmed" className="py-pagination-info">
                            Showing <b>{startRecord} – {endRecord}</b> of <b>{totalRecords}</b>
                        </Text>
                    )}
                </Group>

                <Group gap="md" wrap="nowrap" className={controlsClass}>
                    {!compact && pageSizePosition === 'right' && sizeSelect}

                    {compact ? (
                        <Group gap={6} wrap="nowrap">
                            <ActionIcon variant="default" size="md" disabled={loading || currentPage <= 0}
                                onClick={() => goto(currentPage)} aria-label="Previous page">
                                <FiChevronLeft size={16} />
                            </ActionIcon>
                            <Text size="sm" fw={500}>Page {currentPage + 1} / {totalPages}</Text>
                            <ActionIcon variant="default" size="md" disabled={loading || currentPage + 1 >= totalPages}
                                onClick={() => goto(currentPage + 2)} aria-label="Next page">
                                <FiChevronRight size={16} />
                            </ActionIcon>
                        </Group>
                    ) : (
                        <Pagination
                            total={totalPages}
                            value={currentPage + 1}
                            onChange={goto}
                            disabled={loading}
                            size={(opts.size as any) || 'sm'}
                            radius={(opts.radius as any) || 'xl'}
                            withControls={opts.withControls !== false}
                            withEdges={opts.withEdges !== false}
                            siblings={opts.siblings ?? 1}
                            boundaries={opts.boundaries ?? 1} />
                    )}

                    {!compact && opts.showGoTo && (
                        <Group gap={6} wrap="nowrap">
                            <Text size="xs" c="dimmed">Go to</Text>
                            <NumberInput size="xs" className="py-pagination-goto"
                                min={1} max={totalPages} value={goInput}
                                onChange={onGoChange}
                                disabled={loading}
                                hideControls clampBehavior="strict" />
                        </Group>
                    )}
                </Group>
            </Group>
        </div>
    );
}

export { SelectablePagination };
export type { IPaginationOptions };
