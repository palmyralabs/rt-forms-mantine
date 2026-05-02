import { Switch, SwitchProps } from '@mantine/core';
import { FieldDecorator, IFormFieldError, ISwitchField, getFieldHandler, useFieldManager } from '@palmyralabs/rt-forms';
import { Ref, useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import parseOptions from '../options/OptionsParser';
import { ISwitchDefinition } from './types';
import { getFieldLabel } from './util';

function MantineSwitch(props: ISwitchDefinition & Omit<SwitchProps, 'ref'> & { ref?: Ref<ISwitchField> }) {

    const parsedOptions = useMemo(() => parseOptions(props.options, props.label),
        [props.options, props.label]);

    const format = (d: boolean) => {
        if (parsedOptions)
            return d ? parsedOptions.checked.value : parsedOptions.unchecked.value;
    }

    const parse = (d: string): boolean => {
        if (parsedOptions) {
            return (d == parsedOptions.checked.value);
        }
        else return false
    }

    const fieldManager = useFieldManager(props.attribute, props, { format, parse });

    const { getError, getValue, setValue, mutateOptions, refreshError } = fieldManager;
    const error: IFormFieldError = getError();

    const isOn = getValue();

    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(props.ref, () => {
        const handler = getFieldHandler(fieldManager)
        return {
            ...handler,
            focus() {
                if (inputRef.current) {
                    inputRef.current.checked = true;
                    inputRef.current.focus();
                }
            },
            getOptions() {

            },
            setOptions(d) {

            }
        };
    }, [fieldManager]);

    const toggleStatus = () => {
        setValue(!isOn);
    };

    useEffect(() => {
        options.onChange = () => (getLabel());
    }, [isOn])

    const getLabel = () => {
        const key: 'checked' | 'unchecked' = isOn ? 'checked' : 'unchecked';
        if (parsedOptions)
            return parsedOptions[key].title;
    }

    const getOptionValue = () => {
        const key: 'checked' | 'unchecked' = isOn ? 'checked' : 'unchecked';
        if (parsedOptions)
            return parsedOptions[key].value;
    }

    var options = fieldManager.getFieldProps();

    options.onChange = (event: any, checked: boolean) => {
        if (!props.readOnly) {
            setValue(event.target.checked);
            if (props.onChange)
                props.onChange(event.target.checked);
        }
    }
    options.onBlur = (event: any) => {
        refreshError;
        if (props.onBlur) {
            props.onBlur(event);
            refreshError
        }
    }

    const errorMessage = parsedOptions ? error.message : 'Invalid options, must contain two keys'

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <Switch checked={isOn} onClick={toggleStatus} value={getOptionValue()} label={getLabel()} defaultValue={props.defaultValue}
                disabled={props.readOnly} error={errorMessage} ref={(i) => { inputRef.current = i; }}
                {...options}
            />
        </FieldDecorator>}
    </>
    );
}

export { MantineSwitch };
