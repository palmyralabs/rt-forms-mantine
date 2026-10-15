import { describe, it, expect } from 'vitest';
import {
    findNode, findParent, getAncestorIds, collectIds, isDescendant,
    updateNode, setChildren, removeNode, insertNode, indexOfChild
} from '../src/palmyra/mantine/hierarchy/treeUtils';

const ID = 'id';
const CH = 'children';

const makeTree = () => ([
    {
        id: 'ceo', label: 'CEO', children: [
            {
                id: 'cto', label: 'CTO', children: [
                    { id: 'fe', label: 'FE', children: [{ id: 'fe1', label: 'Priya' }, { id: 'fe2', label: 'Arun' }] },
                    { id: 'be', label: 'BE', children: [{ id: 'be1', label: 'Kiran' }] }
                ]
            },
            { id: 'cfo', label: 'CFO', children: [{ id: 'acc', label: 'Acc' }] },
            { id: 'coo', label: 'COO' }
        ]
    }
]);

describe('hierarchy treeUtils', () => {
    it('finds nodes and parents at any depth', () => {
        const t = makeTree();
        expect(findNode(t, 'be1', ID, CH)?.label).toBe('Kiran');
        expect(findParent(t, 'be1', ID, CH)?.id).toBe('be');
        expect(findParent(t, 'ceo', ID, CH)).toBe(null);
    });

    it('computes ancestor ids', () => {
        expect(getAncestorIds(makeTree(), 'fe1', ID, CH)).toEqual(['ceo', 'cto', 'fe']);
    });

    it('collects ids, optionally only parents', () => {
        const all = collectIds(makeTree(), ID, CH);
        expect(all).toContain('coo');
        expect(all.length).toBe(10);
        const parents = collectIds(makeTree(), ID, CH, true);
        expect(parents).toEqual(['ceo', 'cto', 'fe', 'be', 'cfo']);
        expect(parents).not.toContain('coo');
    });

    it('detects descendants (used to block invalid drags)', () => {
        const cto = findNode(makeTree(), 'cto', ID, CH)!;
        expect(isDescendant(cto, 'fe1', ID, CH)).toBe(true);
        expect(isDescendant(cto, 'cfo', ID, CH)).toBe(false);
    });

    it('renames immutably without dropping siblings (the COO case)', () => {
        const t = makeTree();
        const next = updateNode(t, 'coo', ID, CH, (n) => ({ ...n, label: 'Chief Operating Officer' }));
        const ceoKids = findNode(next, 'ceo', ID, CH)![CH];
        expect(ceoKids.map((c: any) => c.id)).toEqual(['cto', 'cfo', 'coo']);
        expect(findNode(next, 'coo', ID, CH)!.label).toBe('Chief Operating Officer');
        expect(findNode(t, 'coo', ID, CH)!.label).toBe('COO');
    });

    it('sets lazy-loaded children', () => {
        const next = setChildren(makeTree(), 'coo', ID, CH, [{ id: 'x', label: 'X' }]);
        expect(findNode(next, 'coo', ID, CH)![CH].map((c: any) => c.id)).toEqual(['x']);
    });

    it('removes a node and returns it', () => {
        const { tree: next, removed } = removeNode(makeTree(), 'be', ID, CH);
        expect(removed?.id).toBe('be');
        expect(findNode(next, 'be', ID, CH)).toBe(null);
        expect(findNode(next, 'be1', ID, CH)).toBe(null);
        expect(findNode(next, 'fe', ID, CH)).not.toBe(null);
    });

    it('inserts a child at an index and at root', () => {
        const child = insertNode(makeTree(), 'cto', { id: 'new', label: 'New' }, 0, ID, CH);
        expect(findNode(child, 'cto', ID, CH)![CH][0].id).toBe('new');
        const root = insertNode(makeTree(), null, { id: 'root2', label: 'R2' }, -1, ID, CH);
        expect(root.map((n) => n.id)).toEqual(['ceo', 'root2']);
    });

    it('reports a child index among its siblings', () => {
        expect(indexOfChild(makeTree(), 'cto', 'be', ID, CH)).toBe(1);
        expect(indexOfChild(makeTree(), null, 'ceo', ID, CH)).toBe(0);
    });

    it('moves a node (remove + reinsert) = reparent, preserving its subtree', () => {
        const t = makeTree();
        const { tree: without, removed } = removeNode(t, 'be', ID, CH);
        const moved = insertNode(without, 'cfo', removed!, 0, ID, CH);
        expect(findNode(moved, 'cfo', ID, CH)![CH].map((c: any) => c.id)).toEqual(['be', 'acc']);
        expect(findNode(moved, 'be1', ID, CH)?.label).toBe('Kiran');
        expect(findNode(moved, 'cto', ID, CH)![CH].map((c: any) => c.id)).toEqual(['fe']);
    });

    it('reorders siblings (before/after) via index math', () => {
        const t = makeTree();
        const { tree: without, removed } = removeNode(t, 'coo', ID, CH);
        const beforeCto = indexOfChild(without, 'ceo', 'cto', ID, CH);
        const next = insertNode(without, 'ceo', removed!, beforeCto, ID, CH);
        expect(findNode(next, 'ceo', ID, CH)![CH].map((c: any) => c.id)).toEqual(['coo', 'cto', 'cfo']);
    });
});
