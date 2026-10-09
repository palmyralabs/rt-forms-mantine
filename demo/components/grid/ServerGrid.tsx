import { ColumnDefinition, PalmyraForm, StoreFactoryContext } from "@palmyralabs/rt-forms";
import { PalmyraStoreFactory, StoreFactory } from "@palmyralabs/palmyra-wire";
import { useRef, useState } from "react";
import { Badge, Button, CloseButton, Group, Paper, SimpleGrid, Stack, Text, TextInput, Title } from "@mantine/core";
import './ServerGrid.css'
import { containsFilter, DataGridDefaultControls, GridX, IDataGridDefaultControlConfig } from "../../../src/palmyra/mantine/grid";
import { SearchFilterField } from "../../../src/main";

const columns: ColumnDefinition[] = [
    {
        attribute: 'displayName',
        label: 'name',
        type: 'string',
        searchable: true,
        sortable: true
    },
    {
        attribute: 'loginName',
        label: 'loginName',
        type: 'string',
        searchable: true,
        sortable: true
    },
    {
        attribute: 'phoneNumber',
        label: 'Phone Number',
        type: 'string',
        searchable: true,
        sortable: true
    },
    {
        attribute: 'dob',
        label: 'Date of Birth',
        type: 'date',
        searchable: true,
        sortable: true
    },
    {
        attribute: 'userType.userType',
        label: 'User Type',
        type: 'string',
        searchable: true,
        sortable: true
    }
]

const storeFactory: StoreFactory<any, any> = new PalmyraStoreFactory({ baseUrl: '/' });

const ServerGrid = () => {
    // const endPoint = 'masterdata/project.json'; //'grid/simpleGridData.json'
    const endPoint = 'api/palmyra/userManagement';

    const [filter, setFilter] = useState<any>({});
    const [selected, setSelected] = useState<any[]>([]);
    const [viewRow, setViewRow] = useState<any>(null);
    const expandRef = useRef<any>(null);

    const ViewField = ({ label, value }: { label: string, value: any }) => (
        <Stack gap={2}>
            <Text size="xs" c="dimmed">{label}</Text>
            <Text size="sm" fw={500}>{value != null && value !== '' ? String(value) : '—'}</Text>
        </Stack>
    );

    const handleFilterChange = (attribute: string, _type?: string) => (e: any) => {
        const v = e?.target?.value ?? e;
        setFilter((prev: any) => ({ ...prev, [attribute]: v }));
    };

    const gridFilter = Object.fromEntries(
        Object.entries(filter)
            .filter(([, v]) => v)
            .map(([k, v]) => [k, containsFilter(v as string)])
    );

    const getOptions = (): IDataGridDefaultControlConfig => {
        return { export: { disabled: false } }
    }

    return <>
        <StoreFactoryContext.Provider value={storeFactory}>
            {viewRow && (
                <Paper withBorder radius="md" p="md" mb="md" bg="var(--mantine-color-indigo-light)">
                    <Group justify="space-between" mb="sm">
                        <Title order={5}>User details — {viewRow.displayName}</Title>
                        <CloseButton onClick={() => setViewRow(null)} aria-label="Close view" />
                    </Group>
                    <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
                        <ViewField label="Name" value={viewRow.displayName} />
                        <ViewField label="Login name" value={viewRow.loginName} />
                        <ViewField label="Email" value={viewRow.email} />
                        <ViewField label="Phone number" value={viewRow.phoneNumber} />
                        <ViewField label="Date of birth" value={viewRow.dob} />
                        <ViewField label="User type" value={viewRow.userType?.userType} />
                    </SimpleGrid>
                </Paper>
            )}
            <Group justify="space-between" mb="md">
                <PalmyraForm>
                    <SearchFilterField attribute="displayName" placeholder="Search name"
                        filter={filter} setFilter={setFilter} handleFilterChange={handleFilterChange} />
                </PalmyraForm>
                <Group gap="xs">
                    <Button size="xs" variant="default" onClick={() => expandRef.current?.expandAll()}>Expand all</Button>
                    <Button size="xs" variant="default" onClick={() => expandRef.current?.collapseAll()}>Collapse all</Button>
                    <Badge size="lg" variant="light" color={selected.length ? 'indigo' : 'gray'}>
                        {selected.length} selected
                    </Badge>
                </Group>
            </Group>
            <GridX columns={columns} endPoint={endPoint} lsKey="uniqueKey"
                filter={gridFilter}
                selectable="multi" idProperty="id"
                defaultSelectBy={{ attribute: 'loginName', values: ['satish', 'adarsh'] }}
                onSelectionChange={(rows) => setSelected(rows)}
                onRowClick={(row: any) => setViewRow(row)}
                expandable accordion expandRef={expandRef}
                renderDetail={(row) => (
                    <Group gap="xl">
                        <Text size="sm"><b>Email:</b> {row.email || '—'}</Text>
                        <Text size="sm"><b>Login:</b> {row.loginName}</Text>
                        <Text size="sm"><b>User Type:</b> {row.userType?.userType || '—'}</Text>
                    </Group>
                )}
                editable={false}
                editors={{
                    displayName: {
                        type: 'custom',
                        render: ({ value, commit, cancel }) => (
                            <TextInput size="xs" variant="unstyled" autoFocus
                                defaultValue={value ?? ''} leftSection={<span>✎</span>}
                                onBlur={(e) => commit(e.currentTarget.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') commit((e.target as HTMLInputElement).value);
                                    else if (e.key === 'Escape') cancel();
                                }} />
                        )
                    },
                    phoneNumber: { type: 'number' },
                    dob: { type: 'date' },
                    'userType.userType': { type: 'lookup', endPoint: 'api/palmyra/masterdata/userType', idAttribute: 'id', labelAttribute: 'userType' },
                    loginName: { type: 'select', options: { 'admin@gmail.com': 'Admin', 'satish': 'Satish', 'adarsh': 'Adarsh' } }
                }}
                onCellEdit={(p) => console.log('cell edit', p)}
                onCellSave={(p) => new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (String(p.value).toLowerCase() === 'fail') reject(new Error('Simulated failure'));
                        else resolve(p);
                    }, 800);
                })}
                onSaveSuccess={(p) => console.log('saved', p.attribute, '=', p.value)}
                onSaveError={(p) => console.log('save error', p.error.message)}
                quickSearch="code" pagination={{ ignoreSinglePage: false }}
                getPluginOptions={getOptions}
                DataGridControls={DataGridDefaultControls}
                pageSize={[20, 30, 1000]} />
        </StoreFactoryContext.Provider>
    </>
}

export { ServerGrid }