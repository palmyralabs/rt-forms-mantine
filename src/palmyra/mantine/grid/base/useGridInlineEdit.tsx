import { FieldOptions, generatePredicate, validate } from '@palmyralabs/rt-forms';
import { RefObject, useEffect, useRef, useState } from 'react';
import { EditableCell } from './EditableCell';

type IInlineValidationError = { id: string; attribute: string; message: string };
type IInlineEditedCell = { id: string; attribute: string; value: any; oldValue: any; row: any };
type IInlineEditsInfo = {
    edits: Record<string, Record<string, any>>;
    rows: { id: string; changes: Record<string, any> }[];
    cells: IInlineEditedCell[];
    canUndo: boolean;
    canRedo: boolean;
};

interface ICellEditParams {
    id: any;
    attribute: string;
    value: any;
    oldValue: any;
    row: any;
}

interface ICellSaveParams extends ICellEditParams {
    changes: Record<string, any>;
}

interface IGridEditRef {
    edits: Record<string, Record<string, any>>;
    getEditedRows: () => { id: string, changes: Record<string, any> }[];
    getErrors?: () => { id: string; attribute: string; message: string }[];
    isValid?: () => boolean;
    undo?: () => void;
    redo?: () => void;
    canUndo?: boolean;
    canRedo?: boolean;
    clear: () => void;
}

type CellEditorType = 'text' | 'number' | 'amount' | 'date' | 'select' | 'radio' | 'lookup' | 'custom'
    | 'checkbox' | 'switch' | 'multiselect' | 'textarea' | 'time' | 'autocomplete';

interface ICellEditorRenderParams {
    value: any;
    row: any;
    attribute: string;
    commit: (value: any, label?: string) => void;
    cancel: () => void;
}

interface ICellEditorConfig {
    type: CellEditorType;
    options?: Record<string, any> | { value: any, label: string }[];
    endPoint?: string;
    idAttribute?: string;
    labelAttribute?: string;
    queryAttribute?: string;
    displayAttribute?: string;
    fetchLimit?: number;
    valueFormat?: string;
    displayPattern?: string;
    serverPattern?: string;
    render?: (params: ICellEditorRenderParams) => any;
    renderDisplay?: (value: any, row: any) => any;
    validation?: FieldOptions;
}

interface IInlineEditEnable {
    editable?: boolean;
    editableColumns?: string[];
    isCellEditable?: (row: any, attribute: string) => boolean;
}

interface IInlineEditEditors {
    editors?: Record<string, ICellEditorConfig>;
    getEditorType?: (attribute: string) => 'text' | 'number';
}

interface IInlineEditSave {
    autoSave?: boolean;
    onCellSave?: (params: ICellSaveParams) => Promise<any>;
    updateRowOnSave?: boolean;
    onCellEdit?: (params: ICellEditParams) => void;
    onSaveSuccess?: (params: ICellSaveParams & { response: any }) => void;
    onSaveError?: (params: ICellSaveParams & { error: any }) => void;
    onValidityChange?: (errors: IInlineValidationError[]) => void;
    onEditsChange?: (info: IInlineEditsInfo) => void;
}

interface IGridInlineEditProps
    extends IInlineEditEnable, IInlineEditEditors, IInlineEditSave {
    editRef?: RefObject<IGridEditRef>;
}

interface IGridInlineEditInput extends IInlineEditEnable, IInlineEditEditors {
    idKey: string;
    onCellEdit?: (params: ICellEditParams) => void;
    save?: (params: ICellSaveParams) => Promise<any>;
    updateRowOnSave?: boolean;
    onSaveSuccess?: (params: ICellSaveParams & { response: any }) => void;
    onSaveError?: (params: ICellSaveParams & { error: any }) => void;
    onValidityChange?: (errors: IInlineValidationError[]) => void;
    onEditsChange?: (info: IInlineEditsInfo) => void;
}

const getByPath = (obj: any, path: string): any => {
    if (obj == null) return undefined;
    if (path.indexOf('.') < 0) return obj[path];
    return path.split('.').reduce((o: any, k: string) => (o == null ? undefined : o[k]), obj);
};

