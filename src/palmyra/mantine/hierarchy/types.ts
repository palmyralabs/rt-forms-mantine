import { ReactNode, RefObject } from 'react';

type HierarchyNode = Record<string, any>;

type NodeDropPosition = 'before' | 'after' | 'inside';

interface INodeContext {
    id: string;
    depth: number;
    expanded: boolean;
    selected: boolean;
    hasChildren: boolean;
    loading: boolean;
}

interface IHierarchyMapRef {
    expand: (id: any) => void;
    collapse: (id: any) => void;
    toggle: (id: any) => void;
    expandAll: () => void;
    collapseAll: () => void;
    isExpanded: (id: any) => boolean;
    getSelected: () => any[];
    setSelected: (ids: any[]) => void;
    clearSelection: () => void;
    getData: () => HierarchyNode[];
}

interface IHierarchyMapProps {
    data?: HierarchyNode[];
    idKey?: string;
    labelKey?: string;
    childrenKey?: string;

    getLabel?: (node: HierarchyNode) => ReactNode;
    renderNode?: (node: HierarchyNode, ctx: INodeContext) => ReactNode;

    selectable?: false | 'single' | 'multiple';
    selectedIds?: any[];
    defaultSelectedIds?: any[];
    onSelectionChange?: (ids: any[], nodes: HierarchyNode[]) => void;

    expandedIds?: any[];
    defaultExpandedIds?: any[];
    defaultExpandAll?: boolean;
    onExpandedChange?: (ids: any[]) => void;

    loadChildren?: (node: HierarchyNode) => Promise<HierarchyNode[]>;
    hasChildren?: (node: HierarchyNode) => boolean;

    searchable?: boolean;
    searchPlaceholder?: string;
    filterNode?: (node: HierarchyNode, query: string) => boolean;

    editable?: boolean;
    allowAdd?: boolean;
    allowRename?: boolean;
    allowDelete?: boolean;
    allowDrag?: boolean;
    newNodeLabel?: string;
    onAdd?: (parent: HierarchyNode | null, node: HierarchyNode) => void;
    onRename?: (node: HierarchyNode, label: string) => void;
    onDelete?: (node: HierarchyNode) => void;
    onMove?: (node: HierarchyNode, newParent: HierarchyNode | null, index: number) => void;
    onChange?: (data: HierarchyNode[]) => void;

    onNodeClick?: (node: HierarchyNode) => void;

    toolbar?: boolean;
    emptyMessage?: ReactNode;
    mapRef?: RefObject<IHierarchyMapRef>;
    className?: string;
}

export type { HierarchyNode, NodeDropPosition, INodeContext, IHierarchyMapRef, IHierarchyMapProps };
