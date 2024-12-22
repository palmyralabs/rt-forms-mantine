import { AutocompleteProps } from "@mantine/core";
import { FieldDecorator, getFieldHandler, IFormFieldError, IServerLookupField, useServerLookupFieldManager } from '@palmyralabs/rt-forms';
import { delayGenerator } from "@palmyralabs/ts-utils";
import { forwardRef, MutableRefObject, useImperativeHandle, useRef } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { ServerLookup } from "./internal/ServerLookup";
import { IServerLookupDefinition } from "./types";
import { getFieldLabel } from "./util";

const MantineServerLookup = forwardRef(function MantineServerLookup(props: IServerLookupDefinition & Omit<AutocompleteProps, 'defaultValue'>,
    ref: MutableRefObject<IServerLookupField>) {

    const delay = delayGenerator(props.queryOptions.delay || 200);
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
            props.onChange && props.onChange(label, d)
        },
        onChange: (label: string) => {
            delay(setSearchText, label);
            props.onChange && props.onChange(label)
        },
        onDropdownOpen: () => {
            delay(refreshOptions)
        },
        onDropdownClose: () => {
        },
        onBlur: () => {
            refreshError();
        }
    }
    const handleClearValue = () => {
        setValue(null);
        props.onChange && props.onChange('', null);
    };

    const rightSectionIcon = value ? <RxCross2 onClick={handleClearValue} style={{ cursor: 'pointer' }} /> :
        <IoMdArrowDropdown />
    return <><FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
        customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
        <ServerLookup
            readOnly={props.readOnly}
            rightSection={rightSectionIcon}
            {...getFieldProps()}
            value={label}
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
