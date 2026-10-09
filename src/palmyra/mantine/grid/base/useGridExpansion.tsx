import { ActionIcon, Group, Loader } from '@mantine/core';
import { getExpandedRowModel } from '@tanstack/react-table';
import { ReactNode, RefObject, useState } from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';

interface IGridExpandRef {
    expand: (id: any) => void;
    collapse: (id: any) => void;
    toggle: (id: any) => void;
    expandAll: () => void;
    collapseAll: () => void;
    isExpanded: (id: any) => boolean;
}

interface IGridExpansionProps {
    expandable?: boolean;
    getSubRows?: (row: any) => any[];
    childrenKey?: string;
    loadChildren?: (row: any) => Promise<any[]>;
    renderDetail?: (row: any) => ReactNode;
    getRowCanExpand?: (row: any) => boolean;
    accordion?: boolean;
    expandOnRowClick?: boolean;
    treeLines?: boolean;
    expanded?: boolean | Record<string, boolean>;
    defaultExpanded?: boolean | Record<string, boolean>;
    expandPosition?: 'first' | 'last';
    onExpandedChange?: (expanded: any) => void;
    expandRef?: RefObject<IGridExpandRef>;
}

interface IGridExpansionInput extends IGridExpansionProps {
    idKey: string;
}

const toObj = (e: any): Record<string, boolean> => (e === true ? {} : { ...(e || {}) });

const useGridExpansion = (opts: IGridExpansionInput) => {
    const {
        expandable, getSubRows, childrenKey = 'children', loadChildren, renderDetail,
        getRowCanExpand, accordion, expandOnRowClick, treeLines, defaultExpanded,
        expandPosition = 'first', onExpandedChange, idKey
    } = opts;

    const enabled = !!expandable && (!!getSubRows || !!loadChildren || !!renderDetail);
    const isTree = !!getSubRows || !!loadChildren;

    const isControlled = opts.expanded !== undefined;
    const [internalExpanded, setInternalExpanded] = useState<any>(defaultExpanded ?? {});
    const expanded = isControlled ? opts.expanded : internalExpanded;

    const [childrenState, setChildrenState] = useState<Record<string, any[]>>({});
    const [loadingState, setLoadingState] = useState<Record<string, boolean>>({});

    const commitExpanded = (next: any) => {
        if (!isControlled) setInternalExpanded(next);
        if (onExpandedChange) onExpandedChange(next);
    };

    const onExpandedChangeInternal = (updater: any) => {
        const prev = expanded;
        let next = typeof updater === 'function' ? updater(prev) : updater;
        if (accordion && next && next !== true && typeof next === 'object') {
            const prevObj = toObj(prev);
            const newly = Object.keys(next).filter((k) => next[k] && !prevObj[k]);
            if (newly.length) next = { [newly[0]]: true };
        }
        commitExpanded(next);
    };

    const subRowsOf = (originalRow: any): any[] => {
        if (getSubRows) return getSubRows(originalRow) || [];
        const c = originalRow[childrenKey];
        return Array.isArray(c) ? c : [];
    };

    const decorateData = (data: any[]): any[] => {
        if (!loadChildren || !data) return data;
        const walk = (rows: any[]): any[] => rows.map((r) => {
            const id = String(r[idKey]);
            const kids = childrenState[id];
            const existing = r[childrenKey];
            if (kids !== undefined) return { ...r, [childrenKey]: walk(kids) };
            if (Array.isArray(existing) && existing.length) return { ...r, [childrenKey]: walk(existing) };
            return r;
        });
        return walk(data);
    };

    const defaultCanExpand = (row: any): boolean => {
        const o = row.original;
        const id = String(o[idKey]);
        if (childrenState[id] !== undefined) return childrenState[id].length > 0;
        if (loadChildren) return o.hasChildren !== false;
        const c = getSubRows ? getSubRows(o) : o[childrenKey];
        return Array.isArray(c) && c.length > 0;
    };

    const ensureChildren = (row: any) => {
        if (!loadChildren) return;
        const id = String(row.original[idKey]);
        if (childrenState[id] !== undefined || loadingState[id]) return;
        setLoadingState((p) => ({ ...p, [id]: true }));
        Promise.resolve()
            .then(() => loadChildren(row.original))
            .then((kids) => setChildrenState((p) => ({ ...p, [id]: kids || [] })))
            .catch(() => setChildrenState((p) => ({ ...p, [id]: [] })))
            .finally(() => setLoadingState((p) => { const n = { ...p }; delete n[id]; return n; }));
    };

    const canExpand = getRowCanExpand || (isTree ? defaultCanExpand : () => !!renderDetail);

    const toggleRow = (row: any) => {
        if (isTree && !row.getIsExpanded()) ensureChildren(row);
        row.getToggleExpandedHandler()();
    };

    const getTableOptions = () => ({
        state: { expanded },
        onExpandedChange: onExpandedChangeInternal,
        getExpandedRowModel: getExpandedRowModel(),
        getRowCanExpand: canExpand,
        ...(isTree ? { getSubRows: subRowsOf } : {}),
        meta: { renderDetail, expandOnRowClick, onRowToggle: toggleRow }
    });

    const preProcessColumns = (columnDefs: any[]) => {
        if (!enabled) return;
        const expanderColumn = {
            id: 'expander',
            header: () => null,
            cell: ({ row }: any) => {
                const id = String(row.original[idKey]);
                const loading = loadingState[id];
                const toggle = (e: any) => {
                    e.stopPropagation();
                    toggleRow(row);
                };
                const indentClass = 'py-grid-tree-indent' + (treeLines ? ' py-grid-tree-line' : '');
                return (
                    <Group gap={2} wrap="nowrap">
                        {isTree && Array.from({ length: row.depth }).map((_, i) => (
                            <span key={i} className={indentClass} />
                        ))}
                        {loading
                            ? <Loader size={14} />
                            : row.getCanExpand() ? (
                                <ActionIcon variant="subtle" color="gray" size="sm" onClick={toggle}
                                    aria-label={row.getIsExpanded() ? 'Collapse' : 'Expand'}>
                                    {row.getIsExpanded() ? <FiChevronDown size={14} /> : <FiChevronRight size={14} />}
                                </ActionIcon>
                            ) : null}
                    </Group>
                );
            }
        };
        if (expandPosition === 'last') columnDefs.push(expanderColumn);
        else columnDefs.unshift(expanderColumn);
    };

    const setOne = (id: any, val: boolean) => {
        const o = toObj(expanded);
        const key = String(id);
        if (val) o[key] = true; else delete o[key];
        commitExpanded(accordion && val ? { [key]: true } : o);
    };

    const api: IGridExpandRef = {
        expand: (id) => setOne(id, true),
        collapse: (id) => setOne(id, false),
        toggle: (id) => setOne(id, !toObj(expanded)[String(id)]),
        expandAll: () => commitExpanded(true),
        collapseAll: () => commitExpanded({}),
        isExpanded: (id) => (expanded === true ? true : !!toObj(expanded)[String(id)])
    };

    return { enabled, isTree, getTableOptions, preProcessColumns, decorateData, childrenState, expanded, api };
};

export { useGridExpansion };
export type { IGridExpansionInput, IGridExpansionProps, IGridExpandRef };
