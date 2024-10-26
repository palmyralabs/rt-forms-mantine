import { forwardRef, MutableRefObject, useImperativeHandle, useRef } from "react";
import { IServerAutoCompleteDefinition } from "./types";
import { getFieldHandler, IFormFieldError, IServerLookupField, FieldDecorator, useServerAutoComplete } from '@palmyralabs/rt-forms';
import { getFieldLabel } from "./util";
import { AutocompleteProps } from "@mantine/core";
import { delayGenerator } from "@palmyralabs/ts-utils";
import { IoMdArrowDropdown } from "react-icons/io";
import { MantineAutoComplete } from "./internal/MantineAutoComplete";



const MantineServerAutoComplete = forwardRef(function MantineServerLookup
    (props: IServerAutoCompleteDefinition & AutocompleteProps & { onChange?: (value: string, data?: any) => void; },
        ref: MutableRefObject<IServerLookupField>) {
    const delay = delayGenerator(props.queryOptions.delay || 250);
    const inputRef: any = useRef(null);
    const fieldManager = useServerAutoComplete(props.attribute, props);
    const { getError, getValue, setValue, options, getFieldProps, setSearchText,
        refreshOptions, getOptionValue } = fieldManager;
    const error: IFormFieldError = getError();
    const currentRef = ref ? ref : useRef<IServerLookupField>(null);

    const value = getValue();
    const label = value ? value : '';

    useImperativeHandle(currentRef, () => {
        const handler = getFieldHandler(fieldManager)
        return {
            ...handler,
            focus() {
                inputRef.current.focus();
            }
        };
    }, [fieldManager]);

    const callbacks = {
        onValueChange: (d: any, label: string) => {
            setValue(label);
            props.onChange && props.onChange(label, d)
        },
        onChange: (label: string) => {
            delay(setSearchText, label);
            setValue(label);
            props.onChange && props.onChange(label)
        },
        onDropdownOpen: () => {
            delay(refreshOptions)
        },
        onDropdownClose: () => {
        }
    }


    return <><FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
        customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
        <MantineAutoComplete
            readOnly={props.readOnly}
            {...getFieldProps()}
            value={label}
            rightSection={<IoMdArrowDropdown />}
            data={options}
            getOptionValue={getOptionValue}
            label={props.label}
            error={error.message}
            {...callbacks}>
        </MantineAutoComplete>
    </FieldDecorator>
    </>
});

export { MantineServerAutoComplete };