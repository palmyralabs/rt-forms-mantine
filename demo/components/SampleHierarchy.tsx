import { useRef, useState } from "react";
import { Badge, Button, Code, Group, SegmentedControl, Stack, Switch, Text } from "@mantine/core";
import { HierarchyMap, IHierarchyMapRef } from "../../src/main";
import { DemoShell } from "./DemoShell";
import { DemoSection } from "./DemoSection";

const ORG = [
    {
        id: 'ceo', label: 'Chief Executive', children: [
            {
                id: 'cto', label: 'CTO', children: [
                    { id: 'fe', label: 'Frontend Lead', children: [{ id: 'fe1', label: 'Priya' }, { id: 'fe2', label: 'Arun' }] },
                    { id: 'be', label: 'Backend Lead', children: [{ id: 'be1', label: 'Kiran' }] }
                ]
            },
            {
                id: 'cfo', label: 'CFO', children: [
                    { id: 'acc', label: 'Accounting' },
                    { id: 'fin', label: 'Finance Ops' }
                ]
            },
            { id: 'coo', label: 'COO' }
        ]
    }
];

const LAZY_ROOTS = [
    { id: 'in', label: 'India', hasChildren: true },
    { id: 'us', label: 'United States', hasChildren: true },
    { id: 'sg', label: 'Singapore', hasChildren: false }
];

const LAZY_DB: Record<string, any[]> = {
    in: [{ id: 'in-tn', label: 'Tamil Nadu', hasChildren: true }, { id: 'in-kl', label: 'Kerala', hasChildren: false }],
    us: [{ id: 'us-ca', label: 'California', hasChildren: false }, { id: 'us-ny', label: 'New York', hasChildren: false }],
    'in-tn': [{ id: 'tn-cbe', label: 'Coimbatore' }, { id: 'tn-mdu', label: 'Madurai' }]
};

const SampleHierarchy = () => {
    const mapRef: any = useRef<IHierarchyMapRef>(null);
    const [selectable, setSelectable] = useState<'false' | 'single' | 'multiple'>('multiple');
    const [editable, setEditable] = useState(true);
    const [selected, setSelected] = useState<any[]>([]);
    const [data, setData] = useState<any[]>(ORG);

    const loadChildren = (node: any) => new Promise<any[]>((resolve) =>
        setTimeout(() => resolve(LAZY_DB[node.id] || []), 600));

    return (
        <DemoShell title="Hierarchical Map" description="Org-chart tree diagram — select, lazy-load, search, and edit (add / rename / delete / drag)">
            <DemoSection title="Controls">
                <Group gap="md" align="center">
                    <Group gap="xs">
                        <Text size="sm">Select</Text>
                        <SegmentedControl size="xs" value={selectable} onChange={(v) => setSelectable(v as any)}
                            data={[{ label: 'None', value: 'false' }, { label: 'Single', value: 'single' }, { label: 'Multiple', value: 'multiple' }]} />
                    </Group>
                    <Switch size="sm" label="Editable" checked={editable} onChange={(e) => setEditable(e.currentTarget.checked)} />
                    <Button size="xs" variant="default" onClick={() => mapRef.current?.expandAll()}>Expand all</Button>
                    <Button size="xs" variant="default" onClick={() => mapRef.current?.collapseAll()}>Collapse all</Button>
                    <Button size="xs" variant="light" color="red" onClick={() => mapRef.current?.clearSelection()}>Clear selection</Button>
                </Group>
                {selectable !== 'false' && (
                    <Group gap={6}>
                        <Text size="sm">Selected:</Text>
                        {selected.length ? selected.map((id) => <Badge key={id} size="sm" variant="light">{id}</Badge>)
                            : <Text size="sm" c="dimmed">none</Text>}
                    </Group>
                )}
            </DemoSection>

            <DemoSection title="Static tree (selection + search + edit + drag)">
                <HierarchyMap
                    mapRef={mapRef}
                    data={data}
                    defaultExpandedIds={['ceo', 'cto']}
                    searchable
                    selectable={selectable === 'false' ? false : selectable}
                    editable={editable}
                    onSelectionChange={(ids) => setSelected(ids)}
                    onChange={setData}
                    onAdd={(parent, node) => console.log('add', node, 'under', parent?.id ?? 'root')}
                    onRename={(node, label) => console.log('rename', node.id, '→', label)}
                    onDelete={(node) => console.log('delete', node.id)}
                    onMove={(node, parent, index) => console.log('move', node.id, '→', parent?.id ?? 'root', '@', index)} />
            </DemoSection>

            <DemoSection title="Lazy-loaded tree (children fetched on expand)">
                <HierarchyMap
                    data={LAZY_ROOTS}
                    loadChildren={loadChildren}
                    searchable={false}
                    selectable="single"
                    onNodeClick={(n) => console.log('clicked', n.id)} />
            </DemoSection>

            <DemoSection title="Custom node render">
                <HierarchyMap
                    data={ORG}
                    defaultExpandAll
                    renderNode={(n, ctx) => (
                        <Group gap={6} wrap="nowrap">
                            <Text size="sm" fw={ctx.hasChildren ? 600 : 400}>{n.label}</Text>
                            {ctx.hasChildren && <Code>{n.id}</Code>}
                        </Group>
                    )} />
            </DemoSection>
        </DemoShell>
    );
};

export { SampleHierarchy };
