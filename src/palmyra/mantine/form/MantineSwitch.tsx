import { useRef, useImperativeHandle, forwardRef, useState, useMemo, useEffect, MutableRefObject } from 'react';
import { ISwitchDefinition } from './types';
import { IFormFieldError, ISwitchField, getFieldHandler, useFieldManager, FieldDecorator } from '@palmyralabs/rt-forms';
import { getFieldLabel } from './util';
import parseOptions from '../options/OptionsParser';
import { Switch, SwitchProps } from '@mantine/core';

const MantineSwitch = forwardRef(function MantineSwitch(props: ISwitchDefinition & SwitchProps, ref: MutableRefObject<ISwitchField>) {
    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions, refreshError } = fieldManager;
    const currentRef = ref ? ref : useRef<ISwitchField>(null);
    const error: IFormFieldError = getError();

    const parsedOptions = useMemo(() => parseOptions(props.options, props.label),
        [props.options, props.label]);

    const parseValue = (value, defaultValue): boolean => {
        var checkedValue = parsedOptions['checked'].value;
        if (value != undefined && value != null) {
            return checkedValue == value;
        } else
            return checkedValue == defaultValue;
    }

    const [isOn, setIsOn] = useState(parseValue(getValue(), props.defaultValue));

    const inputRef = useRef(null);

    useEffect(() => {
        setIsOn(parseValue(getValue(), props.defaultValue));
    }, [getValue()])

    useImperativeHandle(currentRef, () => {
        const handler = getFieldHandler(fieldManager)
        return {
            ...handler,
            focus() {
                inputRef.current.checked = true;
                inputRef.current.focus();
            },
            getOptions() {

            },
            setOptions(d) {

            }
        };
    }, [fieldManager]);

    const toggleStatus = () => {
        setIsOn(!isOn);
    };

    useEffect(() => {
        options.onChange = () => (getLabel());
    }, [isOn])

    const getLabel = () => {
        var key = isOn ? 'checked' : 'unchecked';
        return parsedOptions[key].title;
    }

    const getOptionValue = () => {
        var key = isOn ? 'checked' : 'unchecked';
        return parsedOptions[key].value || null;
    }

    var options = fieldManager.getFieldProps();

    options.onChange = (event: any, checked: boolean) => {
        if (!props.readOnly) {
            setValue(event.target.checked);
            if (props.onChange)
                props.onChange(event.target.checked);
        }
    }
    options.onBlur = refreshError;

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <Switch checked={isOn} onClick={toggleStatus} value={getOptionValue()} label={getLabel()} defaultValue={props.defaultValue}
                disabled={props.readOnly} error={error.message} ref={(i) => { inputRef.current = i; }}
                {...options}
            />
        </FieldDecorator>}
    </>
    );
});

export { MantineSwitch };