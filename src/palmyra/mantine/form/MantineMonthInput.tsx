import { ActionIcon, TextInput } from '@mantine/core';
import { MonthPicker, MonthPickerInputProps } from '@mantine/dates';
import { FieldDecorator, getFieldHandler, IDateField, IFormFieldError, useFieldManager } from '@palmyralabs/rt-forms';
import dayjs from "dayjs";
import { forwardRef, RefObject, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { DateUtils, getDefaultDatePattern } from './DateUtils';
import { IMonthInputDefinition } from './types';
import { getFieldLabel } from './util';

const MantineMonthInput = forwardRef(function MantineMonthInput(
    props: Omit<IMonthInputDefinition, 'displayPattern'> &
        Omit<MonthPickerInputProps, 'defaultValue'>,
    ref: RefObject<IDateField>
) {
    const displayFormat: string = props.valueFormat || getDefaultDatePattern();
    const type = props.type;

    const { parse, format, revert } = DateUtils(props);
    const fieldManager = useFieldManager(props.attribute, props, { format, parse });
    const { getError, getValue, setValue, mutateOptions, refreshError } = fieldManager;

    const currentRef = ref ?? useRef<IDateField>(null);
    const error: IFormFieldError = getError();
    const value = getValue();
    const [opened, setOpened] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (value) {
            const formatted = dayjs(value).format(displayFormat);
            setInputValue(formatted);
        } else {
            setInputValue('');
        }
    }, [value]);

    useImperativeHandle(
        currentRef,
        () => {
            const handler = getFieldHandler(fieldManager);
            return {
                ...handler,
                focus() {
                    inputRef.current?.focus();
                },
                setCurrent() { },
            };
        },
        [fieldManager]
    );

    const { serverPattern, ...options } = fieldManager.getFieldProps();

    options.onChange = (d: any) => {
        if (props.readOnly) return;

        if (type === 'range') {
            setValue(d ? [dayjs(d[0]), dayjs(d[1])] : undefined);
        } else {
            setValue(d ? dayjs(d) : undefined);
        }

        props.onChange?.(d);
    };

    options.onBlur = (event: any) => {
        refreshError();
        props.onBlur?.(event);
    };

    const handleInput = (val: string) => {
        setInputValue(val);
        const parsed = dayjs(val, [displayFormat], false);
        if (parsed?.isValid()) {
            setValue(parsed.endOf('month'));
        } else if (val.trim() === '') {
            setValue(undefined);
        }
    };

    const handlePicker = (date: any) => {

        setValue(date);
        setInputValue(date ? dayjs(date).format(displayFormat) : '');
        setOpened(false);
    };

    const dateValue = revert(value);
    const fieldIcon = props.rightSection ?? <FaRegCalendarAlt />;

    return (
        <>
            {!mutateOptions.visible && (
                <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass}
                    colspan={props.colspan} customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
                    <TextInput ref={inputRef}
                        value={inputValue}
                        onChange={(e) => handleInput(e.currentTarget.value)}
                        rightSection={
                            <ActionIcon variant="subtle" onClick={() => setOpened((prev) => !prev)}>
                                {fieldIcon}
                            </ActionIcon>
                        }
                        onFocus={() => setOpened((prev) => !prev)}
                        // onBlur={() => setOpened(false)}
                        error={error?.message}
                        label={props.label}
                    // {...options}
                    />

                    {opened && (
                        <MonthPicker
                            value={dateValue}
                            onChange={handlePicker}
                            {...options}
                        />
                    )}
                </FieldDecorator>
            )}
        </>
    );
});

export { MantineMonthInput };