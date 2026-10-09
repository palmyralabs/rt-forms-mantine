import { Loader, NumberInput, Radio, Group, Select, TextInput } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { StoreFactoryContext } from '@palmyralabs/rt-forms';
import dayjs from 'dayjs';
import { useContext, useEffect, useRef, useState } from 'react';
import { formatAmount } from '../../FormatCurrency';

interface EditableCellProps {
    ctx: any;
    attribute: string;
}

const getByPath = (obj: any, path: string): any => {
    if (obj == null) return undefined;
    if (path.indexOf('.') < 0) return obj[path];
    return path.split('.').reduce((o: any, k: string) => (o == null ? undefined : o[k]), obj);
};

const normOptions = (options: any): { value: string, label: string }[] => {
    if (!options) return [];
    if (Array.isArray(options)) return options.map((o) => ({ value: String(o.value), label: String(o.label) }));
    return Object.entries(options).map(([value, label]) => ({ value: String(value), label: String(label) }));
};

const LookupEditor = ({ cfg, value, valueLabel, onCommit, onCancel }: any) => {
    const storeFactory: any = useContext(StoreFactoryContext);
    const idAttr = cfg.idAttribute || 'id';
    const labelAttr = cfg.labelAttribute || 'name';
    const queryAttr = cfg.queryAttribute || labelAttr;
    const [options, setOptions] = useState<{ value: string, label: string }[]>([]);

    const load = (text: string) => {
        const store: any = storeFactory?.getLookupStore?.({}, cfg.endPoint, labelAttr);
        if (!store?.query) return;
        const req: any = { offset: 0, limit: cfg.fetchLimit || 15 };
        if (text) req.filter = { [queryAttr]: '*' + text + '*' };
        store.query(req).then((res: any) => {
            const rows: any[] = Array.isArray(res) ? res : (res?.result || res?.data || []);
            setOptions(rows.map((r) => ({ value: String(r[idAttr]), label: String(r[labelAttr]) })));
        }).catch(() => { });
    };

    useEffect(() => { load(''); }, []);

    const current = value != null && value !== '' ? String(value) : null;
    const data = current && !options.some((o) => o.value === current)
        ? [{ value: current, label: String(valueLabel ?? value) }, ...options]
        : options;

    return (
        <Select size="xs" variant="unstyled" data={data} searchable
            value={current}
            onSearchChange={load}
            filter={({ options: o }: any) => o}
            onChange={(v) => {
                const opt = data.find((o) => o.value === v);
                onCommit(v, opt?.label);
            }}
            onBlur={onCancel}
            comboboxProps={{ withinPortal: true }}
            autoFocus />
    );
};

