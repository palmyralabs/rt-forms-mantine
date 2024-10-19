import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { IoCheckmarkSharp } from "react-icons/io5";
import { Checkbox, CheckboxProps } from '@mantine/core';

interface TriStateCheckBoxProps extends CheckboxProps {
    checked?: any
    unChecked?: any
    // indeterminate?: any
    color?: any
    checkLabel?: string
    value? : any
}

const TriStateCheckBox = (props: TriStateCheckBoxProps) => {

    const triStateValue = props.value ? props.value : 0
    const [value, setValue] = useState(triStateValue);

    const CheckedIcon = props.checked || IoCheckmarkSharp
    const UnCheckedIcon = props.unChecked || RxCross2
    // const IndeterminateIcon = props.indeterminate || null

    const handleChange = () => {
        setValue(v => {
            switch (v) {
                case 0:
                    return 1;
                case 1:
                    return -1;
                case -1:
                default:
                    return 0;
            }
        });
    };

    const CheckboxIcon = (iconProps) => {
        switch (value) {
            case 1:
                return <CheckedIcon color='green' {...iconProps} />;
            case -1:
                return <UnCheckedIcon color='red' {...iconProps} />;
            case 0:
            default:
                return null;
        }
    };

    const checkLabel = value === 1 ? "Pass" : value === -1 ? "Fail" : "";


    return (<>
        <Checkbox
            {...props}
            icon={CheckboxIcon}
            color={props.color || 'none'}
            indeterminate={value === 0}
            checked={value !== 0}
            value={value}
            onChange={props.onChange || handleChange}
            disabled={props.disabled}
            readOnly={props.readOnly}
            label={props.checkLabel || checkLabel}
        />
    </>
    );
}

export { TriStateCheckBox };

export type { TriStateCheckBoxProps };