import { ActionIcon, Button, Checkbox, Loader, Text, TextInput } from '@mantine/core';
import { ReactNode, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import {
    FiCheck, FiChevronDown, FiChevronRight, FiEdit2, FiMaximize2,
    FiMinimize2, FiPlus, FiSearch, FiTrash2
} from 'react-icons/fi';
import { HierarchyNode, IHierarchyMapProps, INodeContext, NodeDropPosition } from './types';
import {
    childrenOf, collectIds, findNode, findParent,
    indexOfChild, insertNode, isDescendant, removeNode, setChildren, toId, updateNode
} from './treeUtils';
import './HierarchyMap.css';

const HierarchyMap = (props: IHierarchyMapProps) => {
    const idKey = props.idKey || 'id';
    const labelKey = props.labelKey || 'label';
    const childrenKey = props.childrenKey || 'children';
    const selectable = props.selectable ?? false;
    const editable = !!props.editable;
    const canAdd = editable && props.allowAdd !== false;
    const canRename = editable && props.allowRename !== false;
    const canDelete = editable && props.allowDelete !== false;
    const canDrag = editable && props.allowDrag !== false;

    const nId = (n: HierarchyNode) => toId(n, idKey);
    const kidsOf = (n: HierarchyNode) => childrenOf(n, childrenKey);
    const rawLabel = (n: HierarchyNode): string =>
        String(n?.[labelKey] ?? n?.name ?? n?.title ?? n?.[idKey] ?? '');

    const [tree, setTree] = useState<HierarchyNode[]>(props.data || []);
    const dataRef = useRef(props.data);
    useEffect(() => {
        if (props.data !== dataRef.current) {
            dataRef.current = props.data;
            setTree(props.data || []);
        }
    }, [props.data]);

    const isExpControlled = props.expandedIds !== undefined;
    const [expInternal, setExpInternal] = useState<Set<string>>(() => {
        if (props.defaultExpandAll) return new Set(collectIds(props.data || [], idKey, childrenKey, true));
        return new Set((props.defaultExpandedIds || []).map(String));
    });
    const expandedSet = isExpControlled ? new Set((props.expandedIds || []).map(String)) : expInternal;
    const commitExpanded = (next: Set<string>) => {
        if (!isExpControlled) setExpInternal(next);
        if (props.onExpandedChange) props.onExpandedChange([...next]);
    };

    const isSelControlled = props.selectedIds !== undefined;
    const [selInternal, setSelInternal] = useState<Set<string>>(() => new Set((props.defaultSelectedIds || []).map(String)));
    const selectedSet = isSelControlled ? new Set((props.selectedIds || []).map(String)) : selInternal;
    const commitSelected = (next: Set<string>) => {
        if (!isSelControlled) setSelInternal(next);
        if (props.onSelectionChange) {
            const nodes = [...next].map((id) => findNode(tree, id, idKey, childrenKey)).filter(Boolean) as HierarchyNode[];
            props.onSelectionChange([...next], nodes);
        }
    };

    const [loadingSet, setLoadingSet] = useState<Set<string>>(new Set());
    const [loadedSet, setLoadedSet] = useState<Set<string>>(new Set());
    const [query, setQuery] = useState('');
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editValue, setEditValue] = useState('');
    const [addState, setAddState] = useState<{ parentId: string | null } | null>(null);
    const [addValue, setAddValue] = useState('');
    const [dragId, setDragId] = useState<string | null>(null);
    const [drop, setDrop] = useState<{ id: string; pos: NodeDropPosition } | null>(null);
    const idCounter = useRef(0);

    const commitTree = (next: HierarchyNode[]) => {
        setTree(next);
        if (props.onChange) props.onChange(next);
    };

    const nodeHasChildren = (n: HierarchyNode): boolean => {
        if (kidsOf(n).length) return true;
        if (props.loadChildren && !loadedSet.has(nId(n)))
            return props.hasChildren ? props.hasChildren(n) : n.hasChildren !== false;
        return false;
    };

    const ensureChildren = (n: HierarchyNode): Promise<void> => {
        const id = nId(n);
        if (!props.loadChildren || loadedSet.has(id) || loadingSet.has(id) || kidsOf(n).length)
            return Promise.resolve();
        setLoadingSet((p) => new Set(p).add(id));
        return Promise.resolve()
            .then(() => props.loadChildren!(n))
            .then((kids) => {
                setTree((prev) => setChildren(prev, id, idKey, childrenKey, kids || []));
                setLoadedSet((p) => new Set(p).add(id));
            })
            .catch(() => setLoadedSet((p) => new Set(p).add(id)))
            .finally(() => setLoadingSet((p) => { const s = new Set(p); s.delete(id); return s; }));
    };

    const toggle = (n: HierarchyNode) => {
        const id = nId(n);
        if (expandedSet.has(id)) {
            const next = new Set(expandedSet); next.delete(id); commitExpanded(next);
        } else {
            ensureChildren(n).then(() => commitExpanded(new Set(expandedSet).add(id)));
        }
    };

    const q = query.trim().toLowerCase();
    const searchActive = !!q && !!props.searchable;
    const matchFn = (n: HierarchyNode): boolean =>
        props.filterNode ? props.filterNode(n, query) : rawLabel(n).toLowerCase().includes(q);

    const { visibleSet, matchSet, forceExpand } = useMemo(() => {
        const vis = new Set<string>();
        const match = new Set<string>();
        const force = new Set<string>();
        if (!searchActive) return { visibleSet: vis, matchSet: match, forceExpand: force };
        const walk = (nodes: HierarchyNode[]): boolean => {
            let any = false;
            for (const n of nodes) {
                const id = nId(n);
                const self = matchFn(n);
                if (self) match.add(id);
                const childAny = walk(kidsOf(n));
                if (self || childAny) {
                    vis.add(id);
                    if (childAny) force.add(id);
                    any = true;
                }
            }
            return any;
        };
        walk(tree);
        return { visibleSet: vis, matchSet: match, forceExpand: force };
    }, [tree, q, searchActive]);

    const effExpanded = (id: string) => (searchActive ? forceExpand.has(id) || expandedSet.has(id) : expandedSet.has(id));

    useImperativeHandle(props.mapRef, () => ({
        expand: (id) => commitExpanded(new Set(expandedSet).add(String(id))),
        collapse: (id) => { const s = new Set(expandedSet); s.delete(String(id)); commitExpanded(s); },
        toggle: (id) => {
            const s = new Set(expandedSet); const k = String(id);
            s.has(k) ? s.delete(k) : s.add(k); commitExpanded(s);
        },
        expandAll: () => commitExpanded(new Set(collectIds(tree, idKey, childrenKey, true))),
        collapseAll: () => commitExpanded(new Set()),
        isExpanded: (id) => expandedSet.has(String(id)),
        getSelected: () => [...selectedSet].map((id) => findNode(tree, id, idKey, childrenKey)).filter(Boolean),
        setSelected: (ids) => commitSelected(new Set((ids || []).map(String))),
        clearSelection: () => commitSelected(new Set()),
        getData: () => tree
    }), [tree, expandedSet, selectedSet]);

    const selectNode = (n: HierarchyNode) => {
        if (props.onNodeClick) props.onNodeClick(n);
        if (!selectable) return;
        const id = nId(n);
        if (selectable === 'single') { commitSelected(new Set([id])); return; }
        const next = new Set(selectedSet);
        next.has(id) ? next.delete(id) : next.add(id);
        commitSelected(next);
    };

    const startRename = (n: HierarchyNode) => { setEditingId(nId(n)); setEditValue(rawLabel(n)); };
    const commitRename = () => {
        if (editingId == null) return;
        const id = editingId;
        const val = editValue.trim();
        setEditingId(null);
        if (!val) return;
        const next = updateNode(tree, id, idKey, childrenKey, (n) => ({ ...n, [labelKey]: val }));
        commitTree(next);
        const node = findNode(next, id, idKey, childrenKey);
        if (node && props.onRename) props.onRename(node, val);
    };

    const startAdd = (parentId: string | null) => {
        if (parentId != null) ensureChildren(findNode(tree, parentId, idKey, childrenKey) || {})
            .then(() => commitExpanded(new Set(expandedSet).add(parentId)));
        setAddState({ parentId }); setAddValue(props.newNodeLabel || '');
    };
    const commitAdd = () => {
        if (!addState) return;
        const val = addValue.trim();
        const parentId = addState.parentId;
        setAddState(null);
        if (!val) return;
        idCounter.current += 1;
        const newId = `py-node-${Date.now()}-${idCounter.current}`;
        const node: HierarchyNode = { [idKey]: newId, [labelKey]: val };
        const parent = parentId != null ? findNode(tree, parentId, idKey, childrenKey) : null;
        const index = parentId != null ? kidsOf(parent || {}).length : tree.length;
        const next = insertNode(tree, parentId, node, index, idKey, childrenKey);
        commitTree(next);
        if (props.onAdd) props.onAdd(parent, node);
    };

    const deleteNode = (n: HierarchyNode) => {
        const { tree: next } = removeNode(tree, nId(n), idKey, childrenKey);
        commitTree(next);
        if (props.onDelete) props.onDelete(n);
    };

    const doMove = (sourceId: string, targetId: string, pos: NodeDropPosition) => {
        if (sourceId === targetId) return;
        const source = findNode(tree, sourceId, idKey, childrenKey);
        if (!source) return;
        if (isDescendant(source, targetId, idKey, childrenKey)) return;
        const { tree: without, removed } = removeNode(tree, sourceId, idKey, childrenKey);
        if (!removed) return;
        let newParentId: string | null;
        let index: number;
        let next: HierarchyNode[];
        if (pos === 'inside') {
            newParentId = targetId;
            const tgt = findNode(without, targetId, idKey, childrenKey);
            index = kidsOf(tgt || {}).length;
            next = insertNode(without, targetId, removed, index, idKey, childrenKey);
            commitExpanded(new Set(expandedSet).add(targetId));
        } else {
            const parent = findParent(without, targetId, idKey, childrenKey);
            newParentId = parent ? nId(parent) : null;
            const sibIndex = indexOfChild(without, newParentId, targetId, idKey, childrenKey);
            index = pos === 'before' ? sibIndex : sibIndex + 1;
            next = insertNode(without, newParentId, removed, index, idKey, childrenKey);
        }
        commitTree(next);
        if (props.onMove) props.onMove(removed, newParentId ? findNode(next, newParentId, idKey, childrenKey) : null, index);
    };

    const onDragOverNode = (e: any, targetId: string) => {
        if (!canDrag || dragId == null || dragId === targetId) return;
        e.preventDefault();
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const third = rect.width / 3;
        const pos: NodeDropPosition = x < third ? 'before' : x > rect.width - third ? 'after' : 'inside';
        const source = findNode(tree, dragId, idKey, childrenKey);
        if (source && isDescendant(source, targetId, idKey, childrenKey)) return;
        setDrop({ id: targetId, pos });
    };

    const highlight = (text: string): ReactNode => {
        if (!searchActive) return text;
        const lower = text.toLowerCase();
        const idx = lower.indexOf(q);
        if (idx < 0) return text;
        return (<>
            {text.slice(0, idx)}
            <span className="py-hmap-hit">{text.slice(idx, idx + q.length)}</span>
            {text.slice(idx + q.length)}
        </>);
    };

    const renderAddInput = (parentId: string | null) => (
        <TextInput size="xs" autoFocus value={addValue} placeholder="New node"
            onChange={(e) => setAddValue(e.currentTarget.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') commitAdd(); if (e.key === 'Escape') setAddState(null); }}
            onBlur={commitAdd}
            rightSection={<ActionIcon size="xs" variant="subtle" color="teal"
                onMouseDown={(e) => e.preventDefault()} onClick={commitAdd}><FiCheck size={12} /></ActionIcon>}
            data-parent={parentId == null ? 'root' : parentId} />
    );

    const renderNode = (n: HierarchyNode, depth: number): ReactNode => {
        const id = nId(n);
        const hasKids = nodeHasChildren(n);
        const expanded = effExpanded(id);
        const selected = selectedSet.has(id);
        const loading = loadingSet.has(id);
        const editing = editingId === id;
        const ctx: INodeContext = { id, depth, expanded, selected, hasChildren: hasKids, loading };

        const boxClass = ['py-hmap-node'];
        if (selected) boxClass.push('py-hmap-node-selected');
        if (dragId === id) boxClass.push('py-hmap-node-dragging');
        if (searchActive && matchSet.size && !matchSet.has(id)) boxClass.push('py-hmap-node-dim');
        if (drop && drop.id === id) boxClass.push('py-hmap-drop-' + drop.pos);

        const content = editing ? (
            <TextInput size="xs" autoFocus value={editValue}
                onChange={(e) => setEditValue(e.currentTarget.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') commitRename(); if (e.key === 'Escape') setEditingId(null); }}
                onBlur={commitRename} onClick={(e) => e.stopPropagation()} />
        ) : props.renderNode ? props.renderNode(n, ctx) : (
            <span className="py-hmap-node-label">{highlight(rawLabel(n))}</span>
        );

        return (
            <div className={boxClass.join(' ')}
                draggable={canDrag && !editing}
                onDragStart={() => canDrag && setDragId(id)}
                onDragEnd={() => { setDragId(null); setDrop(null); }}
                onDragOver={(e) => onDragOverNode(e, id)}
                onDragLeave={() => setDrop((d) => (d && d.id === id ? null : d))}
                onDrop={(e) => { e.preventDefault(); if (dragId && drop && drop.id === id) doMove(dragId, id, drop.pos); setDragId(null); setDrop(null); }}
                onClick={() => !editing && selectNode(n)}>
                {hasKids && (loading
                    ? <Loader size={13} />
                    : <ActionIcon variant="subtle" color="gray" size="xs"
                        onClick={(e) => { e.stopPropagation(); toggle(n); }}
                        aria-label={expanded ? 'Collapse' : 'Expand'}>
                        {expanded ? <FiChevronDown size={13} /> : <FiChevronRight size={13} />}
                    </ActionIcon>)}

                {selectable === 'multiple' && !editing && !props.renderNode && (
                    <Checkbox size="xs" checked={selected} readOnly tabIndex={-1}
                        onClick={(e) => { e.stopPropagation(); selectNode(n); }} />
                )}

                {content}

                {editable && !editing && (
                    <span className="py-hmap-actions">
                        {canAdd && (
                            <ActionIcon variant="subtle" color="blue" size="xs" aria-label="Add child"
                                onClick={(e) => { e.stopPropagation(); startAdd(id); }}><FiPlus size={12} /></ActionIcon>
                        )}
                        {canRename && (
                            <ActionIcon variant="subtle" color="gray" size="xs" aria-label="Rename"
                                onClick={(e) => { e.stopPropagation(); startRename(n); }}><FiEdit2 size={12} /></ActionIcon>
                        )}
                        {canDelete && (
                            <ActionIcon variant="subtle" color="red" size="xs" aria-label="Delete"
                                onClick={(e) => { e.stopPropagation(); deleteNode(n); }}><FiTrash2 size={12} /></ActionIcon>
                        )}
                    </span>
                )}
            </div>
        );
    };

    const renderList = (nodes: HierarchyNode[], depth: number): ReactNode => {
        const list = searchActive ? nodes.filter((n) => visibleSet.has(nId(n))) : nodes;
        const items: ReactNode[] = list.map((n) => {
            const id = nId(n);
            const expanded = effExpanded(id);
            const kids = kidsOf(n);
            const showKids = expanded && kids.length > 0;
            const addingHere = addState && addState.parentId === id;
            return (
                <li key={id}>
                    {renderNode(n, depth)}
                    {(showKids || addingHere) && (
                        <ul>
                            {showKids && renderChildLis(kids, depth + 1)}
                            {addingHere && <li><div className="py-hmap-node">{renderAddInput(id)}</div></li>}
                        </ul>
                    )}
                </li>
            );
        });
        return items;
    };

    const renderChildLis = (nodes: HierarchyNode[], depth: number): ReactNode => renderList(nodes, depth);

    const rootList = searchActive ? tree.filter((n) => visibleSet.has(nId(n))) : tree;
    const addingRoot = addState && addState.parentId === null;
    const isEmpty = rootList.length === 0 && !addingRoot;

    const showToolbar = props.toolbar !== false && (props.searchable || editable);

    return (
        <div className={'py-hmap' + (props.className ? ' ' + props.className : '')}>
            {showToolbar && (
                <div className="py-hmap-toolbar">
                    {props.searchable && (
                        <TextInput size="xs" value={query} leftSection={<FiSearch size={14} />}
                            placeholder={props.searchPlaceholder || 'Search…'} w={220}
                            onChange={(e) => setQuery(e.currentTarget.value)} />
                    )}
                    <ActionIcon variant="default" size="sm" aria-label="Expand all"
                        onClick={() => commitExpanded(new Set(collectIds(tree, idKey, childrenKey, true)))}>
                        <FiMaximize2 size={14} />
                    </ActionIcon>
                    <ActionIcon variant="default" size="sm" aria-label="Collapse all"
                        onClick={() => commitExpanded(new Set())}>
                        <FiMinimize2 size={14} />
                    </ActionIcon>
                    <div className="py-hmap-toolbar-spacer" />
                    {canAdd && (
                        <Button size="xs" variant="light" leftSection={<FiPlus size={14} />}
                            onClick={() => startAdd(null)}>Add root</Button>
                    )}
                </div>
            )}

            <div className="py-hmap-scroll">
                {isEmpty
                    ? <div className="py-hmap-empty">{props.emptyMessage || <Text size="sm" c="dimmed">No data</Text>}</div>
                    : (
                        <ul className="py-hmap-tree">
                            {renderList(rootList, 0)}
                            {addingRoot && <li><div className="py-hmap-node">{renderAddInput(null)}</div></li>}
                        </ul>
                    )}
            </div>
        </div>
    );
};

export { HierarchyMap };
