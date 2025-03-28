import { AutocompleteProps } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FieldDecorator, getFieldHandler, IFormFieldError, IServerLookupField, useServerLookupFieldManager } from '@palmyralabs/rt-forms';
import { delayGenerator } from "@palmyralabs/ts-utils";
import { forwardRef, MutableRefObject, useImperativeHandle, useRef, useState } from "react";
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

    const [iconClick, setIconClick] = useState<any>(false)
    const [dropdownOpened, { open, close }] = useDisclosure(false);

    const value = getValue();
    const label = value ? getOptionValue(value) : '';

    const handleToggleDropdown = () => {
        setIconClick(true);
        if (!dropdownOpened) {
            open();
            delay(refreshOptions)
        } else close()
    };

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
            close();
        },
        onChange: (label: string) => {
            delay(setSearchText, label);
            props.onChange && props.onChange(label)
        },
        onDropdownOpen: () => {
            if (!iconClick) {
                open()
            }
            setIconClick(false);
            delay(refreshOptions)
        },
        onDropdownClose: () => {
            if (!iconClick) {
                close()
            }
            setIconClick(false);
        },
        onBlur: (e: any) => {
            refreshError();
            if (props.onBlur) {
                props.onBlur(e);
                refreshError
            }
        }
    }

    const handleClearValue = () => {
        setValue(null);
        props.onChange && props.onChange('', null);
    };

    const readOnly = props.readOnly;
    const disabled = props.disabled;

    const rightSectionIcon = value && !readOnly && !disabled ? <RxCross2 onClick={handleClearValue} style={{ cursor: 'pointer' }} /> :
        <IoMdArrowDropdown onClick={handleToggleDropdown} style={{ cursor: 'pointer' }} />

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
            dropdownOpened={dropdownOpened}
            label={props.label}
            error={error.message}
            {...callbacks}>
        </ServerLookup>
    </FieldDecorator>
    </>
});

export { MantineServerLookup };

