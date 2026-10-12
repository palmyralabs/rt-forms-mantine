import { Group, ThemeIcon, Tooltip } from "@mantine/core";
import { ReactNode } from "react";
import { FiInfo } from "react-icons/fi";
import { MantineInputFieldOptions } from "./types";
import "./FieldLabel.css";

const getLabelNode = (props: any): ReactNode => {
    const label = props.label;
    if (label == null || !props.labelInfo) return label;
    return (
        <Group gap={4} wrap="nowrap" component="span" display="inline-flex">
            <span>{label}</span>
            <Tooltip label={props.labelInfo} multiline w={220} withArrow
                events={{ hover: true, focus: true, touch: true }}>
                <ThemeIcon size={14} radius="xl" variant="light" color="gray" className="py-field-info-icon">
                    <FiInfo size={10} />
                </ThemeIcon>
            </Tooltip>
        </Group>
    );
};

const getFieldLabel = (props: MantineInputFieldOptions) => {
    if (props.required && props.title)
        return (
            <>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                    {props.title}
                    <span style={{ color: 'red' }}>*</span>
                </div>
            </>
        );
    else
        return props.title;
}

const keyToString = (v: any) => {
    if (typeof (v) == 'number') {
        return v + ''
    }
    return v
}

export { getFieldLabel, getLabelNode, keyToString }