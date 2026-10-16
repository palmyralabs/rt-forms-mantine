import { Badge, Group, Popover, ScrollArea, Table, Text, UnstyledButton, Button } from '@mantine/core';
import { IPageQueryable } from '@palmyralabs/rt-forms';
import { ReactNode, RefObject, useImperativeHandle, useRef, useState } from 'react';
import { FiRotateCcw, FiSave } from 'react-icons/fi';
import { FiAlertCircle } from 'react-icons/fi';
import { GridX, GridXProps } from './GridX';
import { ICellEditParams, ICellSaveParams, IGridEditRef, IInlineValidationError } from './base/useGridInlineEdit';
import './EditableGrid.css';

type EditRow = { id: string; changes: Record<string, any> };
type EditedCell = { id: string; attribute: string; value: any; oldValue: any; row: any };
type EditedRowGroup = { id: string; row: any; cells: EditedCell[] };

interface IEditableGridRef {
    save: () => Promise<any>;
    discard: () => void;
    getEditedRows: () => EditRow[];
    getEditedCells: () => EditedCell[];
    getEditedGroups: () => EditedRowGroup[];
    isDirty: () => boolean;
    isValid: () => boolean;
    getErrors: () => IInlineValidationError[];
    dirtyCount: () => number;
    refresh: () => void;
}

interface EditableGridProps extends Omit<GridXProps<any>, 'editable'> {
    mode?: 'cell' | 'batch';
    showEditToolbar?: boolean;
    editToolbarPosition?: 'top' | 'bottom';
    saveAllLabel?: string;
    discardLabel?: string;
    dirtyLabel?: (count: number) => ReactNode;
    dirtyList?: boolean;
    renderDirtyItem?: (cell: EditedCell) => ReactNode;
    getRowLabel?: (row: any, id: string) => ReactNode;
    onBatchSave?: (rows: EditRow[]) => Promise<any>;
    onDirtyChange?: (rows: EditRow[], cells: EditedCell[]) => void;
    onValidityChange?: (errors: IInlineValidationError[]) => void;
    editRef?: RefObject<IGridEditRef>;
    editGridRef?: RefObject<IEditableGridRef>;
}

const toRows = (d: Record<string, Record<string, any>>): EditRow[] =>
    Object.entries(d)
        .filter(([, c]) => Object.keys(c).length > 0)
        .map(([id, changes]) => ({ id, changes }));

const fmtVal = (v: any): string =>
    v == null || v === '' ? '—' : typeof v === 'object' ? JSON.stringify(v) : String(v);

