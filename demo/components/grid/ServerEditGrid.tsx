import { ColumnDefinition, StoreFactoryContext } from "@palmyralabs/rt-forms";
import { PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";
import { useMemo, useRef, useState } from "react";
import { ActionIcon, Badge, Button, CloseButton, Group, Paper, ScrollArea, SegmentedControl, Switch, Table, Text, TextInput, Tooltip, UnstyledButton } from "@mantine/core";
import { FiCornerUpLeft, FiCornerUpRight, FiEdit2, FiRotateCcw, FiSave } from "react-icons/fi";
import { EditedCell, ICellEditorConfig, IEditableGridRef, PalmyraEditGrid, setByPath } from "../../../src/palmyra/mantine/grid";
import { LookupConfig } from "../LookupConfig";

const fmt = (v: any) => v == null || v === '' ? '—' : typeof v === 'object' ? JSON.stringify(v) : String(v);

const columns: ColumnDefinition[] = [
    { attribute: 'displayName', label: 'Name', type: 'string', searchable: true, sortable: true },
    { attribute: 'loginName', label: 'Login', type: 'string', sortable: true },
    { attribute: 'phoneNumber', label: 'Phone Number', type: 'string' },
    { attribute: 'dob', label: 'Date of Birth', type: 'date' },
    { attribute: 'userType.userType', label: 'User Type', type: 'string' }
];

const GRID_ENDPOINTS = ['api/palmyra/userManagement', 'api/palmyra/masterdata/project', 'api/palmyra/masterdata/department'];

const editors: Record<string, ICellEditorConfig> = {
    displayName: {
        type: 'custom' as const,
        validation: { required: true, length: { min: 3 }, missingMessage: 'Name is required', invalidMessage: 'Min 3 characters' },
        render: ({ value, commit, cancel }: any) => (
            <TextInput size="xs" variant="unstyled" autoFocus
                defaultValue={value ?? ''} leftSection={<span>✎</span>}
                onBlur={(e) => commit(e.currentTarget.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') commit((e.target as HTMLInputElement).value);
                    else if (e.key === 'Escape') cancel();
                }} />
        )
    },
    phoneNumber: {
        type: 'number' as const,
        validation: { required: true, regExp: { regex: /^\d{10}$/, errorMessage: 'Enter a 10-digit number' } }
    },
    dob: { type: 'date' as const },
    'userType.userType': {
        type: 'lookup' as const, endPoint: 'api/palmyra/masterdata/userType',
        idAttribute: 'id', labelAttribute: 'userType'
    },
    loginName: {
        type: 'select' as const,
        options: { 'admin@gmail.com': 'Admin', 'satish': 'Satish', 'adarsh': 'Adarsh' }
    }
};

const ServerEditGrid = () => {
    const [baseUrl, setBaseUrl] = useState('/');
    const [endPoint, setEndPoint] = useState('api/palmyra/userManagement');
    const storeFactory = useMemo(() => new PalmyraStoreFactory({ baseUrl }), [baseUrl]);
    const endPointObj = useMemo(() => ({ query: endPoint, get: endPoint, post: endPoint, put: endPoint + '/{id}', delete: endPoint + '/{id}' }), [endPoint]);
    const formStore: any = useMemo(() => (storeFactory as any).getFormStore({}, endPointObj, 'id'), [storeFactory, endPointObj]);

    const putRow = (id: any, changes: Record<string, any>) => {
        const payload: any = { id };
        Object.keys(changes).forEach((k) => setByPath(payload, k, changes[k]));
        console.log('PUT', id, payload);
        return formStore.put(payload, { endPointVars: { id } });
    };

    const [mode, setMode] = useState<'batch' | 'cell'>('batch');
    const [dirtyCount, setDirtyCount] = useState(0);
    const [cells, setCells] = useState<EditedCell[]>([]);
    const [showList, setShowList] = useState(false);
    const [saving, setSaving] = useState(false);
    const [invalidCount, setInvalidCount] = useState(0);
    const [lockAdmin, setLockAdmin] = useState(true);
    const [rowEdit, setRowEdit] = useState(false);
    const [canUndo, setCanUndo] = useState(false);
    const [canRedo, setCanRedo] = useState(false);
    const editGridRef: any = useRef<IEditableGridRef>(null);

    const isCellEditable = (row: any, _attribute: string): boolean => {
        // if (lockAdmin && String(row.loginName || '').toLowerCase().includes('admin')) return false;

        if (
            (row.phoneNumber == null || row.phoneNumber === "")) {
            return true;
        }
        return false;
    };

    const myDiscard = () => editGridRef.current?.discard();
    const mySave = () => {
        setSaving(true);
        Promise.resolve(editGridRef.current?.save())
            .then(() => console.log('saved via custom button'))
            .catch((e) => console.log('save failed', e?.message))
            .finally(() => setSaving(false));
    };

    const groups = Object.values(cells.reduce((acc: Record<string, { id: string, row: any, cells: EditedCell[] }>, c) => {
        (acc[c.id] ||= { id: c.id, row: c.row, cells: [] }).cells.push(c);
        return acc;
    }, {}));

    return (
        <StoreFactoryContext.Provider value={storeFactory}>
            <LookupConfig baseUrl={baseUrl} endPoint={endPoint} endPoints={GRID_ENDPOINTS}
                onBaseUrl={setBaseUrl} onEndPoint={setEndPoint} />
            <Group justify="space-between" mb="sm">
                <Group gap="xs">
                    <Text size="sm">Save mode</Text>
                    <SegmentedControl size="xs" value={mode} onChange={(v) => setMode(v as any)}
                        data={[{ label: 'Batch (Save all)', value: 'batch' }, { label: 'Cell (auto-save)', value: 'cell' }]} />
                    <Switch size="sm" label="Lock admin rows" checked={lockAdmin}
                        onChange={(e) => setLockAdmin(e.currentTarget.checked)} />
                    <Switch size="sm" label="Full-row edit" checked={rowEdit}
                        onChange={(e) => setRowEdit(e.currentTarget.checked)} />
                </Group>
                <Group gap="xs">
                    <Tooltip label="Undo" withArrow>
                        <ActionIcon variant="default" size="sm" aria-label="Undo"
                            disabled={!canUndo} onClick={() => editGridRef.current?.undo()}><FiCornerUpLeft size={14} /></ActionIcon>
                    </Tooltip>
                    <Tooltip label="Redo" withArrow>
                        <ActionIcon variant="default" size="sm" aria-label="Redo"
                            disabled={!canRedo} onClick={() => editGridRef.current?.redo()}><FiCornerUpRight size={14} /></ActionIcon>
                    </Tooltip>
                    {invalidCount > 0 && (
                        <Badge size="lg" color="red" variant="light">{invalidCount} invalid</Badge>
                    )}
                    <UnstyledButton onClick={() => setShowList((s) => !s)} disabled={!dirtyCount}>
                        <Badge size="lg" variant="light" color={dirtyCount ? 'orange' : 'gray'}>
                            {dirtyCount} dirty cell{dirtyCount === 1 ? '' : 's'} ▾
                            {groups.length} dirty row{groups.length === 1 ? '' : 's'} ▾
                        </Badge>
                    </UnstyledButton>
                    <Button size="xs" variant="default" leftSection={<FiRotateCcw size={14} />}
                        disabled={!dirtyCount || saving} onClick={myDiscard}>My Discard</Button>
                    <Button size="xs" color="teal" leftSection={<FiSave size={14} />}
                        loading={saving} disabled={!dirtyCount || invalidCount > 0} onClick={mySave}>My Save</Button>
                </Group>
            </Group>

            {showList && groups.length > 0 && (
                <Paper withBorder radius="md" p="xs" mb="sm">
                    <Group justify="space-between" mb={6}>
                        <Text size="sm" fw={600}>Edited rows ({groups.length}) · {cells.length} cells</Text>
                        <CloseButton size="sm" onClick={() => setShowList(false)} aria-label="Close list" />
                    </Group>
                    <ScrollArea.Autosize mah={300}>
                        <Table withTableBorder withColumnBorders stickyHeader verticalSpacing={4} horizontalSpacing={8}>
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
                                            <Table.Td rowSpan={g.cells.length}>
                                                <Text size="xs" fw={600}>{g.row?.displayName || '#' + g.id}</Text>
                                                <Text size="xs" c="dimmed">#{g.id} · {g.cells.length} change{g.cells.length === 1 ? '' : 's'}</Text>
                                            </Table.Td>
                                        )}
                                        <Table.Td><Text size="xs" fw={500}>{c.attribute}</Text></Table.Td>
                                        <Table.Td><Text size="xs" c="dimmed" td="line-through">{fmt(c.oldValue)}</Text></Table.Td>
                                        <Table.Td><Text size="xs" fw={600}>{fmt(c.value)}</Text></Table.Td>
                                    </Table.Tr>
                                )))}
                            </Table.Tbody>
                        </Table>
                    </ScrollArea.Autosize>
                </Paper>
            )}

            <PalmyraEditGrid
                key={baseUrl + ':' + endPoint + ':' + mode + ':' + rowEdit}
                columns={columns}
                endPoint={endPointObj}
                lsKey="editGridKey"
                mode={mode} showEditToolbar={false}
                editGridRef={editGridRef}
                rowEdit={rowEdit}
                renderRowActions={({ editing, saving, edit, save, cancel }) => editing
                    ? (
                        <Group gap={4} wrap="nowrap">
                            <Button size="compact-xs" color="teal" loading={saving} onClick={save}>Save</Button>
                            <Button size="compact-xs" variant="default" onClick={cancel}>Cancel</Button>
                        </Group>
                    ) : (
                        <Button size="compact-xs" variant="light" leftSection={<FiEdit2 size={12} />} onClick={edit}>Edit</Button>
                    )}
                onRowSave={(_row, changes, id) => putRow(id, changes)}
                onRowSaveSuccess={(_row, changes) => console.log('row saved', changes)}
                editors={editors} showUndoRedo={false}
                editableColumns={['displayName', 'phoneNumber', 'dob', 'userType.userType']}
                // isCellEditable={isCellEditable}
                onDirtyChange={(rows, editedCells) => {
                    setDirtyCount(rows.reduce((n, r) => n + Object.keys(r.changes).length, 0));
                    setCells(editedCells);
                }}
                onValidityChange={(errs) => setInvalidCount(errs.length)}
                onHistoryChange={(h) => { setCanUndo(h.canUndo); setCanRedo(h.canRedo); }}
                onBatchSave={(rows) => {
                    console.log('batch save', rows);
                    return Promise.all(rows.map((r) => putRow(r.id, r.changes)));
                }}
                onCellSave={(p) => putRow(p.id, p.changes).then(() => p)}
                onSaveSuccess={(p) => console.log('saved', p.attribute, '=', p.value)}
                onSaveError={(p) => console.log('save error', p.error?.message)}
                quickSearch="code"
                pagination={{ ignoreSinglePage: false }}
                paginationPosition="top"
                paginationOptions={{ pageSizePosition: 'right', responsive: true, showGoTo: true }}
                pageSize={[20, 30, 50]} />
        </StoreFactoryContext.Provider>
    );
};

export { ServerEditGrid };
