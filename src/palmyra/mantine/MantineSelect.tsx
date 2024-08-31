import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { getFieldHandler, IFormFieldError, ISelectField, ITextField, useFieldManager, FieldDecorator } from '@palmyralabs/rt-forms';
import { getFieldLabel } from './util';
import { ISelectDefinition } from './types';
import { ComboboxItem, Select, SelectProps } from '@mantine/core';

const MantineSelect = forwardRef(function MantineSelect(props: ISelectDefinition & SelectProps, ref: MutableRefObject<ISelectField>) {
    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions } = fieldManager;
    const currentRef = ref ? ref : useRef<ITextField>(null);
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

    options.onChange = (e: any, option: ComboboxItem) => {
        if (!props.readOnly) {
            setValue(option.value);
            if (props.onChange)
                props.onChange(e.currentTarget.value, option);
        }
    }

    const sData = Object.keys(options.options).map((key, index) => {
        var sOptions = {
            label: '',
            value: ''
        }
        sOptions.label = options.options[key]
        sOptions.value = key

        return sOptions;

    })

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <Select
                // defaultValue={1}
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

export { MantineSelect };