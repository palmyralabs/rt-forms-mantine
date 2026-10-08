import { Accordion } from "@mantine/core";
import { ReactNode } from "react";

interface DemoSectionProps {
    title: string;
    defaultOpen?: boolean;
    children: ReactNode;
}

const DemoSection = ({ title, defaultOpen = true, children }: DemoSectionProps) => {
    return (
        <Accordion variant="separated" radius="md" chevronPosition="left"
            defaultValue={defaultOpen ? title : null}
            styles={{
                control: { paddingTop: 8, paddingBottom: 8 },
                label: { fontSize: 'var(--mantine-font-size-sm)', fontWeight: 600, padding: 0 },
                content: { paddingInline: 'var(--mantine-spacing-sm)', paddingBottom: 'var(--mantine-spacing-sm)' }
            }}>
            <Accordion.Item value={title}>
                <Accordion.Control>{title}</Accordion.Control>
                <Accordion.Panel>{children}</Accordion.Panel>
            </Accordion.Item>
        </Accordion>
    );
};

export { DemoSection };
