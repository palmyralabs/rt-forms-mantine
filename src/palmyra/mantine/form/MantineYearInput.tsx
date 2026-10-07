import { ActionIcon, Popover, TextInput } from '@mantine/core';
import { YearPicker, YearPickerInputProps } from '@mantine/dates';
import { FieldDecorator, getFieldHandler, IDateField, IFormFieldError, useFieldManager } from '@palmyralabs/rt-forms';
import dayjs from "dayjs";
import { Ref, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { DateUtils } from './DateUtils';
import { IYearInputDefinition } from './types';
import { getFieldLabel } from './util';

function MantineYearInput(
    props: Omit<IYearInputDefinition, 'displayPattern'> &
        Omit<YearPickerInputProps, 'defaultValue' | 'ref'> & { ref?: Ref<IDateField> }
) {
    const displayFormat: string = (typeof props.valueFormat === 'string' ? props.valueFormat : undefined) || 'YYYY';

    const { parse, format, revert } = DateUtils(props);
    const fieldManager = useFieldManager(props.attribute, props, { format, parse });
    const { getError, getValue, setValue, mutateOptions, refreshError } = fieldManager;

    const error: IFormFieldError = getError();
    const value = getValue();
    const [inputValue, setInputValue] = useState('');
    const [browseDate, setBrowseDate] = useState<any>(undefined);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (value) {
            const d = dayjs(value);
            setInputValue(d.format(displayFormat));
            setBrowseDate(d.toDate());
        } else {
            setInputValue('');
        }
    }, [value]);

    useImperativeHandle(
        props.ref,
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
        setValue(d ? dayjs(d) : undefined);
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
            setValue(parsed.endOf('year'));
        } else if (val.trim() === '') {
            setValue(undefined);
        }
    };

    const dateValue = revert(value);
    const fieldIcon = props.rightSection ?? <FaRegCalendarAlt />;

    return (
        <>
            {!mutateOptions.visible && (
                <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass}
                    colspan={props.colspan} customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
                    <Popover width={'auto'} position="bottom-start">
                        <Popover.Target>
                            <TextInput ref={inputRef}
                                value={inputValue}
                                onChange={(e) => handleInput(e.currentTarget.value)}
                                rightSection={
                                    <ActionIcon variant="subtle">
                                        {fieldIcon}
                                    </ActionIcon>
                                }
                                error={error?.message}
                                label={props.label} />
                        </Popover.Target>
                        <Popover.Dropdown>
                            <YearPicker value={dateValue} date={browseDate}
                                onDateChange={setBrowseDate} {...options} />
                        </Popover.Dropdown>
                    </Popover>
                </FieldDecorator>
            )}
        </>
    );
}

export { MantineYearInput };
