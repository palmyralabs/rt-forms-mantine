import { ColumnDefinition, DataGridPluginOptions, PalmyraForm, StoreFactoryContext } from "@palmyralabs/rt-forms";
import { PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";
import { RefObject, useImperativeHandle, useMemo, useRef, useState } from "react";
import { LookupConfig } from "../LookupConfig";
import { ActionIcon, Badge, Button, CloseButton, Group, Loader, Paper, SegmentedControl, SimpleGrid, Stack, Switch, Text, Title } from "@mantine/core";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const GridLoader = () => (
    <Paper withBorder radius="xl" px="lg" py="sm" shadow="md">
        <Group gap="sm" wrap="nowrap">
            <Loader size="sm" type="dots" color="grape" />
            <Text size="sm" fw={600} c="grape">Fetching data, please wait…</Text>
        </Group>
    </Paper>
);
import './ServerGrid.css'
import { containsFilter, DataGridDefaultControls, GridX, IDataGridDefaultControlConfig } from "../../../src/palmyra/mantine/grid";
import { SearchFilterField } from "../../../src/main";

function MyPagination(o: DataGridPluginOptions & { ref?: RefObject<{ refresh: () => void }> }) {
    const q: any = o.queryRef?.current;
    const [, force] = useState(0);
    useImperativeHandle(o.ref, () => ({ refresh: () => force((n) => n + 1) }), [o.ref]);

    if (!q) return null;
    const total = q.getTotalRecords?.() || 0;
    const size = q.getQueryLimit?.()?.limit || 20;
    const page = q.getPageNo?.() || 0;
    const pages = Math.ceil(total / size) || 1;

    if ((o as any).ignoreSinglePage && pages <= 1) return null;

    return (
        <Group justify="flex-end" gap="xs" mt="sm">
            <Text size="xs" c="dimmed">{total ? page * size + 1 : 0}–{Math.min((page + 1) * size, total)} of {total}</Text>
            <ActionIcon variant="default" size="sm" disabled={page <= 0} onClick={() => q.gotoPage(page - 1)} aria-label="Previous page">
                <FiChevronLeft size={14} />
            </ActionIcon>
            <Badge variant="light" size="lg">Page {page + 1} / {pages}</Badge>
            <ActionIcon variant="default" size="sm" disabled={page + 1 >= pages} onClick={() => q.gotoPage(page + 1)} aria-label="Next page">
                <FiChevronRight size={14} />
            </ActionIcon>
        </Group>
    );
}

const columns: (ColumnDefinition & { pin?: 'left' | 'right' })[] = [
    {
        attribute: 'displayName', label: 'name', type: 'string', searchable: true, sortable: true,
        width: '220px'
    },
    { attribute: 'loginName', label: 'loginName', type: 'string', searchable: true,
         sortable: true, width: '220px' },
    { attribute: 'phoneNumber', label: 'Phone Number', type: 'string', searchable: true, sortable: true, width: '200px' },
    { attribute: 'email', label: 'Email', type: 'string', width: '240px' },
    { attribute: 'dob', label: 'Date of Birth', type: 'date', searchable: true, sortable: true, width: '200px' },
    {
        attribute: 'userType.userType', label: 'User Type', type: 'string', searchable: true,
        sortable: true, width: '200px'
    }
]

const GRID_ENDPOINTS = ['api/palmyra/userManagement', 'api/palmyra/masterdata/project',
    'api/palmyra/masterdata/department', 'api/dev/jobs/35d0754a-f4b1-48be-b08a-801c724c666b'];

const ServerGrid = () => {
    const [baseUrl, setBaseUrl] = useState('/');
    const [endPoint, setEndPoint] = useState('api/palmyra/userManagement');
    const storeFactory = useMemo(() => new PalmyraStoreFactory({ baseUrl }), [baseUrl]);

    const [filter, setFilter] = useState<any>({});
    const [selected, setSelected] = useState<any[]>([]);
    const [viewRow, setViewRow] = useState<any>(null);
    const [groupBy, setGroupBy] = useState<string>('');
    const [pinRows, setPinRows] = useState(false);
    const [topIds, setTopIds] = useState<string[]>([]);
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
            <LookupConfig baseUrl={baseUrl} endPoint={endPoint} endPoints={GRID_ENDPOINTS}
                onBaseUrl={setBaseUrl} onEndPoint={setEndPoint} />
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
                    <Switch size="sm" label="Pin rows" checked={pinRows} onChange={(e) => setPinRows(e.currentTarget.checked)} />
                    <Text size="xs" c="dimmed">Group by</Text>
                    <SegmentedControl size="xs" value={groupBy} onChange={(v) => setGroupBy(v)}
                        data={[{ label: 'None', value: '' }, { label: 'User Type', value: 'userType.userType' }, { label: 'Login', value: 'loginName' }]} />
                    <Button size="xs" variant="default" onClick={() => expandRef.current?.expandAll()}>Expand all</Button>
                    <Button size="xs" variant="default" onClick={() => expandRef.current?.collapseAll()}>Collapse all</Button>
                    <Badge size="lg" variant="light" color={selected.length ? 'indigo' : 'gray'}>
                        {selected.length} selected
                    </Badge>
                </Group>
            </Group>
            <GridX key={baseUrl + '|' + endPoint} columns={columns} endPoint={endPoint} lsKey="uniqueKey"
                filter={gridFilter}
                selectable="multi" idProperty="id"
                defaultSelectBy={{ attribute: 'loginName', values: ['satish', 'adarsh'] }}
                isRowSelectable={(row: any) => selected.includes(row.id)}
                onSelectionChange={(rows) => setSelected(rows)}
                onRowClick={(row: any) => setViewRow(row)}
                expandable={!groupBy} accordion expandRef={expandRef}
                renderDetail={(row) => (
                    <Group gap="xl">
                        <Text size="sm"><b>Email:</b> {row.email || '—'}</Text>
                        <Text size="sm"><b>Login:</b> {row.loginName}</Text>
                        <Text size="sm"><b>User Type:</b> {row.userType?.userType || '—'}</Text>
                    </Group>
                )}
                groupBy={groupBy || undefined} groupCollapsible={false}
                rowPinning={pinRows ? { bottom: topIds } : undefined}
                onDataChange={(d: any[]) => { const ids = (d || []).slice(0, 2).map((r: any) => String(r.id)); setTopIds((prev) => prev.join() === ids.join() ? prev : ids); }}
                // aggregations={{ phoneNumber: 'min' }} summaryLabel="Total"
                quickSearch="code" pagination={{ ignoreSinglePage: false }}
                getPluginOptions={getOptions}
                DataGridControls={DataGridDefaultControls}
                // DataGridPagination={MyPagination}
                paginationPosition="top"
                paginationOptions={{ pageSizePosition: 'right', keyboardNavigation: true, responsive: true, showGoTo: true, disableOnLoading: true }}
                loadingOverlay
                loader={<GridLoader />}
                pageSize={[20, 30, 1000]}
                //                transformResult={(d) => {
                //     const result = (d?.result ?? []).map(
                //         ({ loginName, ...item }: any) => item
                //     );

                //     console.log('Transformed result:', result);

                //     return {
                //         result,
                //         total: d?.total ?? result.length,
                //     };
                // }}

                // transformResult={(d) => {
                //     const result = (d?.result ?? []).filter(
                //         (item: any) => item.active === 0
                //     );

                //     return {
                //         result,
                //         total: result.length,
                //     };
                // }}

                transformResult={(d) => {
                    const result = (d?.result ?? []).filter(
                        (item: any) =>
                            !['admin@gmail.com', 'satish', 'adarsh'].includes(item.loginName)
                    );

                    return {
                        result,
                        total: d?.total ?? result.length,
                    };
                }}
            />
        </StoreFactoryContext.Provider>
    </>
}

export { ServerGrid }