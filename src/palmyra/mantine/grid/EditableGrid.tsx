import { Badge, Group, Popover, ScrollArea, Table, Text, UnstyledButton, Button, ActionIcon, Tooltip } from '@mantine/core';
import { IPageQueryable } from '@palmyralabs/rt-forms';
import { ReactNode, RefObject, useImperativeHandle, useRef, useState } from 'react';
import { FiAlertCircle, FiCornerUpLeft, FiCornerUpRight, FiRotateCcw, FiSave } from 'react-icons/fi';
import { GridX, GridXProps } from './GridX';
import { IGridEditRef, IInlineEditsInfo, IInlineValidationError } from './base/useGridInlineEdit';
import './EditableGrid.css';

type EditRow = { id: string; changes: Record<string, any> };
type EditedCell = { id: string; attribute: string; value: any; oldValue: any; row: any };
type EditedRowGroup = { id: string; row: any; cells: EditedCell[] };

interface IEditableGridRef {
    save: () => Promise<any>;
    discard: () => void;
    undo: () => void;
    redo: () => void;
    canUndo: () => boolean;
    canRedo: () => boolean;
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
    showUndoRedo?: boolean;
    renderDirtyItem?: (cell: EditedCell) => ReactNode;
    getRowLabel?: (row: any, id: string) => ReactNode;
    onBatchSave?: (rows: EditRow[]) => Promise<any>;
    onDirtyChange?: (rows: EditRow[], cells: EditedCell[]) => void;
    onValidityChange?: (errors: IInlineValidationError[]) => void;
    onHistoryChange?: (h: { canUndo: boolean; canRedo: boolean }) => void;
    editRef?: RefObject<IGridEditRef>;
    editGridRef?: RefObject<IEditableGridRef>;
}

const EMPTY_INFO: IInlineEditsInfo = { edits: {}, rows: [], cells: [], canUndo: false, canRedo: false };

const fmtVal = (v: any): string =>
    v == null || v === '' ? '—' : typeof v === 'object' ? JSON.stringify(v) : String(v);

function EditableGrid(props: EditableGridProps) {
    const {
        mode = 'batch', showEditToolbar, editToolbarPosition = 'top',
        saveAllLabel = 'Save changes', discardLabel = 'Discard',
        dirtyLabel, dirtyList, showUndoRedo = true, renderDirtyItem, getRowLabel,
        onBatchSave, onDirtyChange, onValidityChange, onHistoryChange, editRef: editRefProp, editGridRef,
        onCellSave, autoSave,
        ref, ...rest
    } = props as any;

    const internalEditRef = useRef<IGridEditRef>(null);
    const editRef: RefObject<IGridEditRef> = editRefProp ?? internalEditRef;
    const internalQueryRef = useRef<IPageQueryable>(null);
    const queryRef: RefObject<IPageQueryable> = ref ?? internalQueryRef;

    const [info, setInfo] = useState<IInlineEditsInfo>(EMPTY_INFO);
    const [errors, setErrors] = useState<IInlineValidationError[]>([]);
    const [saving, setSaving] = useState(false);

    const handleEditsChange = (next: IInlineEditsInfo) => {
        setInfo(next);
        if (onDirtyChange) onDirtyChange(next.rows, next.cells);
        if (onHistoryChange) onHistoryChange({ canUndo: next.canUndo, canRedo: next.canRedo });
    };

    const handleValidityChange = (errs: IInlineValidationError[]) => {
        setErrors(errs);
        if (onValidityChange) onValidityChange(errs);
    };

    const dirtyRows = info.rows;
    const cells = info.cells;
    const dirtyCells = dirtyRows.reduce((n, r) => n + Object.keys(r.changes).length, 0);
    const groups: EditedRowGroup[] = Object.values(cells.reduce((acc: Record<string, EditedRowGroup>, c) => {
        (acc[c.id] = acc[c.id] || { id: c.id, row: c.row, cells: [] }).cells.push(c);
        return acc;
    }, {}));

    const discardAll = () => { editRef.current?.clear(); setErrors([]); };
    const doUndo = () => editRef.current?.undo?.();
    const doRedo = () => editRef.current?.redo?.();

    const saveAll = (): Promise<any> => {
        if (!dirtyRows.length) return Promise.resolve();
        if (errors.length) return Promise.reject(new Error('Fix validation errors before saving'));
        if (!onBatchSave) { discardAll(); return Promise.resolve(); }
        setSaving(true);
        return Promise.resolve()
            .then(() => onBatchSave(dirtyRows))
            .then((res) => {
                editRef.current?.clear();
                queryRef.current?.refresh?.();
                return res;
            })
            .finally(() => setSaving(false));
    };

    useImperativeHandle(editGridRef, () => ({
        save: saveAll,
        discard: discardAll,
        undo: doUndo,
        redo: doRedo,
        canUndo: () => info.canUndo,
        canRedo: () => info.canRedo,
        getEditedRows: () => dirtyRows,
        getEditedCells: () => cells,
        getEditedGroups: () => groups,
        isDirty: () => dirtyRows.length > 0,
        isValid: () => errors.length === 0,
        getErrors: () => errors,
        dirtyCount: () => dirtyCells,
        refresh: () => queryRef.current?.refresh?.()
    }), [info, saving, errors]);

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
            {showUndoRedo && (
                <Group gap={2}>
                    <Tooltip label="Undo" withArrow>
                        <ActionIcon variant="default" size="sm" aria-label="Undo"
                            disabled={!info.canUndo || saving} onClick={doUndo}><FiCornerUpLeft size={14} /></ActionIcon>
                    </Tooltip>
                    <Tooltip label="Redo" withArrow>
                        <ActionIcon variant="default" size="sm" aria-label="Redo"
                            disabled={!info.canRedo || saving} onClick={doRedo}><FiCornerUpRight size={14} /></ActionIcon>
                    </Tooltip>
                </Group>
            )}
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
                onEditsChange={handleEditsChange} onValidityChange={handleValidityChange} {...saveProps} />
            {toolbar && editToolbarPosition === 'bottom' && toolbar}
        </div>
    );
}

export { EditableGrid };
export type { EditableGridProps, EditRow, EditedCell, EditedRowGroup, IEditableGridRef };
