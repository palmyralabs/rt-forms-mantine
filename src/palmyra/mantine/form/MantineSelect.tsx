import { ComboboxItem, Select, SelectProps } from '@mantine/core';
import { FieldDecorator, getFieldHandler, IFormFieldError, ISelectField, ITextField, useFieldManager } from '@palmyralabs/rt-forms';
import { forwardRef, MutableRefObject, useImperativeHandle, useRef } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { ISelectDefinition } from './types';
import { getFieldLabel, keyToString } from './util';

const MantineSelect = forwardRef(function MantineSelect(props: ISelectDefinition & SelectProps, ref: MutableRefObject<ISelectField>) {
    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions, refreshError } = fieldManager;
    const currentRef = ref ? ref : useRef<ITextField>(null);
    const error: IFormFieldError = getError();
    const inputRef: any = useRef(null);
    const variant = props.variant || 'default';

    var value = getValue();

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
            if (option)
                setValue(option.value);
            else
                setValue(null);
            if (props.onChange)
                props.onChange(e, option);
        }
    }
    options.onBlur = refreshError;

    const sData = Object.keys(options.options).map((key, index) => {
        var sOptions = {
            label: options.options[key],
            value: keyToString(key)
        }
        return sOptions;
    })

    const rightSectionIcon = props.rightSection ? props.rightSection :
        <IoMdArrowDropdown />
    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <Select
                data={sData}
                value={keyToString(value)}
                {...options}
                variant={variant}
                error={error.message}
                rightSection={rightSectionIcon}
            />
        </FieldDecorator>}
    </>
    );
});

export { MantineSelect };