const setByPath = (obj: any, path: string, value: any) => {
    if (path.indexOf('.') < 0) { obj[path] = value; return; }
    const keys = path.split('.');
    const last = keys.pop() as string;
    const target = keys.reduce((o: any, k: string) => (o[k] = o[k] || {}), obj);
    target[last] = value;
};

const useGridInlineEdit = (opts: IGridInlineEditInput) => {
    const {
        editable, editableColumns, editors, idKey, onCellEdit, isCellEditable, getEditorType,
        save, updateRowOnSave = true, onSaveSuccess, onSaveError, onValidityChange
    } = opts;
    const enabled = !!editable;

    const [hist, setHist] = useState<{ stack: Record<string, Record<string, any>>[]; index: number }>({ stack: [{}], index: 0 });
    const edits = hist.stack[hist.index] || {};
    const canUndo = hist.index > 0;
    const canRedo = hist.index < hist.stack.length - 1;
    const [saving, setSaving] = useState<Record<string, Record<string, boolean>>>({});
    const [errors, setErrors] = useState<Record<string, Record<string, string>>>({});
    const [validationErrors, setValidationErrors] = useState<Record<string, Record<string, string>>>({});
    const lookupLabelRef = useRef<Record<string, string>>({});
    const rowRef = useRef<Record<string, any>>({});

    const pushEdits = (updater: (cur: Record<string, Record<string, any>>) => Record<string, Record<string, any>>) =>
        setHist((h) => {
            const cur = h.stack[h.index] || {};
            const next = updater(cur);
            const stack = [...h.stack.slice(0, h.index + 1), next];
            return { stack, index: stack.length - 1 };
        });
    const undo = () => setHist((h) => (h.index > 0 ? { ...h, index: h.index - 1 } : h));
    const redo = () => setHist((h) => (h.index < h.stack.length - 1 ? { ...h, index: h.index + 1 } : h));

    const validateCell = (attribute: string, value: any): string => {
        const fo: FieldOptions | undefined = editors?.[attribute]?.validation;
        if (!fo) return '';
        try {
            const validator = generatePredicate(fo);
            const err: any = validate(value, validator, fo);
            return err?.status ? (err.message || 'Invalid value') : '';
        } catch (e) {
            return '';
        }
    };

    const editableSet = editableColumns || (editors ? Object.keys(editors) : undefined);
    const isColumnEditable = (attribute: string) =>
        enabled && (!editableSet || editableSet.includes(attribute));

    const getEditedValue = (row: any, attribute: string) => {
        const id = String(row.original[idKey]);
        return edits[id] && attribute in edits[id] ? edits[id][attribute] : getByPath(row.original, attribute);
    };

    const setFlag = (setter: any, id: string, attribute: string, val: any) => {
        setter((prev: any) => {
            const next = { ...prev, [id]: { ...prev[id] } };
            if (val == null) delete next[id][attribute];
            else next[id][attribute] = val;
            return next;
        });
    };

    const removeEdit = (id: string, attribute: string) => setHist((h) => {
        const cur = h.stack[h.index] || {};
        if (!cur[id]) return h;
        const rowE = { ...cur[id] };
        delete rowE[attribute];
        const stack = [...h.stack];
        stack[h.index] = { ...cur, [id]: rowE };
        return { stack, index: h.index };
    });

    const updateData = (row: any, attribute: string, value: any) => {
        const id = String(row.original[idKey]);
        rowRef.current[id] = row.original;
        const oldValue = edits[id] && attribute in edits[id] ? edits[id][attribute] : getByPath(row.original, attribute);
        pushEdits((cur) => ({ ...cur, [id]: { ...cur[id], [attribute]: value } }));
        const params: ICellSaveParams = { id: row.original[idKey], attribute, value, oldValue, row: row.original, changes: { [attribute]: value } };
        if (onCellEdit) onCellEdit(params);

        const vmsg = validateCell(attribute, value);
        if (vmsg) return;

        if (!save) return;
        setFlag(setErrors, id, attribute, null);
        setFlag(setSaving, id, attribute, true);
        Promise.resolve()
            .then(() => save(params))
            .then((response: any) => {
                if (updateRowOnSave) {
                    setByPath(row.original, attribute, value);
                    removeEdit(id, attribute);
                }
                if (onSaveSuccess) onSaveSuccess({ ...params, response });
            })
            .catch((error: any) => {
                removeEdit(id, attribute);
                setFlag(setErrors, id, attribute, error?.message || 'Save failed');
                if (onSaveError) onSaveError({ ...params, error });
            })
            .finally(() => setFlag(setSaving, id, attribute, null));
    };

    const getCellStatus = (row: any, attribute: string): 'saving' | 'error' | undefined => {
        const id = String(row.original[idKey]);
        if (saving[id]?.[attribute]) return 'saving';
        if (errors[id]?.[attribute] || validationErrors[id]?.[attribute]) return 'error';
        return undefined;
    };

    const getCellError = (row: any, attribute: string): string | undefined => {
        const id = String(row.original[idKey]);
        return validationErrors[id]?.[attribute] || errors[id]?.[attribute] || undefined;
    };

    const getErrors = (): { id: string; attribute: string; message: string }[] => {
        const out: { id: string; attribute: string; message: string }[] = [];
        Object.keys(validationErrors).forEach((id) =>
            Object.keys(validationErrors[id] || {}).forEach((attribute) => {
                const message = validationErrors[id][attribute];
                if (message) out.push({ id, attribute, message });
            }));
        return out;
    };

    const isValid = (): boolean => getErrors().length === 0;

    useEffect(() => {
        if (onValidityChange) onValidityChange(getErrors());
    }, [validationErrors]);

    const isCellDirty = (row: any, attribute: string): boolean => {
        const id = String(row.original[idKey]);
        return !!(edits[id] && attribute in edits[id]);
    };

    const getEditedRows = () => Object.entries(edits)
        .filter(([, changes]) => Object.keys(changes).length > 0)
        .map(([id, changes]) => ({ id, changes }));

    const buildEditedCells = () => getEditedRows().flatMap((r) =>
        Object.keys(r.changes).map((attribute) => ({
            id: r.id,
            attribute,
            value: r.changes[attribute],
            oldValue: getByPath(rowRef.current[r.id], attribute),
            row: rowRef.current[r.id]
        })));

    const clear = () => { setHist({ stack: [{}], index: 0 }); setErrors({}); setValidationErrors({}); rowRef.current = {}; };

    useEffect(() => {
        const next: Record<string, Record<string, string>> = {};
        Object.keys(edits).forEach((id) => Object.keys(edits[id] || {}).forEach((attribute) => {
            const msg = validateCell(attribute, edits[id][attribute]);
            if (msg) { (next[id] = next[id] || {})[attribute] = msg; }
        }));
        setValidationErrors(next);
    }, [hist]);

    useEffect(() => {
        if (opts.onEditsChange) opts.onEditsChange({ edits, rows: getEditedRows(), cells: buildEditedCells(), canUndo, canRedo });
    }, [hist]);

    const getTableOptions = () => ({
        meta: {
            updateData, getEditedValue, getEditorType, isCellEditable, getCellStatus, getCellError, isCellDirty,
            getEditor: (attribute: string) => editors?.[attribute],
            getLookupLabel: (attribute: string, id: any) => lookupLabelRef.current[attribute + ':' + String(id)],
            setLookupLabel: (attribute: string, id: any, label: string) => {
                lookupLabelRef.current[attribute + ':' + String(id)] = label;
            }
        }
    });

    const preProcessColumns = (columnDefs: any[]) => {
        if (!enabled) return;
        columnDefs.forEach((col) => {
            const attribute = col?.meta?.attribute || col?.accessorKey || col?.id;
            if (!attribute || !isColumnEditable(attribute)) return;
            col.cell = (ctx: any) => <EditableCell ctx={ctx} attribute={attribute} />;
        });
    };

    return {
        enabled, getTableOptions, preProcessColumns, edits, errors, validationErrors,
        getErrors, isValid, getEditedRows, clear, undo, redo, canUndo, canRedo
    };
};

export { useGridInlineEdit, getByPath, setByPath };
export type {
    IGridInlineEditProps, IGridInlineEditInput, IGridEditRef,
    IInlineEditEnable, IInlineEditEditors, IInlineEditSave,
    ICellEditParams, ICellSaveParams, ICellEditorConfig, ICellEditorRenderParams, CellEditorType,
    IInlineValidationError, IInlineEditedCell, IInlineEditsInfo
};
