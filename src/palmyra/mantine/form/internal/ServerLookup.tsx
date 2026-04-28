import { Autocomplete, AutocompleteProps } from "@mantine/core";
import { useEffect, useState } from "react";

interface helper {
    onValueChange: (d: any, label: string) => void,
    getOptionKey: (d: any) => any,
    getOptionValue: (d: any) => any,
    noOptionsLabel?: string | ((input: string) => string);
}

const ServerLookup = (function MantineServerLookup(props: AutocompleteProps & helper) {

    const [displayValue, setDisplayValue] = useState<string>(props.value)
    const options = props.data || [];
    const { onValueChange, getOptionKey, getOptionValue, ...o } = props;
    useEffect(() => {
        setDisplayValue(props.value);
    }, [props.value]);

    const isEmpty = !options || options.length === 0;
    const noDataText =
        typeof props.noOptionsLabel === 'function'
            ? props.noOptionsLabel(displayValue)
            : props.noOptionsLabel || '--No options available--';


    const data = (isEmpty ? [{
        label: noDataText,
        value: '__empty__',
        inputValue: displayValue,
        disabled: props.renderOption ? false : true
    }] : options.map((option) => ({
        label: getOptionValue(option) + '',
        value: getOptionKey(option) + '',
        disabled: option?.disabled || false
    })));

    const callbacks = {
        onChange: (label: any) => {
            const d = options.find((v: any) => {
                return label == getOptionValue(v);
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

    return <Autocomplete
        {...o}
        filter={({ options }) => options}
        data={data}
        dropdownOpened={props.dropdownOpened}
        value={displayValue}
        {...callbacks}>
    </Autocomplete>
});

export { ServerLookup };