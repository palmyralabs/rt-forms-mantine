import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { FieldDecorator, ICheckBoxField, IFormFieldError, getFieldHandler, useFieldManager } from '@palmyralabs/rt-forms';
import { getFieldLabel } from './util';
import { ICheckBoxDefinition } from './types';
import { CheckboxProps } from '@mantine/core';
import { TriStateCheckBox, TriStateCheckBoxProps } from '../ext/TriStateCheckBox';

const MantineTriStateCheckBox = forwardRef(function MantineTriStateCheckBox(props: TriStateCheckBoxProps & CheckboxProps & ICheckBoxDefinition, ref: MutableRefObject<ICheckBoxField>) {
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
    options.onBlur = refreshError;

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <TriStateCheckBox value={value} error={error.message} {...props} />
        </FieldDecorator>}
    </>
    )
});

export { MantineTriStateCheckBox };