import { Textarea, TextareaProps } from '@mantine/core';
import { FieldDecorator, getFieldHandler, IFormFieldError, ITextField, useFieldManager } from '@palmyralabs/rt-forms';
import { Ref, useImperativeHandle, useRef } from 'react';
import { ITextFieldDefinition } from './types';
import { getFieldLabel } from './util';

function MantineTextArea(props: ITextFieldDefinition & Omit<TextareaProps, 'ref'> & { ref?: Ref<ITextField> }) {

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

    options.onChange = (event: any) => {
        if (!props.readOnly) {
            setValue(event.target.value);
            if (props.onChange)
                props.onChange(event);
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
            <Textarea
                variant={variant}
                label={props.label}
                ref={inputRef}
                defaultValue={props.defaultValue}
                {...options}
                value={value}
                error={error.message} />
        </FieldDecorator>}
    </>
    );
}

export { MantineTextArea };
