import { AutocompleteProps } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FieldDecorator, getFieldHandler, IFormFieldError, IServerLookupField, StoreFactoryContext, useServerLookupFieldManager } from '@palmyralabs/rt-forms';
import { delayGenerator } from "@palmyralabs/ts-utils";
import { Ref, useContext, useEffect, useImperativeHandle, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { ServerLookup } from "./internal/ServerLookup";
import { IServerLookupDefinition } from "./types";
import { getFieldLabel } from "./util";

function MantineServerLookup(props: IServerLookupDefinition & Omit<AutocompleteProps, 'defaultValue' | 'ref'> & { ref?: Ref<IServerLookupField> }) {
    const delay = delayGenerator(props.queryOptions.delay || 200);
    const inputRef: any = useRef(null);
    const fieldManager = useServerLookupFieldManager(props.attribute, props);
    const { getError, getValue, setValue, options, getFieldProps, setSearchText,
        refreshOptions, getOptionValue, getOptionKey, refreshError } = fieldManager;
    const error: IFormFieldError = getError();

    const [iconClick, setIconClick] = useState<any>(false)
    const [dropdownOpened, { open, close }] = useDisclosure(false);

    const value = getValue();
    const label = value ? getOptionValue(value) : '';

    const storeFactory: any = useContext(StoreFactoryContext);
    const resolvedIdRef = useRef<any>(undefined);
    useEffect(() => {
        if (value == null || value === '') return;
        if (typeof value === 'object') return;           
        if (resolvedIdRef.current === value) return;     
        resolvedIdRef.current = value;
        try {
            const idAttr = (props.lookupOptions as any)?.idAttribute || 'id';
            const store: any = storeFactory?.getLookupStore?.({}, props.queryOptions.endPoint, idAttr);
            if (!store?.query) return;
            store.query({ filter: { [idAttr]: value } })
                .then((res: any) => {
                    const rec = res?.result?.[0];
                    if (rec && typeof rec === 'object') setValue(rec);
                })
                .catch(() => { });
        } catch (e) {
           console.error('Error resolving lookup value', e);
        }
    }, [value]);

    const handleToggleDropdown = () => {
        setIconClick(true);
        if (!dropdownOpened) {
            open();
            delay(refreshOptions)
        } else close()
    };

    useImperativeHandle(props.ref, () => {
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
        setSearchText?.('');
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
            noOptionsLabel={props.noOptionsLabel}
            data={options}
            dropdownOpened={dropdownOpened}
            label={props.label}
            error={error.message}
            {...callbacks}>
        </ServerLookup>
    </FieldDecorator>
    </>
}

export { MantineServerLookup };
