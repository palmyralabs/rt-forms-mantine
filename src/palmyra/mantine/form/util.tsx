import { MantineInputFieldOptions } from "./types";

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

export { getFieldLabel, keyToString }