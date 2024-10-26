import { forwardRef, MutableRefObject, useImperativeHandle, useRef } from "react";
import { IServerLookupDefinition } from "./types";
import { getFieldHandler, IFormFieldError, IServerLookupField, useServerLookupFieldManager, FieldDecorator } from '@palmyralabs/rt-forms';
import { getFieldLabel } from "./util";
import { AutocompleteProps } from "@mantine/core";
import { delayGenerator } from "@palmyralabs/ts-utils";
import { ServerLookup } from "./internal/ServerLookup";
import { IoMdArrowDropdown } from "react-icons/io";

const delay100 = delayGenerator(100);

const MantineServerLookup = forwardRef(function MantineServerLookup(props: IServerLookupDefinition & Omit<AutocompleteProps, 'defaultValue'>,
    ref: MutableRefObject<IServerLookupField>) {

    const inputRef: any = useRef(null);
    const fieldManager = useServerLookupFieldManager(props.attribute, props);
    const { getError, getValue, setValue, options, getFieldProps, setSearchText,
        refreshOptions, getOptionValue, getOptionKey, refreshError } = fieldManager;
    const error: IFormFieldError = getError();
    const currentRef = ref ? ref : useRef<IServerLookupField>(null);

    const value = getValue();
    const label = value ? getOptionValue(value) : '';

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
            setValue(d);
            props.onChange && props.onChange(label)
        },
        onChange: (label: string) => {
            delay100(setSearchText, label);
            props.onChange && props.onChange(label)
        },
        onDropdownOpen: () => {
            delay100(refreshOptions)
        },
        onDropdownClose: () => {
        },
        onBlur: () => {
            refreshError();
        }
    }

    return <><FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
        customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
        <ServerLookup
            readOnly={props.readOnly}
            {...getFieldProps()}
            value={label}
            rightSection={<IoMdArrowDropdown />}
            getOptionKey={getOptionKey}
            getOptionValue={getOptionValue}
            data={options}
            label={props.label}
            error={error.message}
            {...callbacks}>
        </ServerLookup>
    </FieldDecorator>
    </>
});

export { MantineServerLookup };