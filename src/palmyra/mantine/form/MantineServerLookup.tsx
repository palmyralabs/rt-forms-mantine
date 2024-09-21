import { forwardRef, MutableRefObject, useImperativeHandle, useRef } from "react";
import { IServerLookupDefinition } from "./types";
import { getFieldHandler, IFormFieldError, IServerLookupField, useServerLookupFieldManager, FieldDecorator } from '@palmyralabs/rt-forms';
import { getFieldLabel } from "./util";
import { Autocomplete, AutocompleteProps } from "@mantine/core";

const MantineServerLookup = forwardRef(function MantineServerLookup(props: IServerLookupDefinition & AutocompleteProps,
    ref: MutableRefObject<IServerLookupField>) {

    const inputRef: any = useRef(null);
    const fieldManager = useServerLookupFieldManager(props.attribute, props);
    const { getError, getValue, setValue, options, getFieldProps } = fieldManager;
    const error: IFormFieldError = getError();
    const currentRef = ref ? ref : useRef<IServerLookupField>(null);

    useImperativeHandle(currentRef, () => {
        const handler = getFieldHandler(fieldManager)
        return {
            ...handler,
            focus() {
                inputRef.current.focus();
            }
        };
    }, [fieldManager]);

    const sData = options.map((key, index) => {
        var sOptions = {
            label: key[props.queryOptions.labelAttribute] || key[props.lookupOptions.labelAttribute],
            value: key[props.queryOptions.idAttribute].toString() || key[props.lookupOptions.idAttribute].toString()
        }
        return sOptions;
    })

    const callbacks = {
        onChange: (event: any) => {
            const changeValue: any = sData.find(item => item.label === event) || null;
            setValue(parseInt(changeValue?.value));
            if (props.onChange)
                props.onChange(event);
        }
    }

    var value = getValue();

    if (typeof (getValue()) == 'object') {
        value = value?.[props.queryOptions.idAttribute] || value?.[props.lookupOptions.idAttribute]
    }
    const selectedValue = sData.find(item => item.value === value?.toString()) || null;

    
    return <><FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
        customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
        <Autocomplete
            readOnly={props.readOnly}
            renderOption={props.renderOption}
            {...getFieldProps()}
            value={selectedValue?.label}
            // filter={optionsFilter}
            data={sData}
            label={props.label}
            defaultValue={props.defaultValue}
            error={error.message}
            {...callbacks}>
        </Autocomplete>
    </FieldDecorator>
    </>
});

export { MantineServerLookup };