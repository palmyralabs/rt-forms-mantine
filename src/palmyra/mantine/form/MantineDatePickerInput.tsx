import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { getFieldLabel } from './util';
import { IDatePickerDefinition } from './types';
import { IDateField, IFormFieldError, useFieldManager, getFieldHandler, FieldDecorator } from '@palmyralabs/rt-forms';
import { DatePickerInput, DatePickerInputProps } from '@mantine/dates';
import dayjs from "dayjs";
import { DateUtils, getDefaultDatePattern } from './DateUtils';
import { FaRegCalendarAlt } from 'react-icons/fa';

const MantineDatePickerInput = forwardRef(function MantineDatePickerInput(
    props: Omit<IDatePickerDefinition, 'displayPattern'> & Omit<DatePickerInputProps, 'defaultValue'>,
    ref: MutableRefObject<IDateField>) {
    const displayFormat: string = props.valueFormat || getDefaultDatePattern();
    const type = props.type;

    const { parse, format, revert } = DateUtils(props);

    const fieldManager = useFieldManager(props.attribute, props, { format, parse });

    const { getError, getValue, setValue, mutateOptions, refreshError } = fieldManager;
    const currentRef = ref ? ref : useRef<IDateField>(null);
    const error: IFormFieldError = getError();
    const value = getValue();

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

    var { serverPattern, ...options } = fieldManager.getFieldProps();

    options.onChange = (d: any) => {
        if (!props.readOnly) {
            if (type == 'range') {
                if (d) {
                    setValue([dayjs(d[0]), dayjs(d[1])]);
                } else {
                    setValue(undefined)
                }
            } else {
                if (d) {
                    setValue(dayjs(d));
                } else {
                    setValue(undefined)
                }
            }
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

    const dateValue = revert(value);
    const fieldIcon = props.rightSection ? props.rightSection : <FaRegCalendarAlt />;
    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass}
            colspan={props.colspan} customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <DatePickerInput
                {...options}
                value={dateValue}
                type={props.type}
                valueFormat={displayFormat}
                error={error.message}
                label={props.label}
                rightSection={fieldIcon}
            />
        </FieldDecorator>}
    </>
    );
});

export { MantineDatePickerInput };