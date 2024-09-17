import { forwardRef, MutableRefObject, useEffect, useImperativeHandle, useRef } from "react";
import { IServerLookupDefinition } from "./types";
import { getFieldHandler, IFormFieldError, IServerLookupField, useServerLookupFieldManager, FieldDecorator } from '@palmyralabs/rt-forms';
import { getFieldLabel } from "./util";
import { delayGenerator } from "@palmyralabs/ts-utils";
import { Autocomplete, AutocompleteProps } from "@mantine/core";

// const delay100 = delayGenerator(100);

const MantineServerLookup = forwardRef(function MantineServerLookup(props: IServerLookupDefinition & AutocompleteProps,
    ref: MutableRefObject<IServerLookupField>) {

    const inputRef: any = useRef(null);
    const fieldManager = useServerLookupFieldManager(props.attribute, props);
    const { getError, getValue, setValue, refreshOptions, options, getFieldProps } = fieldManager;
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

    // useEffect(() => {
    //     delay100(refreshOptions);
    // }, []);

    const callbacks = {
        onChange: (event: any) => {
            console.log("e", event)
            setValue(event);
            if (props.onChange)
                props.onChange(event);
        }
    }

    const sData = options.map((key, index) => {
        var sOptions = {
            label: '',
            value: ''
        }
        console.log("key", key, props.queryOptions.labelAttribute, key[props.queryOptions.labelAttribute], key[props.queryOptions.idAttribute])
        sOptions.label = key[props.queryOptions.labelAttribute] || key[props.lookupOptions.labelAttribute]
        sOptions.value = key[props.queryOptions.labelAttribute].toString() || key[props.lookupOptions.labelAttribute].toString()

        return sOptions;
    })

    var defaultData = {
        // label: options[props.defaultValue],
        value: props.defaultValue
    }

    // const optionsFilter: OptionsFilter = ({ options, search }) => {
    //     const splittedSearch = search.toLowerCase().trim().split(' ');
    //     return (options as ComboboxItem[]).filter((option) => {
    //         const words = option.label.toLowerCase().trim().split(' ');
    //         return splittedSearch.every((searchWord) => words.some((word) => word.includes(searchWord)));
    //     });
    // };

    var value;

    if (getValue() != '') {
        value = getValue()
    }
    else {
        value = ''
    }

    console.log("ss", sData, value, value[props.queryOptions.labelAttribute])

    return <><FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
        customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
        <Autocomplete
            readOnly={props.readOnly}
            renderOption={props.renderOption}
            {...getFieldProps()}
            value={value[props.queryOptions.labelAttribute]}
            // filter={optionsFilter}
            data={sData}
            defaultValue={props.defaultValue}
            error={error.message}
            {...callbacks}>
        </Autocomplete>
    </FieldDecorator>
    </>
});

export { MantineServerLookup };