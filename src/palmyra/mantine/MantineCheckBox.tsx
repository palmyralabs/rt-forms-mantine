import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { FieldDecorator, ICheckBoxField, IFormFieldError, ISwitchField, getFieldHandler, useFieldManager } from '@palmyralabs/rt-forms';
import { getFieldLabel } from './util';
import { ICheckBoxDefinition } from './types';
import { Checkbox, CheckboxProps } from '@mantine/core';

const MantineCheckBox = forwardRef(function MantineCheckBox(props: CheckboxProps & ICheckBoxDefinition, ref: MutableRefObject<ICheckBoxField>) {
    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions } = fieldManager;
    const currentRef = ref ? ref : useRef<ISwitchField>(null);
    const value: boolean = getValue() == true;
    const inputRef: any = useRef(null);
    const error: IFormFieldError = getError();

    useImperativeHandle(currentRef, () => {
        const handler = getFieldHandler(fieldManager)
        return {
            ...handler,
            focus() {
                inputRef.current.checked = true;
                inputRef.current.focus();
            },
            setOptions(d: any) {
            },
            getOptions() {
            }
        };
    }, [fieldManager]);

    var options = fieldManager.getFieldProps();

    options.onChange = (d: any, checked: boolean) => {
        if (!props.readOnly) {
            setValue(d.currentTarget.checked);
            if (props.onChange) {
                props.onChange(d.currentTarget.checked)
            }
        }
    }

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <Checkbox
                {...options}
                checked={value}
                disabled={props.disabled} readOnly={props.readOnly}
                ref={(r) => { inputRef.current = r }}
                label={props.label}
                error={error.message}
            />
        </FieldDecorator>}
    </>
    )
});

export { MantineCheckBox };