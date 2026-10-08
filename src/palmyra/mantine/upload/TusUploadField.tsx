import { Group, Input, Stack } from "@mantine/core";
import { Ref } from "react";
import { TusDropZone, ITusDropZoneProps, ITusDropZoneRef } from "./TusDropZone";

interface TusUploadFieldProps extends Omit<ITusDropZoneProps, 'variant'> {
    label?: string;
    required?: boolean;
    uploadRef?: Ref<ITusDropZoneRef>;
}

const TusUploadField = (props: TusUploadFieldProps) => {
    const { label, required, uploadRef, ...rest } = props;
    return (
        <Stack gap={4}>
            {label && (
                <Group gap={4}>
                    <Input.Label required={required}>{label}</Input.Label>
                </Group>
            )}
            <TusDropZone ref={uploadRef} variant="compact" withoutSubmitBtn {...rest} />
        </Stack>
    );
};

export { TusUploadField };
export type { TusUploadFieldProps };
