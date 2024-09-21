import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { getFieldHandler, IFormFieldError, ITextField, useFieldManager, FieldDecorator } from '@palmyralabs/rt-forms';
import { ITextFieldDefinition } from './types';
import { getFieldLabel } from './util';
import { TextInput, TextInputProps } from '@mantine/core';

const MantineTextField = forwardRef(function MantineTextField(props: ITextFieldDefinition & TextInputProps, ref: MutableRefObject<ITextField>) {
    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions, refreshError } = fieldManager;
    const currentRef = ref ? ref : useRef<ITextField>(null);
    const error: IFormFieldError = getError();
    const inputRef: any = useRef(null);
    const variant = props.variant || 'default';

    useImperativeHandle(currentRef, () => {
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
    options.onBlur = refreshError;
    const value = getValue();

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass}
            colspan={props.colspan} customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <TextInput
                label={props.label}
                variant={variant}
                ref={inputRef}
                {...options}
                value = {value}
                placeholder={props.placeholder}
                error={error.message}
            />
        </FieldDecorator>}
    </>
    );
});

export { MantineTextField };