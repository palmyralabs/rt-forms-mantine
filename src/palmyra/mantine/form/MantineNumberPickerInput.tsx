import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { getFieldHandler, IFormFieldError, ITextField, useFieldManager, FieldDecorator } from '@palmyralabs/rt-forms';
import { ITextFieldDefinition } from './types';
import { getFieldLabel } from './util';
import { NumberInputProps } from '@mantine/core';
import { NumberPickerInput } from './internal/NumberPickerInput';

const MantineNumberPickerInput = forwardRef(function MantineNumberField(props: ITextFieldDefinition & NumberInputProps, ref: MutableRefObject<ITextField>) {
    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions, refreshError } = fieldManager;
    const currentRef = ref ? ref : useRef<ITextField>(null);


    const error: IFormFieldError = getError();
    const variant = props.variant || 'default';
    var value = getValue();

    useImperativeHandle(currentRef, () => {
        const handler = getFieldHandler(fieldManager)
        return {
            ...handler,
            focus() {
                // do nothing now.  will be revisited later.
            }
        };
    }, [fieldManager]);

    var options = fieldManager.getFieldProps();

    options.onChange = (event: any) => { 
        setValue(event);
    }
    options.onBlur = (event: any) => {
        refreshError;
        if (props.onBlur) {
            props.onBlur(event);
            refreshError
        }
    }

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass}
            colspan={props.colspan} customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <NumberPickerInput defaultValue={props.defaultValue}
                label={props.label}                
                variant={variant}
                {...options}
                placeholder={props.placeholder}
                value={value}
                error={error.message} />
        </FieldDecorator>}
    </>
    );
});

export { MantineNumberPickerInput };