const EditableCell = ({ ctx, attribute }: EditableCellProps) => {
    const { row, table } = ctx;
    const meta: any = table.options.meta || {};
    const original = meta.getEditedValue ? meta.getEditedValue(row, attribute) : getByPath(row.original, attribute);
    const cellEditable = !meta.isCellEditable || meta.isCellEditable(row.original, attribute);
    const cfg = meta.getEditor ? meta.getEditor(attribute) : undefined;
    const type = cfg?.type || (meta.getEditorType ? meta.getEditorType(attribute) : 'text') || 'text';

    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState<any>(original);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => { if (!editing) setValue(original); }, [original, editing]);
    useEffect(() => { if (editing && (type === 'text' || type === 'number')) inputRef.current?.focus(); }, [editing]);

    const commit = (next: any) => {
        setEditing(false);
        if (next !== original) meta.updateData?.(row, attribute, next);
    };
    const cancel = () => { setValue(original); setEditing(false); };

    const display = () => {
        if (cfg?.renderDisplay) return cfg.renderDisplay(original, row.original);
        if (type === 'select' || type === 'radio') {
            const opt = normOptions(cfg?.options).find((o) => o.value === String(original));
            return opt ? opt.label : original;
        }
        if (type === 'amount') {
            if (original == null || original === '') return null;
            return '₹' + formatAmount(original, 2);
        }
        if (type === 'date') {
            if (!original) return null;
            return dayjs(original).format(cfg?.displayPattern || cfg?.valueFormat || 'DD-MM-YYYY');
        }
        if (type === 'lookup') {
            const cached = meta.getLookupLabel?.(attribute, original);
            if (cached) return cached;
            if (cfg?.displayAttribute && getByPath(row.original, cfg.displayAttribute)) return getByPath(row.original, cfg.displayAttribute);
            return original;
        }
        return original;
    };

    const status = meta.getCellStatus ? meta.getCellStatus(row, attribute) : undefined;

    if (!cellEditable) return <span>{display() ?? ''}</span>;

    if (!editing) {
        const d = display();
        const cls = 'py-grid-editable-cell' + (status === 'error' ? ' py-grid-cell-error' : '');
        return (
            <div className={cls} onClick={() => setEditing(true)}>
                <span>{d != null && d !== '' ? d : <span className="py-grid-editable-placeholder">—</span>}</span>
                {status === 'saving' && <Loader size={12} />}
            </div>
        );
    }

    if (cfg?.render) {
        const customCommit = (v: any, label?: string) => {
            if (label != null && meta.setLookupLabel) meta.setLookupLabel(attribute, v, label);
            commit(v);
        };
        return cfg.render({ value: original, row: row.original, attribute, commit: customCommit, cancel });
    }

    if (type === 'number' || type === 'amount') {
        const commitNumber = () => commit(value === '' || value == null ? null : Number(value));
        const currencyProps = type === 'amount'
            ? { prefix: '₹', thousandSeparator: ',', thousandsGroupStyle: 'lakh' as const, styles: { input: { textAlign: 'right' as const } } }
            : {};
        return (
            <NumberInput size="xs" variant="unstyled" value={value ?? ''} autoFocus {...currencyProps}
                onChange={(v) => setValue(v)}
                onBlur={commitNumber}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') commitNumber();
                    else if (e.key === 'Escape') cancel();
                }} />
        );
    }

    if (type === 'date') {
        return (
            <DatePickerInput size="xs" variant="unstyled" autoFocus
                valueFormat={cfg?.displayPattern || cfg?.valueFormat || 'DD-MM-YYYY'}
                value={original ? new Date(original) : null}
                onChange={(v: any) => {
                    const next = v ? dayjs(v).format(cfg?.serverPattern || 'YYYY-MM-DD') : null;
                    commit(next);
                }}
                popoverProps={{ withinPortal: true }} />
        );
    }

    if (type === 'select') {
        return (
            <Select size="xs" variant="unstyled" data={normOptions(cfg?.options)} searchable
                value={original != null ? String(original) : null}
                onChange={(v) => commit(v)}
                onBlur={cancel}
                comboboxProps={{ withinPortal: true }}
                autoFocus />
        );
    }

    if (type === 'radio') {
        return (
            <Radio.Group value={original != null ? String(original) : ''} onChange={(v) => commit(v)}>
                <Group gap="xs">
                    {normOptions(cfg?.options).map((o) => (
                        <Radio key={o.value} size="xs" value={o.value} label={o.label} />
                    ))}
                </Group>
            </Radio.Group>
        );
    }

    if (type === 'lookup') {
        return (
            <LookupEditor cfg={cfg} value={original} valueLabel={display()}
                onCommit={(id: any, label: string) => {
                    if (label != null) meta.setLookupLabel?.(attribute, id, label);
                    commit(id);
                }}
                onCancel={cancel} />
        );
    }

    return (
        <TextInput ref={inputRef} size="xs" variant="unstyled" value={value ?? ''}
            onChange={(e) => setValue(e.currentTarget.value)}
            onBlur={() => commit(value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter') commit(value);
                else if (e.key === 'Escape') cancel();
            }} />
    );
};

export { EditableCell };
