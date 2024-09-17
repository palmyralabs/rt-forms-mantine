import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { getFieldLabel } from './util';
import { IDatePickerDefinition } from './types';
import { IDateField, IFormFieldError, useFieldManager, getFieldHandler, FieldDecorator } from '@palmyralabs/rt-forms';
import { DatePickerInput, DatePickerInputProps } from '@mantine/dates';

const MantineDatePickerInput = forwardRef(function MantineDatePickerInput(props: IDatePickerDefinition & DatePickerInputProps,
    ref: MutableRefObject<IDateField>) {
    // const serverPattern = props.serverPattern || props.displayPattern || "YYYY-MM-DD";
    const displayFormat: string = props.displayPattern || props.serverPattern || "YYYY-MM-DD";

    const fieldManager = useFieldManager(props.attribute, props);

    const { getError, getValue, setValue, mutateOptions } = fieldManager;
    const currentRef = ref ? ref : useRef<IDateField>(null);
    const error: IFormFieldError = getError();

    const inputRef: any = useRef(null);

    useImperativeHandle(currentRef, () => {
        const handler = getFieldHandler(fieldManager)
        return {
            ...handler,
            focus() {
                inputRef.current.focus();
            },
            setCurrent() {

            },
        };
    }, [fieldManager]);

    var options = fieldManager.getFieldProps();

    options.onChange = (d: any) => {
        if (!props.readOnly) {
            console.log("e", d)
            setValue(d);
            if (props.onChange)
                props.onChange(d);
        }
    }

    var value;
    if (getValue() != '') {
        if (Array.isArray(getValue())) {
            value = [new Date(getValue()[0]), new Date(getValue()[1])]
        }
        else {
            value = new Date(getValue())
        }
    }

    const defaultValue = (() => {
        if (props.defaultValue) {
            if (props.type === 'range') {
                return [new Date(props.defaultValue[0]), new Date(props.defaultValue[1])];
            }
            return new Date(props.defaultValue);
        }
        return '';
    })();


    // var defaultValue;
    // if (props.defaultValue && props.type == 'range') {
    //     defaultValue = [new Date(props?.defaultValue[0]), new Date(props?.defaultValue[1])]
    // }
    // else if (props.defaultValue) {
    //     defaultValue = new Date(props.defaultValue)
    // }
    // else {
    //     defaultValue = ''
    // }

    // const value = getValue();
    // if (value !== '') {
    //     if (Array.isArray(value)) {
    //         return [new Date(value[0]), new Date(value[1])];
    //     } else {
    //         return new Date(value);
    //     }
    // }

    console.log(value, defaultValue)

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass}
            colspan={props.colspan} customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <DatePickerInput
                defaultValue={defaultValue}
                {...options}
                // value={value}
                type={props.type}
                valueFormat={displayFormat}
                error={error.message}
            />
        </FieldDecorator>}
    </>
    );
});

export { MantineDatePickerInput };