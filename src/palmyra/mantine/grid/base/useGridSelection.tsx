import { useEffect, useRef, useState } from "react";
import { Checkbox } from "@mantine/core";
import { getFilteredRowModel } from "@tanstack/react-table";

interface IGridSelectionInput {
    selectable?: 'single' | 'multi' | boolean;
    idKey: string;
    dataRef: { current: any[] };
    position?: 'first' | 'last';
    maxSelected?: number;
    defaultSelectedIds?: (string | number)[];
    defaultSelected?: (row: any) => boolean;
    defaultSelectBy?: { attribute: string, values: any[] };
    isRowSelectable?: (row: any) => boolean;
    getTotalRecords?: () => number;
    fetchAllRows?: () => Promise<any[]>;
    onSelectionChange?: (rows: any[]) => void;
}

const useGridSelection = (opts: IGridSelectionInput) => {
    const {
        selectable, idKey, dataRef, position = 'first', maxSelected, defaultSelectedIds,
        defaultSelected, defaultSelectBy, isRowSelectable, getTotalRecords, fetchAllRows, onSelectionChange
    } = opts;

    const matchFn = defaultSelected
        || (defaultSelectBy
            ? (row: any) => defaultSelectBy.values.some((v) => row[defaultSelectBy.attribute] === v)
            : undefined);

    const [rowSelection, setRowSelection] = useState<Record<string, boolean>>(() => {
        const init: Record<string, boolean> = {};
        (defaultSelectedIds || []).forEach((id) => { init[String(id)] = true; });
        return init;
    });
    const [allPagesSelected, setAllPagesSelected] = useState(false);
    const [loadingAll, setLoadingAll] = useState(false);
    const rowDataMap = useRef<Record<string, any>>({});

    const enabled = !!selectable;
    const multi = selectable === 'multi' || selectable === true;

    const autoAppliedRef = useRef<Set<string>>(new Set());
    const pageSignature = (dataRef.current || []).map((d) => String(d[idKey])).join(',');
    useEffect(() => {
        if (!matchFn) return;
        const toAdd: Record<string, boolean> = {};
        let count = Object.keys(rowSelection).filter((id) => rowSelection[id]).length;
        (dataRef.current || []).forEach((r) => {
            const id = String(r[idKey]);
            if (autoAppliedRef.current.has(id)) return;
            autoAppliedRef.current.add(id);
            if (isRowSelectable && !isRowSelectable(r)) return;
            if (maxSelected != null && count >= maxSelected) return;
            if (matchFn(r)) {
                rowDataMap.current[id] = r;
                toAdd[id] = true;
                count++;
            }
        });
        if (Object.keys(toAdd).length) {
            setAllPagesSelected(false);
            setRowSelection((prev) => ({ ...prev, ...toAdd }));
        }
    }, [pageSignature]);

    const onRowSelectionChange = (updater: any) => {
        setAllPagesSelected(false);
        setRowSelection((prev) => {
            const next = typeof updater === 'function' ? updater(prev) : updater;
            Object.keys(next).forEach((id) => {
                if (next[id]) {
                    const found = (dataRef.current || []).find((d) => String(d[idKey]) === id);
                    if (found) rowDataMap.current[id] = found;
                }
            });
            Object.keys(rowDataMap.current).forEach((id) => {
                if (!next[id]) delete rowDataMap.current[id];
            });
            return next;
        });
    };

    (dataRef.current || []).forEach((d) => {
        const id = String(d[idKey]);
        if (rowSelection[id]) rowDataMap.current[id] = d;
    });

    const selectedIds = Object.keys(rowSelection).filter((id) => rowSelection[id]);
    const selectedRows = selectedIds.map((id) => rowDataMap.current[id]).filter(Boolean);

    const selectionSignature = selectedIds.join(',') + '|' + selectedRows.length;
    useEffect(() => {
        if (enabled && onSelectionChange) onSelectionChange(selectedRows);
    }, [selectionSignature]);

    const clear = () => {
        setAllPagesSelected(false);
        setRowSelection({});
        rowDataMap.current = {};
    };

    const selectIds = (ids: (string | number)[]) => {
        const capped = maxSelected != null ? ids.slice(0, maxSelected) : ids;
        const next: Record<string, boolean> = {};
        capped.forEach((id) => {
            const key = String(id);
            next[key] = true;
            const found = (dataRef.current || []).find((d) => String(d[idKey]) === key);
            if (found) rowDataMap.current[key] = found;
        });
        setAllPagesSelected(false);
        setRowSelection(next);
    };

    const selectAllPages = async () => {
        if (!fetchAllRows) return;
        setLoadingAll(true);
        try {
            const rows = await fetchAllRows();
            const next: Record<string, boolean> = {};
            let count = 0;
            rows.forEach((r) => {
                if (maxSelected != null && count >= maxSelected) return;
                if (isRowSelectable && !isRowSelectable(r)) return;
                const key = String(r[idKey]);
                next[key] = true;
                rowDataMap.current[key] = r;
                count++;
            });
            setRowSelection(next);
            setAllPagesSelected(true);
        } finally {
            setLoadingAll(false);
        }
    };

    const capped = multi && maxSelected != null && maxSelected > 0;
    const atCap = capped && selectedIds.length >= (maxSelected as number);

    const selectablePageRows = (dataRef.current || []).filter((d) => !isRowSelectable || isRowSelectable(d));
    const pageIds = selectablePageRows.map((d) => String(d[idKey]));
    const pageFullySelected = pageIds.length > 0 && pageIds.every((id) => rowSelection[id]);
    const totalRecords = getTotalRecords ? getTotalRecords() : pageIds.length;

    const banner = {
        showSelectAll: multi && !capped && pageFullySelected && !allPagesSelected && !!fetchAllRows && totalRecords > pageIds.length,
        showClearAll: multi && !capped && allPagesSelected,
        total: totalRecords,
        pageCount: pageIds.length,
        loading: loadingAll,
        onSelectAll: selectAllPages,
        onClear: clear
    };

    const getTableOptions = () => ({
        state: { rowSelection },
        enableRowSelection: (row: any) => {
            if (isRowSelectable && !isRowSelectable(row.original)) return false;
            if (atCap && !rowSelection[row.id]) return false;
            return true;
        },
        enableMultiRowSelection: multi,
        onRowSelectionChange,
        getRowId: (row: any) => String(row[idKey]),
        getFilteredRowModel: getFilteredRowModel(),
        debug: false
    });

    const preProcessColumns = (columnDefs: any[]) => {
        const checkBoxColumn = {
            id: 'select',
            header: (multi && !capped)
                ? ({ table }: any) => {
                    const allChecked = (() => { try { return table.getIsAllRowsSelected(); } catch { return false; } })();
                    const someChecked = (() => { try { return table.getIsSomeRowsSelected(); } catch { return false; } })();
                    return (
                        <Checkbox size="xs" checked={allChecked} indeterminate={someChecked}
                            onChange={table.getToggleAllRowsSelectedHandler()} />
                    );
                }
                : () => null,
            cell: ({ row }: any) => (
                <div onClick={(e) => e.stopPropagation()}>
                    <Checkbox size="xs" checked={row.getIsSelected()}
                        disabled={!row.getCanSelect()} indeterminate={row.getIsSomeSelected()}
                        onChange={row.getToggleSelectedHandler()} />
                </div>
            )
        };
        if (position === 'last') columnDefs.push(checkBoxColumn);
        else columnDefs.unshift(checkBoxColumn);
    };

    return {
        enabled, multi, getTableOptions, preProcessColumns, selectedRows, selectedIds,
        clear, selectIds, selectAllPages, allPagesSelected, atCap, banner
    };
};

export { useGridSelection };
export type { IGridSelectionInput };
