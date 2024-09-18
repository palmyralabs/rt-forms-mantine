import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { getFieldLabel } from './util';
import { IDatePickerDefinition } from './types';
import { IDateField, IFormFieldError, useFieldManager, getFieldHandler, FieldDecorator } from '@palmyralabs/rt-forms';
import { DateTimePicker, DateTimePickerProps } from '@mantine/dates';

const MantineDateTimePicker = forwardRef(function MantineDateTimePicker(props: IDatePickerDefinition & DateTimePickerProps,
    ref: MutableRefObject<IDateField>) {
    // const serverPattern = props.serverPattern || props.displayPattern || "YYYY-MM-DD";
    const displayFormat: string = props.displayPattern || props.serverPattern || "YYYY-MM-DD";

    const fieldManager = useFieldManager(props.attribute, props);

    const { getError, getValue, setValue, mutateOptions, refreshError } = fieldManager;
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

    options.onChange = (d: any, ) => {
        if (!props.readOnly) {
            setValue(d);
            if (props.onChange)
                props.onChange(d);
        }
    }
    options.onBlur = refreshError;

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

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass}
            colspan={props.colspan} customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <DateTimePicker
                defaultValue={defaultValue}
                {...options}
                value={value}
                valueFormat={displayFormat}
                error={error.message}
            />
        </FieldDecorator>}
    </>
    );
});

export { MantineDateTimePicker };