import { Checkbox, CheckboxProps } from '@mantine/core';
import { FieldDecorator, getFieldHandler, ICheckBoxField, IFormFieldError, useFieldManager } from '@palmyralabs/rt-forms';
import { forwardRef, RefObject, useImperativeHandle, useRef } from 'react';
import { ICheckBoxDefinition } from './types';
import { getFieldLabel } from './util';

const MantineCheckBox = forwardRef(function MantineCheckBox(props: CheckboxProps & ICheckBoxDefinition, ref: RefObject<ICheckBoxField>) {
    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions, refreshError } = fieldManager;
    const currentRef = ref ? ref : useRef<ICheckBoxField>(null);
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
    options.onBlur = (event: any) => {
        refreshError;
        if (props.onBlur) {
            props.onBlur(event);
            refreshError
        }
    }

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <Checkbox
                {...options}
                defaultChecked={props.defaultChecked}
                checked={value}
                value={value}
                defaultValue={props.defaultValue}
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
