import { PinInput, PinInputProps } from '@mantine/core';
import { FieldDecorator, getFieldHandler, IFormFieldError, ITextField, useFieldManager } from '@palmyralabs/rt-forms';
import { Ref, useImperativeHandle, useRef } from 'react';
import { IPinInputDefinition } from './types';
import { getFieldLabel } from './util';

function MantinePinInput(props: IPinInputDefinition & Omit<PinInputProps, 'ref'> & { ref?: Ref<ITextField> }) {
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

    options.onChange = (value: any) => {
        if (!props.readOnly) {
            setValue(value);
            if (props.onChange)
                props.onChange(value);
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
            <PinInput
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

export { MantinePinInput };
