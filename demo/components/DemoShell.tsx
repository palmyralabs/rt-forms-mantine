import { Paper, Group, Title, Text, Divider, Stack } from "@mantine/core";
import { ReactNode } from "react";

interface DemoShellProps {
    title: string;
    description?: string;
    actions?: ReactNode;
    children: ReactNode;
}

const DemoShell = ({ title, description, actions, children }: DemoShellProps) => {
    return (
        <Paper withBorder radius="md" p="md" shadow="xs">
            <Group justify="space-between" align="center" wrap="nowrap" mb="xs">
                <div>
                    <Title order={4}>{title}</Title>
                    {description && (
                        <Text c="dimmed" size="xs">{description}</Text>
                    )}
                </div>
                {actions && <Group gap="xs">{actions}</Group>}
            </Group>
            <Divider mb="md" />
            <Stack gap="md">{children}</Stack>
        </Paper>
    );
};

export { DemoShell };
