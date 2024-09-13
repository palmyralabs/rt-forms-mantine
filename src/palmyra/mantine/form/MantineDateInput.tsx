import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { getFieldLabel } from './util';
import { IDatePickerDefinition } from './types';
import { IDateField, IFormFieldError, useFieldManager, getFieldHandler, FieldDecorator } from '@palmyralabs/rt-forms';
import { DateInputProps, DateInput } from '@mantine/dates';

const MantineDateInput = forwardRef(function MantineDateInput(props: IDatePickerDefinition & DateInputProps,
    ref: MutableRefObject<IDateField>) {
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
        value = new Date(getValue())
    }

    const defaultValue = (() => {
        if (props.defaultValue) {
            return new Date(props.defaultValue);
        }
        return '';
    })();

    console.log(value, defaultValue)

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass}
            colspan={props.colspan} customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <DateInput
                defaultValue={defaultValue}
                {...options}
                value={value}
                type={props.type}
                valueFormat={displayFormat}
                error={error.message}
            />
        </FieldDecorator>}
    </>
    );
});

export { MantineDateInput };