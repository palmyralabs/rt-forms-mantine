import { CheckboxProps } from '@mantine/core';
import { FieldDecorator, getFieldHandler, ICheckBoxField, IFormFieldError, useFieldManager } from '@palmyralabs/rt-forms';
import { forwardRef, RefObject, useImperativeHandle, useRef } from 'react';
import { TriStateCheckBox, TriStateCheckBoxProps } from '../ext/TriStateCheckBox';
import { ICheckBoxDefinition } from './types';
import { getFieldLabel } from './util';

const MantineTriStateCheckBox = forwardRef(function MantineTriStateCheckBox(props: TriStateCheckBoxProps & CheckboxProps & ICheckBoxDefinition, ref: RefObject<ICheckBoxField>) {
    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions, refreshError } = fieldManager;
    const currentRef = ref ? ref : useRef<ICheckBoxField>(null);
    const value: any = getValue() ? getValue() : undefined;
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

    options.onChange = (d: any) => {
        if (!props.readOnly) {
            setValue(d);
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
            <TriStateCheckBox value={value} error={error.message} {...props} />
        </FieldDecorator>}
    </>
    )
});

export { MantineTriStateCheckBox };
