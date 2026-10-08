import { Autocomplete, AutocompleteProps } from "@mantine/core";
import { useEffect, useState } from "react";

interface helper {
    onValueChange: (d: any, label: string) => void,
    getOptionKey: (d: any) => any,
    getOptionValue: (d: any) => any,
    getOptionLabel?: (d: any) => string,
    renderOption?: (d: any, option?: any) => any,
    noOptionsLabel?: string | ((input: string) => string);
}

const ServerLookup = (function MantineServerLookup(props: Omit<AutocompleteProps, 'renderOption'> & helper) {

    const [displayValue, setDisplayValue] = useState<string>(props.value)
    const options = props.data || [];
    const { onValueChange, getOptionKey, getOptionValue, getOptionLabel, renderOption, ...o } = props;
    useEffect(() => {
        setDisplayValue(props.value);
    }, [props.value]);

    const optLabel = (option: any) => getOptionLabel ? getOptionLabel(option) : (getOptionValue(option) + '');

    const isEmpty = !options || options.length === 0;
    const noDataText =
        typeof props.noOptionsLabel === 'function'
            ? props.noOptionsLabel(displayValue)
            : props.noOptionsLabel || '--No options available--';

    const recordMap: Record<string, any> = {};

    const data = (isEmpty ? [{
        label: noDataText,
        value: '__empty__',
        inputValue: displayValue,
        disabled: renderOption ? false : true
    }] : options.map((option) => {
        const value = getOptionKey(option) + '';
        recordMap[value] = option;
        return {
            label: optLabel(option),
            value,
            disabled: option?.disabled || false
        };
    }));

    const callbacks = {
        onChange: (label: any) => {
            const d = options.find((v: any) => {
                return label == optLabel(v);
            });
            setDisplayValue(label);
            if (d) {
                props.onValueChange(d, label);
            } else {
                if (props.onChange)
                    props.onChange(label);
            }
        }
    }

    const optionRenderer = renderOption
        ? (input: any) => recordMap[input.option.value] ? renderOption(recordMap[input.option.value], input.option) : input.option.label
        : undefined;

    return <Autocomplete
        {...o}
        filter={({ options }) => options}
        data={data}
        renderOption={optionRenderer}
        dropdownOpened={props.dropdownOpened}
        value={displayValue}
        {...callbacks}>
    </Autocomplete>
});

export { ServerLookup };