import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { getFieldLabel } from './util';
import { IDatePickerDefinition } from './types';
import { IDateField, IFormFieldError, useFieldManager, getFieldHandler, FieldDecorator } from '@palmyralabs/rt-forms';
import { DatePickerInput, DatePickerInputProps } from '@mantine/dates';
import dayjs from "dayjs";

const MantineDatePickerInput = forwardRef(function MantineDatePickerInput(
    props: Omit<IDatePickerDefinition, 'displayPattern'> & Omit<DatePickerInputProps, 'defaultValue'>,
    ref: MutableRefObject<IDateField>) {
    // const serverPattern = props.serverPattern || props.displayPattern || "YYYY-MM-DD";
    const displayFormat: string = props.valueFormat || "YYYY-MM-DD";
    const type = props.type;


    const parseToDaysJs = (rawData: any, serverPattern) => {
        if (rawData) {
            return dayjs(rawData, serverPattern)
        } return undefined;
    };

    const formatDayJs = (v: any, serverPattern) => {
        if (v && v.isValid && v.isValid())
            return v.format(serverPattern)
    };

    const parse = (rawData: string) => {
        if (type == "range") {
            if (rawData && typeof rawData == 'string') {
                var from: dayjs.Dayjs, to: dayjs.Dayjs;
                const fc = rawData.charAt(0);
                if (fc == '>')
                    from = parseToDaysJs(rawData.slice(1), serverPattern);
                else if (fc == '<')
                    to = parseToDaysJs(rawData.slice(1), serverPattern);
                else {
                    const dts = rawData.split('...');
                    from = parseToDaysJs(dts[0], serverPattern);
                    if (dts[1])
                        to = parseToDaysJs(dts[1], serverPattern);
                }
            }
            return [from, to];
        }
        return parseToDaysJs(rawData, serverPattern);
    }

    const format = (v): string => {
        if (type == "range") {
            if (v) {
                const from = formatDayJs(v.from, serverPattern);
                const to = formatDayJs(v.to, serverPattern);

                if (from) {
                    if (to) {
                        return from + '...' + to;
                    } else {
                        return '>' + from;
                    }
                } else {
                    if (to) {
                        return '<' + to;
                    }
                }
            }
        } else if (type == "default") {
            formatDayJs(v, serverPattern);
        }
        return undefined;
    };

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
            console.log("onchange", d)
            setValue(d);
            if (props.onChange)
                props.onChange(d);
        }
    }
    options.onBlur = refreshError;

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass}
            colspan={props.colspan} customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <DatePickerInput
                {...options}
                value={value}
                type={props.type}
                valueFormat={displayFormat}
                error={error.message}
                label={props.label}
            />
        </FieldDecorator>}
    </>
    );
});

export { MantineDatePickerInput };