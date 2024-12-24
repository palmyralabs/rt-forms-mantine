import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { getFieldHandler, IFormFieldError, ISelectField, useFieldManager, FieldDecorator } from '@palmyralabs/rt-forms';
import { getFieldLabel } from './util';
import { ISelectDefinition } from './types';
import { MultiSelect, MultiSelectProps } from '@mantine/core';

const MantineMultiSelect = forwardRef(function MantineMultiSelect(props: ISelectDefinition & MultiSelectProps, ref: MutableRefObject<ISelectField>) {
    
    const parse = (rawData: any) => {
        if (rawData)
            return rawData;
        return [];
    };
    const format = (v: any) => {
        return v;
    };
    
    const fieldManager = useFieldManager(props.attribute, props, {format, parse});
    const { getError, getValue, setValue, mutateOptions, refreshError } = fieldManager;
    const currentRef = ref ? ref : useRef<ISelectField>(null);
    const error: IFormFieldError = getError();
    const inputRef: any = useRef(null);
    const variant = props.variant || 'default';

    useImperativeHandle(currentRef, () => {
        const handler = getFieldHandler(fieldManager);
        return {
            ...handler,
            focus() {
                if (inputRef)
                    inputRef.current.focus();
            },
            setOptions(d: any) {
            },
            getOptions() {
            }
        };
    }, [fieldManager]);

    var options = fieldManager.getFieldProps();

    if (props.readOnly) {
        options.inputProps = { readOnly: true };
    }

    options.onChange = (e: any) => {
        if (!props.readOnly) {
            setValue(e);
            if (props.onChange)
                props.onChange(e);
        }
    }
    options.onBlur = (event: any) => {
        refreshError;
        if (props.onBlur) {
            props.onBlur(event);
            refreshError
        }
    }
    
    const sData = Object.keys(options.options).map((key, index) => {
        var sOptions = {
            label: options.options[key],
            value: key
        }
        return sOptions;
    })

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <MultiSelect
                defaultValue={props?.defaultValue}
                data={sData}
                value={getValue()}
                {...options}
                variant={variant}
                error={error.message}
            />
        </FieldDecorator>}
    </>
    );
});

export { MantineMultiSelect };