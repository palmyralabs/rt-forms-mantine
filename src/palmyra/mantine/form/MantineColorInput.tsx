import { ColorInput, ColorInputProps } from '@mantine/core';
import { FieldDecorator, getFieldHandler, IFormFieldError, ITextField, useFieldManager } from '@palmyralabs/rt-forms';
import { Ref, useImperativeHandle, useRef } from 'react';
import { ITextFieldDefinition } from './types';
import { getFieldLabel } from './util';

function MantineColorInput(props: ITextFieldDefinition & Omit<ColorInputProps, 'ref'> & { ref?: Ref<ITextField> }) {
    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions, refreshError } = fieldManager;
    const error: IFormFieldError = getError();
    const inputRef: any = useRef(null);
    const variant = props.variant || 'default';

    useImperativeHandle(props.ref, () => {
        const handler = getFieldHandler(fieldManager)
        return {
            ...handler,
            focus() {
                inputRef.current.focus();
            }
        };
    }, [fieldManager]);

    var options = fieldManager.getFieldProps();

    options.onChange = (v: any) => {
        if (!props.readOnly) {
            setValue(v);
            if (props.onChange)
                props.onChange(v);
        }
    }
    options.onBlur = (event: any) => {
        refreshError;
        if (props.onBlur) {
            props.onBlur(event);
            refreshError
        }
    }
    const value = getValue();

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass}
            colspan={props.colspan} customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <ColorInput
                label={props.label}
                variant={variant}
                ref={inputRef}
                {...options}
                value={value}
                placeholder={props.placeholder}
                error={error.message}
            />
        </FieldDecorator>}
    </>
    );
}

export { MantineColorInput };
