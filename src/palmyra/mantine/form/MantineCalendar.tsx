import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { getFieldLabel } from './util';
import { IDatePickerDefinition } from './types';
import { IDateField, IFormFieldError, useFieldManager, getFieldHandler, FieldDecorator } from '@palmyralabs/rt-forms';
import { Calendar, CalendarProps } from '@mantine/dates';

const MantineCalendar = forwardRef(function MantineCalendar(
    props: Omit<IDatePickerDefinition, 'displayPattern'> & CalendarProps,
    ref: MutableRefObject<IDateField>) {

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

    options.onChange = (d: any) => {
        if (!props.readOnly) {
            setValue(d);
            if (props.onChange)
                props.onChange(d);
        }
    }
    options.onBlur = refreshError;

    var value;
    if (getValue() != '') {
        if (Array.isArray(getValue())) {
            value = [new Date(getValue()[0]), new Date(getValue()[1])]
        }
        else {
            value = new Date(getValue())
        }
    }

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass}
            colspan={props.colspan} customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <Calendar
                defaultValue={props.defaultValue}
                {...options}
                value={value}
                error={error.message}
            />
        </FieldDecorator>}
    </>
    );
});

export { MantineCalendar };