import { Button, ComboboxItem, Group, Modal, MultiSelect, Paper, Popover, Select, SelectProps, Text } from '@mantine/core';
import { FieldDecorator, getFieldHandler, IFormFieldError, ISelectField, StoreFactoryContext, useFieldManager } from '@palmyralabs/rt-forms';
import { delayGenerator } from '@palmyralabs/ts-utils';
import { ReactNode, Ref, useContext, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { ILookupSelectDefinition } from './types';
import { getFieldLabel } from './util';

interface ILookupOption {
    value: string;
    label: string;
}

interface IAddFormParams {
    searchText: string;
    data: Record<string, any>;
    setData: (next: Record<string, any>) => void;
}

interface ISmartLookupProps {
    renderAddForm?: (params: IAddFormParams) => ReactNode;
    allowAdd?: boolean | ((searchText: string) => boolean);
    multiple?: boolean;
    display?: 'inline' | 'popover' | 'modal';
    addLabel?: (searchText: string) => string;
    addTitle?: string | ((searchText: string) => string);
    createEndPoint?: string;
    getCreatePayload?: (data: any, searchText: string) => any;
    getCreatedRecord?: (response: any, data: any) => any;
    createLabel?: string;
    cancelLabel?: string;
    onSaveSuccess?: (record: any) => void;
    onSaveFailure?: (error: any) => void;
    onCreateSuccess?: (record: any) => void;
    onCreateError?: (error: any) => void;
}

const dedupe = (arr: ILookupOption[]): ILookupOption[] => {
    const seen = new Set<string>();
    return arr.filter((o) => {
        if (seen.has(o.value)) return false;
        seen.add(o.value);
        return true;
    });
};

function SmartLookup(props: ILookupSelectDefinition & ISmartLookupProps & Omit<SelectProps, 'ref' | 'data' | 'onChange'> & { ref?: Ref<ISelectField>, onChange?: (value: any, record?: any) => void }) {
    const idAttribute = props.idAttribute || 'id';
    const labelAttribute = props.labelAttribute || 'name';
    const queryAttribute = props.queryAttribute || labelAttribute;
    const pageSize = props.fetchLimit != null ? props.fetchLimit : 15;
    const isMulti = !!props.multiple;
    const display = props.display || 'inline';

    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions, refreshError } = fieldManager;
    const error: IFormFieldError = getError();
    const inputRef: any = useRef(null);
    const variant = props.variant || 'default';

    const storeFactory: any = useContext(StoreFactoryContext);
    const [options, setOptions] = useState<ILookupOption[]>([]);
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [addOpen, setAddOpen] = useState(false);
    const [formData, setFormData] = useState<Record<string, any>>({});
    const [creating, setCreating] = useState(false);

    const recordMapRef = useRef<Record<string, any>>({});
    const offsetRef = useRef(0);
    const hasMoreRef = useRef(true);
    const loadingRef = useRef(false);
    const searchRef = useRef('');
    const openedRef = useRef(false);
    const delay = useMemo(() => delayGenerator(300), []);

    const rawValue = getValue();
    const selectedValues: string[] = isMulti
        ? (Array.isArray(rawValue) ? rawValue.map((x: any) => String(x)) : (rawValue != null && rawValue !== '' ? [String(rawValue)] : []))
        : [];
    const singleValue: string | null = !isMulti ? (rawValue != null && rawValue !== '' ? String(rawValue) : null) : null;
    const hasValue = isMulti ? selectedValues.length > 0 : singleValue != null;

    const addEnabled = props.allowAdd !== false && !!props.renderAddForm;
    const canAddNow = addEnabled && (typeof props.allowAdd === 'function' ? props.allowAdd(searchText) : true);

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

    const idsKey = isMulti ? selectedValues.join(',') : (singleValue || '');
    useEffect(() => {
        const ids = isMulti ? selectedValues : (singleValue ? [singleValue] : []);
        const missing = ids.filter((id) => id && !recordMapRef.current[id]);
        if (!missing.length || !props.endPoint || !storeFactory?.getLookupStore) return;
        try {
            const store: any = storeFactory.getLookupStore({}, props.endPoint, labelAttribute);
            missing.forEach((id) => {
                store.query({ filter: { [idAttribute]: id }, limit: 1 })
                    .then((res: any) => {
                        const rows: any[] = Array.isArray(res) ? res : (res?.result || res?.data || res?.items || []);
                        if (rows.length > 0) {
                            const opt = toOption(rows[0]);
                            setOptions((prev) => dedupe([opt, ...prev]));
                        }
                    })
                    .catch(() => { });
            });
        } catch (e) { }
    }, [idsKey]);

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
        setSearchText(text || '');
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

    const onSingleChange = (val: string | null, _option: ComboboxItem) => {
        if (props.readOnly) return;
        setValue(val || null);
        const record = val != null ? recordMapRef.current[String(val)] : null;
        if (props.onChange) props.onChange(val, record);
    };

    const onMultiChange = (vals: string[]) => {
        if (props.readOnly) return;
        setValue(vals);
        const records = vals.map((v) => recordMapRef.current[v]).filter(Boolean);
        if (props.onChange) props.onChange(vals, records);
    };

    const onBlur = (event: any) => {
        refreshError();
        if (props.onBlur) props.onBlur(event);
    };

    const openAdd = () => {
        setFormData({ [labelAttribute]: searchText });
        setAddOpen(true);
    };

    const closeAdd = () => {
        setAddOpen(false);
        setCreating(false);
        setFormData({});
    };

    const applyCreated = (record: any) => {
        const opt = toOption(record);
        setOptions((prev) => dedupe([opt, ...prev]));
        const id = String(record[idAttribute]);
        if (isMulti) {
            const next = Array.from(new Set([...selectedValues, id]));
            setValue(next);
            if (props.onChange) props.onChange(next, next.map((v) => recordMapRef.current[v]).filter(Boolean));
        } else {
            setValue(record[idAttribute]);
            if (props.onChange) props.onChange(id, record);
        }
        if (props.onCreateSuccess) props.onCreateSuccess(record);
        if (props.onSaveSuccess) props.onSaveSuccess(record);
        closeAdd();
    };

    const onCreate = () => {
        const createEndPoint = props.createEndPoint || props.endPoint;
        if (!createEndPoint || !storeFactory?.getFormStore) return;
        const payload = props.getCreatePayload ? props.getCreatePayload(formData, searchText) : formData;
        setCreating(true);
        try {
            const store: any = storeFactory.getFormStore({}, createEndPoint, idAttribute);
            Promise.resolve(store.post(payload))
                .then((res: any) => {
                    let record: any;
                    if (props.getCreatedRecord) {
                        record = props.getCreatedRecord(res, payload);
                    } else {
                        const created = res && typeof res === 'object' ? (res.result || res.data || res) : { [idAttribute]: res };
                        record = { ...payload, ...created };
                    }
                    applyCreated(record);
                })
                .catch((e: any) => {
                    setCreating(false);
                    if (props.onCreateError) props.onCreateError(e);
                    if (props.onSaveFailure) props.onSaveFailure(e);
                });
        } catch (e) {
            setCreating(false);
            if (props.onCreateError) props.onCreateError(e);
            if (props.onSaveFailure) props.onSaveFailure(e);
        }
    };

    const clearable = !!props.clearable && hasValue && !props.readOnly && !props.disabled;

    const renderOption = props.renderOption
        ? (input: any) => props.renderOption!(recordMapRef.current[input.option.value], input.option)
        : undefined;

    const nothingFound = canAddNow && searchText
        ? (
            <Button variant="light" size="xs" fullWidth leftSection={<FiPlus size={14} />}
                onClick={openAdd}>
                {props.addLabel ? props.addLabel(searchText) : `Add "${searchText}"`}
            </Button>
        )
        : (props.nothingFoundMessage || "No options found");

    const title = typeof props.addTitle === 'function' ? props.addTitle(searchText) : (props.addTitle || 'Create new');

    const commonProps: any = {
        ref: inputRef,
        data: options,
        onBlur,
        onSearchChange,
        onDropdownOpen,
        onDropdownClose,
        filter: ({ options: o }: any) => o,
        placeholder: loading ? 'Loading...' : props.placeholder,
        label: props.label,
        searchable: props.searchable,
        clearable,
        disabled: props.disabled,
        readOnly: props.readOnly,
        variant,
        error: error.message,
        renderOption,
        nothingFoundMessage: nothingFound
    };

    const selectEl = isMulti
        ? <MultiSelect {...commonProps} value={selectedValues} onChange={onMultiChange} />
        : <Select {...commonProps} value={singleValue} onChange={onSingleChange as any} />;

    const formInner = (
        <>
            {props.renderAddForm && props.renderAddForm({ searchText, data: formData, setData: setFormData })}
            <Group justify="flex-end" gap="xs" mt="sm">
                <Button variant="default" size="xs" onClick={closeAdd}>{props.cancelLabel || 'Cancel'}</Button>
                <Button size="xs" loading={creating} onClick={onCreate}>{props.createLabel || 'Create'}</Button>
            </Group>
        </>
    );

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>

            {display === 'popover' && addEnabled ? (
                <Popover opened={addOpen} onClose={closeAdd} position="bottom-start" width="target"
                    withinPortal shadow="md" trapFocus>
                    <Popover.Target><div>{selectEl}</div></Popover.Target>
                    <Popover.Dropdown>
                        <Text size="sm" fw={600} mb="xs">{title}</Text>
                        {formInner}
                    </Popover.Dropdown>
                </Popover>
            ) : selectEl}

            {display === 'inline' && addEnabled && addOpen && (
                <Paper withBorder radius="sm" p="sm" mt={6} shadow="xs" className="py-smartlookup-addform">
                    <Text size="sm" fw={600} mb="xs">{title}</Text>
                    {formInner}
                </Paper>
            )}

            {display === 'modal' && addEnabled && (
                <Modal opened={addOpen} onClose={closeAdd} title={title} centered>
                    {formInner}
                </Modal>
            )}
        </FieldDecorator>}
    </>);
}

export { SmartLookup };
export type { ISmartLookupProps, IAddFormParams };
