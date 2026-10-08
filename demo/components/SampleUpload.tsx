import { Stack, TextInput, Text, Code } from "@mantine/core";
import { useState } from "react";
import { TusDropZone, TusUploadField } from "../../src/main";
import { DemoShell } from "./DemoShell";
import { DemoSection } from "./DemoSection";

const SampleUpload = () => {
    const [endpoint, setEndpoint] = useState("/api/palmyra/files/upload");
    const [picked, setPicked] = useState<string[]>([]);

    return (
        <DemoShell title="Tus Upload" description="Resumable file upload (tus) — normal, compact and field variants">
            <TextInput size="xs" label="Upload endpoint" value={endpoint}
                onChange={(e) => setEndpoint(e.currentTarget.value)} />

            <DemoSection title="Normal variant">
                <TusDropZone endpoint={endpoint}
                    onFilesChange={(files) => setPicked(files.map((f) => f.name))}
                    onMessage={(type, msg) => console.log('upload', type, msg)}
                    onUploadFinish={(files) => console.log('finished', files)} />
            </DemoSection>

            <DemoSection title="Compact variant">
                <TusDropZone endpoint={endpoint} variant="compact"
                    onMessage={(type, msg) => console.log('upload', type, msg)} />
            </DemoSection>

            <DemoSection title="Field variant (single PDF, no submit button)">
                <TusUploadField label="Attach document" required allowSingleFile endpoint={endpoint}
                    onFilesChange={(files) => console.log('field files', files)} />
            </DemoSection>

            <Stack gap={2}>
                <Text size="xs" c="dimmed">Selected (normal):</Text>
                <Code block>{picked.length ? picked.join('\n') : '—'}</Code>
            </Stack>
        </DemoShell>
    );
};

export { SampleUpload };
