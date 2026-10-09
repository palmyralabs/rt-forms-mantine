import { ActionIcon, Group } from '@mantine/core';
import { getExpandedRowModel } from '@tanstack/react-table';
import { ReactNode, useState } from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';

interface IGridExpansionInput {
    expandable?: boolean;
    getSubRows?: (row: any) => any[];
    renderDetail?: (row: any) => ReactNode;
    getRowCanExpand?: (row: any) => boolean;
    defaultExpanded?: boolean | Record<string, boolean>;
    expandPosition?: 'first' | 'last';
    onExpandedChange?: (expanded: any) => void;
}

const useGridExpansion = (opts: IGridExpansionInput) => {
    const {
        expandable, getSubRows, renderDetail, getRowCanExpand,
        defaultExpanded, expandPosition = 'first', onExpandedChange
    } = opts;

    const enabled = !!expandable && (!!getSubRows || !!renderDetail);
    const isTree = !!getSubRows;

    const [expanded, setExpanded] = useState<any>(defaultExpanded ?? {});

    const onExpandedChangeInternal = (updater: any) => {
        setExpanded((prev: any) => {
            const next = typeof updater === 'function' ? updater(prev) : updater;
            if (onExpandedChange) onExpandedChange(next);
            return next;
        });
    };

    const canExpand = getRowCanExpand
        || (isTree
            ? (row: any) => { const c = getSubRows!(row.original); return !!c && c.length > 0; }
            : () => !!renderDetail);

    const getTableOptions = () => ({
        state: { expanded },
        onExpandedChange: onExpandedChangeInternal,
        getExpandedRowModel: getExpandedRowModel(),
        getRowCanExpand: canExpand,
        ...(isTree ? { getSubRows } : {}),
        meta: { renderDetail }
    });

    const preProcessColumns = (columnDefs: any[]) => {
        if (!enabled) return;
        const expanderColumn = {
            id: 'expander',
            header: () => null,
            cell: ({ row }: any) => (
                <Group gap={2} wrap="nowrap">
                    {isTree && Array.from({ length: row.depth }).map((_, i) => (
                        <span key={i} className="py-grid-tree-indent" />
                    ))}
                    {row.getCanExpand() ? (
                        <ActionIcon variant="subtle" color="gray" size="sm"
                            onClick={(e: any) => { e.stopPropagation(); row.getToggleExpandedHandler()(); }}
                            aria-label={row.getIsExpanded() ? 'Collapse' : 'Expand'}>
                            {row.getIsExpanded() ? <FiChevronDown size={14} /> : <FiChevronRight size={14} />}
                        </ActionIcon>
                    ) : null}
                </Group>
            )
        };
        if (expandPosition === 'last') columnDefs.push(expanderColumn);
        else columnDefs.unshift(expanderColumn);
    };

    return { enabled, isTree, getTableOptions, preProcessColumns, expanded, setExpanded };
};

export { useGridExpansion };
export type { IGridExpansionInput };
