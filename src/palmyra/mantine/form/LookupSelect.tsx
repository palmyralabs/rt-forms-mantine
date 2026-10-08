import { ComboboxItem, Select, SelectProps } from '@mantine/core';
import { FieldDecorator, getFieldHandler, IFormFieldError, ISelectField, StoreFactoryContext, useFieldManager } from '@palmyralabs/rt-forms';
import { delayGenerator } from '@palmyralabs/ts-utils';
import { Ref, useContext, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { ILookupSelectDefinition } from './types';
import { getFieldLabel } from './util';

interface ILookupOption {
    value: string;
    label: string;
}

const dedupe = (arr: ILookupOption[]): ILookupOption[] => {
    const seen = new Set<string>();
    return arr.filter((o) => {
        if (seen.has(o.value)) return false;
        seen.add(o.value);
        return true;
    });
};

function LookupSelect(props: ILookupSelectDefinition & Omit<SelectProps, 'ref' | 'data' | 'onChange'> & { ref?: Ref<ISelectField>, onChange?: (value: string | null, record?: any) => void }) {
    const idAttribute = props.idAttribute || 'id';
    const labelAttribute = props.labelAttribute || 'name';
    const queryAttribute = props.queryAttribute || labelAttribute;
    const pageSize = props.fetchLimit != null ? props.fetchLimit : 15;

    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions, refreshError } = fieldManager;
    const error: IFormFieldError = getError();
    const inputRef: any = useRef(null);
    const variant = props.variant || 'default';

    const storeFactory: any = useContext(StoreFactoryContext);
    const [options, setOptions] = useState<ILookupOption[]>([]);
    const [loading, setLoading] = useState(false);

    const recordMapRef = useRef<Record<string, any>>({});
    const offsetRef = useRef(0);
    const hasMoreRef = useRef(true);
    const loadingRef = useRef(false);
    const searchRef = useRef('');
    const openedRef = useRef(false);
    const delay = useMemo(() => delayGenerator(300), []);

    const toOption = (d: any): ILookupOption => {
        const value = String(d[idAttribute]);
        recordMapRef.current[value] = d;
        return { value, label: props.getOptionLabel ? props.getOptionLabel(d) : String(d[labelAttribute]) };
    };

    const load = (reset: boolean) => {
        if (!props.endPoint || !storeFactory?.getLookupStore) return;
        if (loadingRef.current) return;
        if (!reset && !hasMoreRef.current) return;

        const offset = reset ? 0 : offsetRef.current;
        loadingRef.current = true;
        setLoading(true);
        try {
            const store: any = storeFactory.getLookupStore({}, props.endPoint, labelAttribute);
            const req: any = { offset, limit: pageSize };
            if (searchRef.current) req.filter = { [queryAttribute]: '*' + searchRef.current + '*' };

            store.query(req)
                .then((res: any) => {
                    const rows: any[] = Array.isArray(res) ? res : (res?.result || res?.data || res?.items || []);
                    const opts = rows.map(toOption);
                    offsetRef.current = offset + rows.length;
                    hasMoreRef.current = rows.length === pageSize;
                    setOptions((prev) => reset ? opts : dedupe([...prev, ...opts]));
                })
                .catch(() => { if (reset) setOptions([]); })
                .finally(() => { loadingRef.current = false; setLoading(false); });
        } catch (e) {
            loadingRef.current = false;
            setLoading(false);
        }
    };

    useEffect(() => {
        searchRef.current = '';
        hasMoreRef.current = true;
        offsetRef.current = 0;
        setOptions([]);
    }, [props.endPoint]);

    const value = getValue();

    useEffect(() => {
        if (value == null || value === '') return;
        if (recordMapRef.current[String(value)]) return;
        if (!props.endPoint || !storeFactory?.getLookupStore) return;
        try {
            const store: any = storeFactory.getLookupStore({}, props.endPoint, labelAttribute);
            store.query({ filter: { [idAttribute]: value }, limit: 1 })
                .then((res: any) => {
                    const rows: any[] = Array.isArray(res) ? res : (res?.result || res?.data || res?.items || []);
                    if (rows.length > 0) {
                        const opt = toOption(rows[0]);
                        setOptions((prev) => dedupe([opt, ...prev]));
                    }
                })
                .catch(() => { });
        } catch (e) { }
    }, [value]);

    const onDropdownOpen = () => {
        openedRef.current = true;
        searchRef.current = '';
        hasMoreRef.current = true;
        offsetRef.current = 0;
        load(true);
    };

    const onDropdownClose = () => {
        openedRef.current = false;
    };

    const onSearchChange = (text: string) => {
        if (!openedRef.current) return;
        searchRef.current = text || '';
        hasMoreRef.current = true;
        delay(() => { if (openedRef.current) load(true); });
    };

    useImperativeHandle(props.ref, () => {
        const handler = getFieldHandler(fieldManager);
        return {
            ...handler,
            focus() {
                inputRef?.current?.focus();
            },
            setOptions(_d: any) { },
            getOptions() {
                return options;
            }
        };
    }, [fieldManager, options]);

    const onChange = (val: string | null, _option: ComboboxItem) => {
        if (props.readOnly) return;
        setValue(val || null);
        const record = val != null ? recordMapRef.current[String(val)] : null;
        if (props.onChange) props.onChange(val, record);
    };

    const onBlur = (event: any) => {
        refreshError();
        if (props.onBlur) props.onBlur(event);
    };

    const hasValue = value != null && value !== '';
    const clearable = !!props.clearable && hasValue && !props.readOnly && !props.disabled;

    const renderOption = props.renderOption
        ? (input: any) => props.renderOption!(recordMapRef.current[input.option.value], input.option)
        : undefined;

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <Select
                ref={inputRef}
                data={options}
                value={value != null && value !== '' ? String(value) : null}
                onChange={onChange as any}
                onBlur={onBlur}
                onSearchChange={onSearchChange}
                onDropdownOpen={onDropdownOpen}
                onDropdownClose={onDropdownClose}
                filter={({ options: o }: any) => o}
                placeholder={loading ? 'Loading...' : props.placeholder}
                label={props.label}
                searchable={props.searchable}
                clearable={clearable}
                disabled={props.disabled}
                readOnly={props.readOnly}
                variant={variant}
                error={error.message}
                renderOption={renderOption}
                nothingFoundMessage={props.nothingFoundMessage || "No options found"}
            />
        </FieldDecorator>}
    </>);
}

export { LookupSelect };
