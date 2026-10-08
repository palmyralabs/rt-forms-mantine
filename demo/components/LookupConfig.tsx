import { Paper, Group, TextInput } from "@mantine/core";

interface LookupConfigProps {
    baseUrl: string;
    endPoint: string;
    onBaseUrl: (v: string) => void;
    onEndPoint: (v: string) => void;
}

const LookupConfig = ({ baseUrl, endPoint, onBaseUrl, onEndPoint }: LookupConfigProps) => {
    return (
        <Paper withBorder radius="sm" p="xs" className="demo-config">
            <Group grow gap="sm" align="flex-end">
                <TextInput size="xs" label="Base URL" placeholder="/api/palmyra"
                    value={baseUrl} onChange={(e) => onBaseUrl(e.currentTarget.value)} />
                <TextInput size="xs" label="Lookup endpoint" placeholder="/userManagement"
                    value={endPoint} onChange={(e) => onEndPoint(e.currentTarget.value)} />
            </Group>
        </Paper>
    );
};

export { LookupConfig };
