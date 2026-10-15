import { HierarchyNode } from './types';

const toId = (node: HierarchyNode, idKey: string): string => String(node?.[idKey]);

const childrenOf = (node: HierarchyNode, childrenKey: string): HierarchyNode[] => {
    const c = node?.[childrenKey];
    return Array.isArray(c) ? c : [];
};

const findNode = (tree: HierarchyNode[], id: string, idKey: string, childrenKey: string): HierarchyNode | null => {
    for (const n of tree) {
        if (toId(n, idKey) === id) return n;
        const found = findNode(childrenOf(n, childrenKey), id, idKey, childrenKey);
        if (found) return found;
    }
    return null;
};

const findParent = (tree: HierarchyNode[], id: string, idKey: string, childrenKey: string,
    parent: HierarchyNode | null = null): HierarchyNode | null => {
    for (const n of tree) {
        if (toId(n, idKey) === id) return parent;
        const found = findParent(childrenOf(n, childrenKey), id, idKey, childrenKey, n);
        if (found !== null) return found;
        if (childrenOf(n, childrenKey).some((c) => toId(c, idKey) === id)) return n;
    }
    return null;
};

const getAncestorIds = (tree: HierarchyNode[], id: string, idKey: string, childrenKey: string): string[] => {
    const path: string[] = [];
    const walk = (nodes: HierarchyNode[], trail: string[]): boolean => {
        for (const n of nodes) {
            const nid = toId(n, idKey);
            if (nid === id) {
                path.push(...trail);
                return true;
            }
            if (walk(childrenOf(n, childrenKey), [...trail, nid])) return true;
        }
        return false;
    };
    walk(tree, []);
    return path;
};

const collectIds = (tree: HierarchyNode[], idKey: string, childrenKey: string,
    onlyWithChildren = false): string[] => {
    const ids: string[] = [];
    const walk = (nodes: HierarchyNode[]) => {
        for (const n of nodes) {
            const kids = childrenOf(n, childrenKey);
            if (!onlyWithChildren || kids.length) ids.push(toId(n, idKey));
            walk(kids);
        }
    };
    walk(tree);
    return ids;
};

const isDescendant = (node: HierarchyNode, maybeId: string, idKey: string, childrenKey: string): boolean => {
    for (const c of childrenOf(node, childrenKey)) {
        if (toId(c, idKey) === maybeId) return true;
        if (isDescendant(c, maybeId, idKey, childrenKey)) return true;
    }
    return false;
};

const updateNode = (tree: HierarchyNode[], id: string, idKey: string, childrenKey: string,
    updater: (n: HierarchyNode) => HierarchyNode): HierarchyNode[] =>
    tree.map((n) => {
        if (toId(n, idKey) === id) return updater(n);
        const kids = childrenOf(n, childrenKey);
        if (kids.length) return { ...n, [childrenKey]: updateNode(kids, id, idKey, childrenKey, updater) };
        return n;
    });

const setChildren = (tree: HierarchyNode[], id: string, idKey: string, childrenKey: string,
    kids: HierarchyNode[]): HierarchyNode[] =>
    updateNode(tree, id, idKey, childrenKey, (n) => ({ ...n, [childrenKey]: kids }));

const removeNode = (tree: HierarchyNode[], id: string, idKey: string, childrenKey: string):
    { tree: HierarchyNode[]; removed: HierarchyNode | null } => {
    let removed: HierarchyNode | null = null;
    const walk = (nodes: HierarchyNode[]): HierarchyNode[] => {
        const next: HierarchyNode[] = [];
        for (const n of nodes) {
            if (toId(n, idKey) === id) {
                removed = n;
                continue;
            }
            const kids = childrenOf(n, childrenKey);
            if (kids.length) next.push({ ...n, [childrenKey]: walk(kids) });
            else next.push(n);
        }
        return next;
    };
    const result = walk(tree);
    return { tree: result, removed };
};

const insertNode = (tree: HierarchyNode[], parentId: string | null, node: HierarchyNode,
    index: number, idKey: string, childrenKey: string): HierarchyNode[] => {
    if (parentId === null) {
        const next = [...tree];
        const at = index < 0 || index > next.length ? next.length : index;
        next.splice(at, 0, node);
        return next;
    }
    return updateNode(tree, parentId, idKey, childrenKey, (n) => {
        const kids = [...childrenOf(n, childrenKey)];
        const at = index < 0 || index > kids.length ? kids.length : index;
        kids.splice(at, 0, node);
        return { ...n, [childrenKey]: kids };
    });
};

const indexOfChild = (tree: HierarchyNode[], parentId: string | null, id: string,
    idKey: string, childrenKey: string): number => {
    const siblings = parentId === null ? tree
        : childrenOf(findNode(tree, parentId, idKey, childrenKey) || {}, childrenKey);
    return siblings.findIndex((c) => toId(c, idKey) === id);
};

export {
    toId, childrenOf, findNode, findParent, getAncestorIds, collectIds,
    isDescendant, updateNode, setChildren, removeNode, insertNode, indexOfChild
};
