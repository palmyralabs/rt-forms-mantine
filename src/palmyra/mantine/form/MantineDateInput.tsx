import { DateInput, DateInputProps } from '@mantine/dates';
import { FieldDecorator, getFieldHandler, IDateField, IFormFieldError, useFieldManager } from '@palmyralabs/rt-forms';
import dayjs from "dayjs";
import { forwardRef, RefObject, useImperativeHandle, useRef } from 'react';
import { getDefaultDatePattern } from './DateUtils';
import { IDatePickerDefinition } from './types';
import { getFieldLabel } from './util';

const MantineDateInput = forwardRef(function MantineDateInput(
    props: Omit<IDatePickerDefinition, 'displayPattern'> & DateInputProps,
    ref: RefObject<IDateField>) {
    const displayFormat: string = props.valueFormat || props.serverPattern || getDefaultDatePattern();;

    const parse = (rawData: any) => {
        if (rawData)
            return dayjs(rawData, serverPattern)
        return undefined;
    };
    const format = (v: any) => {
        if (v && v.isValid && v.isValid())
            return v.format(serverPattern);
        return null;
    };

    const fieldManager = useFieldManager(props.attribute, props, { format, parse });

    const { getError, getValue, setValue, mutateOptions, refreshError } = fieldManager;
    const currentRef = ref ? ref : useRef<IDateField>(null);
    const error: IFormFieldError = getError();

    const inputRef: any = useRef(null);
    const value = getValue();

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

    var { serverPattern, ...options } = fieldManager.getFieldProps();

    options.onChange = (d: any) => {
        if (!props.readOnly) {
            setValue(d);
            if (props.onChange)
                props.onChange(d);
        }
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
            <DateInput
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
