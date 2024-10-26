import { Autocomplete, AutocompleteProps } from "@mantine/core";
import { useEffect, useMemo, useState } from "react";

interface helper {
    onValueChange: (d: any, label: string) => void,
    getOptionValue: (d: any) => any
}

const EMPTY_ARRAY = [];

const MantineAutoComplete = (function MantineServerLookup(props: AutocompleteProps & helper) {

    const [displayValue, setDisplayValue] = useState<string>(props.value)
    const options = props.data || EMPTY_ARRAY;
    const { onValueChange, getOptionValue, ...o } = props;
    useEffect(() => {
        setDisplayValue(props.value);
    }, [props.value]);

    const data = useMemo(() => {
        const data = [];
        options.forEach((option, index) => {
            const v = getOptionValue(option);
            console.log(v, option)
            if (v != undefined)
                data.push(v + '');
        })
        return data;
    }, [options]);

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
        data={data}
        value={displayValue}
        {...callbacks}>
    </Autocomplete>
});

export { MantineAutoComplete };