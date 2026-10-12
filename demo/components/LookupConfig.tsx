import { Paper, Group, Select, TextInput } from "@mantine/core";

interface LookupConfigProps {
    baseUrl: string;
    endPoint: string;
    endPoints?: string[];
    onBaseUrl: (v: string) => void;
    onEndPoint: (v: string) => void;
}

const DEFAULT_ENDPOINTS = [
    '/userManagement',
    '/masterdata/userType',
    '/masterdata/project',
    '/masterdata/department',
    '/serverlookupData.json'
];

const LookupConfig = ({ baseUrl, endPoint, endPoints, onBaseUrl, onEndPoint }: LookupConfigProps) => {
    const list = endPoints && endPoints.length ? endPoints : DEFAULT_ENDPOINTS;
    const data = Array.from(new Set([...list, endPoint].filter(Boolean))).map((e) => ({ value: e, label: e }));

    return (
        <Paper withBorder radius="sm" p="xs" className="demo-config">
            <Group grow gap="sm" align="flex-end">
                <TextInput size="xs" label="Base URL" placeholder="/api/palmyra"
                    value={baseUrl} onChange={(e) => onBaseUrl(e.currentTarget.value)} />
                <Select size="xs" label="Lookup endpoint" placeholder="Select endpoint"
                    data={data}
                    value={endPoint || null}
                    onChange={(v) => onEndPoint(v || '')}
                    searchable allowDeselect={false}
                    comboboxProps={{ withinPortal: true }} />
            </Group>
        </Paper>
    );
};

export { LookupConfig };
