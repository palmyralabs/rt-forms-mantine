import { DateTimePicker, DateTimePickerProps } from '@mantine/dates';
import { FieldDecorator, getFieldHandler, IDateField, IFormFieldError, useFieldManager } from '@palmyralabs/rt-forms';
import dayjs from "dayjs";
import { Ref, useImperativeHandle, useRef } from 'react';
import { getDefaultDateTimePattern } from './DateUtils';
import { IDatePickerDefinition } from './types';
import { getFieldLabel } from './util';

function MantineDateTimePicker(
    props: Omit<IDatePickerDefinition, 'displayPattern'> & Omit<DateTimePickerProps, 'defaultValue' | 'ref'> & { ref?: Ref<IDateField> }) {

    const displayFormat: string = props.valueFormat || props.serverPattern || getDefaultDateTimePattern();
    const outputPattern: string = props.serverPattern || props.valueFormat || getDefaultDateTimePattern();

    const parse = (rawData: any) => {
        if (rawData)
            return dayjs(rawData, outputPattern)
        return undefined;
    };
    const format = (v: any) => {
        if (v && v.isValid && v.isValid())
            return v.format(outputPattern);
        return null;
    };

    const fieldManager = useFieldManager(props.attribute, props, { format, parse });

    const { getError, getValue, setValue, mutateOptions, refreshError } = fieldManager;
    const error: IFormFieldError = getError();
    const inputRef: any = useRef(null);

    useImperativeHandle(props.ref, () => {
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

    const options: any = { ...fieldManager.getFieldProps() };
    delete options.serverPattern; 

    options.onChange = (d: any,) => {
        if (!props.readOnly) {
            const val = d ? dayjs(d) : null;
            setValue(val);
            if (props.onChange)
                (props.onChange as any)(val);
        }
    }
    options.onBlur = (event: any) => {
        refreshError;
        if (props.onBlur) {
            props.onBlur(event);
            refreshError
        }
    }
    
    const raw: any = getValue();
    const value = raw
        ? (raw.isValid ? (raw.isValid() ? raw.toDate() : null) : raw)
        : null;

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass}
            colspan={props.colspan} customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <DateTimePicker
                {...options}
                value={value}
                valueFormat={displayFormat}
                error={error.message}
            />
        </FieldDecorator>}
    </>
    );
}

export { MantineDateTimePicker };