function EditableGrid(props: EditableGridProps) {
    const {
        mode = 'batch', showEditToolbar, editToolbarPosition = 'top',
        saveAllLabel = 'Save changes', discardLabel = 'Discard',
        dirtyLabel, dirtyList, renderDirtyItem, getRowLabel,
        onBatchSave, onDirtyChange, onValidityChange, editRef: editRefProp, editGridRef,
        onCellEdit, onCellSave, autoSave, onSaveSuccess,
        ref, ...rest
    } = props as any;

    const internalEditRef = useRef<IGridEditRef>(null);
    const editRef: RefObject<IGridEditRef> = editRefProp ?? internalEditRef;
    const internalQueryRef = useRef<IPageQueryable>(null);
    const queryRef: RefObject<IPageQueryable> = ref ?? internalQueryRef;

    const firstOldRef = useRef<Record<string, any>>({});
    const rowRef = useRef<Record<string, any>>({});

    const [dirty, setDirty] = useState<Record<string, Record<string, any>>>({});
    const [errors, setErrors] = useState<IInlineValidationError[]>([]);
    const [saving, setSaving] = useState(false);

    const handleValidityChange = (errs: IInlineValidationError[]) => {
        setErrors(errs);
        if (onValidityChange) onValidityChange(errs);
    };

    const buildCells = (d: Record<string, Record<string, any>>): EditedCell[] =>
        toRows(d).flatMap((r) => Object.keys(r.changes).map((attribute) => ({
            id: r.id,
            attribute,
            value: r.changes[attribute],
            oldValue: firstOldRef.current[r.id + '::' + attribute],
            row: rowRef.current[r.id]
        })));

    const buildGroups = (d: Record<string, Record<string, any>>): EditedRowGroup[] =>
        toRows(d).map((r) => ({
            id: r.id,
            row: rowRef.current[r.id],
            cells: Object.keys(r.changes).map((attribute) => ({
                id: r.id,
                attribute,
                value: r.changes[attribute],
                oldValue: firstOldRef.current[r.id + '::' + attribute],
                row: rowRef.current[r.id]
            }))
        }));

    const clearMeta = () => { firstOldRef.current = {}; rowRef.current = {}; };

    const emitDirty = (next: Record<string, Record<string, any>>) => {
        setDirty(next);
        if (onDirtyChange) onDirtyChange(toRows(next), buildCells(next));
    };

    const handleCellEdit = (p: ICellEditParams) => {
        const id = String(p.id);
        const key = id + '::' + p.attribute;
        if (!(key in firstOldRef.current)) firstOldRef.current[key] = p.oldValue;
        rowRef.current[id] = p.row;
        emitDirty({ ...dirty, [id]: { ...dirty[id], [p.attribute]: p.value } });
        if (onCellEdit) onCellEdit(p);
    };

    const handleSaveSuccess = (p: ICellSaveParams & { response: any }) => {
        if (mode === 'cell') {
            const id = String(p.id);
            const row = { ...(dirty[id] || {}) };
            delete row[p.attribute];
            delete firstOldRef.current[id + '::' + p.attribute];
            emitDirty({ ...dirty, [id]: row });
        }
        if (onSaveSuccess) onSaveSuccess(p);
    };

    const discardAll = () => {
        editRef.current?.clear();
        clearMeta();
        setErrors([]);
        emitDirty({});
    };

    const saveAll = (): Promise<any> => {
        const rows = toRows(dirty);
        if (!rows.length) return Promise.resolve();
        if (errors.length) return Promise.reject(new Error('Fix validation errors before saving'));
        if (!onBatchSave) { discardAll(); return Promise.resolve(); }
        setSaving(true);
        return Promise.resolve()
            .then(() => onBatchSave(rows))
            .then((res) => {
                editRef.current?.clear();
                clearMeta();
                emitDirty({});
                queryRef.current?.refresh?.();
                return res;
            })
            .finally(() => setSaving(false));
    };

    const dirtyRows = toRows(dirty);
    const dirtyCells = dirtyRows.reduce((n, r) => n + Object.keys(r.changes).length, 0);
    const cells = buildCells(dirty);
    const groups = buildGroups(dirty);

    useImperativeHandle(editGridRef, () => ({
        save: saveAll,
        discard: discardAll,
        getEditedRows: () => dirtyRows,
        getEditedCells: () => cells,
        getEditedGroups: () => groups,
        isDirty: () => dirtyRows.length > 0,
        isValid: () => errors.length === 0,
        getErrors: () => errors,
        dirtyCount: () => dirtyCells,
        refresh: () => queryRef.current?.refresh?.()
    }), [dirty, saving, errors]);

    const saveProps = mode === 'cell' ? { onCellSave, autoSave } : {};
    const toolbarVisible = showEditToolbar ?? (mode === 'batch');

    const countNode = dirtyLabel ? dirtyLabel(dirtyCells)
        : dirtyCells ? `${dirtyCells} unsaved ${dirtyCells === 1 ? 'change' : 'changes'}` : 'No changes';

    const clickableCount = dirtyList !== false && dirtyCells > 0;
    const badge = (
        <Badge variant={dirtyCells ? 'light' : 'outline'} color={dirtyCells ? 'orange' : 'gray'} size="lg"
            className={clickableCount ? 'py-editgrid-count' : undefined}>
            {countNode}
        </Badge>
    );

    const dirtyPanel = (
        <ScrollArea.Autosize mah={320}>
            <Table withTableBorder withColumnBorders stickyHeader verticalSpacing={4} horizontalSpacing={8}
                className="py-editgrid-dirty-table">
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Row</Table.Th>
                        <Table.Th>Field</Table.Th>
                        <Table.Th>Old</Table.Th>
                        <Table.Th>New</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {groups.flatMap((g) => g.cells.map((c, idx) => (
                        <Table.Tr key={g.id + '::' + c.attribute}>
                            {idx === 0 && (
                                <Table.Td rowSpan={g.cells.length} className="py-editgrid-dirty-rowcell">
                                    <Text size="xs" fw={600}>{getRowLabel ? getRowLabel(g.row, g.id) : '#' + g.id}</Text>
                                </Table.Td>
                            )}
                            {renderDirtyItem
                                ? <Table.Td colSpan={3}>{renderDirtyItem(c)}</Table.Td>
                                : (<>
                                    <Table.Td><Text size="xs" fw={500}>{c.attribute}</Text></Table.Td>
                                    <Table.Td><Text size="xs" c="dimmed" td="line-through">{fmtVal(c.oldValue)}</Text></Table.Td>
                                    <Table.Td><Text size="xs" fw={600}>{fmtVal(c.value)}</Text></Table.Td>
                                </>)}
                        </Table.Tr>
                    )))}
                </Table.Tbody>
            </Table>
        </ScrollArea.Autosize>
    );

    const countBadge = clickableCount ? (
        <Popover width={360} position="bottom-end" withArrow shadow="md" withinPortal>
            <Popover.Target>
                <UnstyledButton aria-label="Show edited cells">{badge}</UnstyledButton>
            </Popover.Target>
            <Popover.Dropdown p={6}>{dirtyPanel}</Popover.Dropdown>
        </Popover>
    ) : badge;

    const toolbar = toolbarVisible ? (
        <Group justify="flex-end" gap="xs" className="py-editgrid-toolbar">
            {errors.length > 0 && (
                <Badge color="red" variant="light" size="lg" leftSection={<FiAlertCircle size={13} />}>
                    {errors.length} invalid
                </Badge>
            )}
            {countBadge}
            <Button size="xs" variant="default" leftSection={<FiRotateCcw size={14} />}
                disabled={!dirtyCells || saving} onClick={discardAll}>{discardLabel}</Button>
            <Button size="xs" leftSection={<FiSave size={14} />} loading={saving}
                disabled={!dirtyCells || errors.length > 0} onClick={() => { saveAll().catch(() => { }); }}>{saveAllLabel}</Button>
        </Group>
    ) : null;

    return (
        <div className="py-editgrid">
            {toolbar && editToolbarPosition === 'top' && toolbar}
            <GridX {...rest} ref={queryRef} editable editRef={editRef}
                onCellEdit={handleCellEdit} onSaveSuccess={handleSaveSuccess}
                onValidityChange={handleValidityChange} {...saveProps} />
            {toolbar && editToolbarPosition === 'bottom' && toolbar}
        </div>
    );
}

export { EditableGrid };
export type { EditableGridProps, EditRow, EditedCell, EditedRowGroup, IEditableGridRef };
