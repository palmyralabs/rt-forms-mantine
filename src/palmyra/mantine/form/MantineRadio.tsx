import { Radio, RadioProps } from '@mantine/core';
import { FieldDecorator, getFieldHandler, IFormFieldError, IRadioGroupField, useFieldManager } from '@palmyralabs/rt-forms';
import { Ref, useImperativeHandle, useRef } from 'react';
import { IRadioDefinition } from './types';
import { getFieldLabel } from './util';

function MantineRadio(props: IRadioDefinition & Omit<RadioProps, 'ref'> & { ref?: Ref<IRadioGroupField> }) {
    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions, refreshError } = fieldManager;
    const error: IFormFieldError = getError();
    // const autoFocus = props.autoFocus || false;
    const inputRef: any = useRef(null);

    useImperativeHandle(props.ref, () => {
        const handler = getFieldHandler(fieldManager)
        return {
            ...handler,
            focus() {
                inputRef.current.focus();
            },
            setOptions(d: any) {
            },
            getOptions() {
            }
        };
    }, [fieldManager]);

    var fieldOptions = fieldManager.getFieldProps();

    fieldOptions.onChange = (v: any) => {
        if (!props.readOnly) {
            setValue(v);
            if (props.onChange)
                props.onChange(v);
        }
    }

    fieldOptions.onBlur = (event: any) => {
        refreshError;
        if (props.onBlur) {
            props.onBlur(event);
            refreshError
        }
    }

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <Radio
                checked={getValue()}
                {...fieldOptions}
                error={error.message}
            />
        </FieldDecorator>}
    </>
    );
}

export { MantineRadio };
