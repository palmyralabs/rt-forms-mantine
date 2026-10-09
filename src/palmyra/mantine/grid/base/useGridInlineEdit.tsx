import { useRef, useState } from 'react';
import { EditableCell } from './EditableCell';

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

type CellEditorType = 'text' | 'number' | 'amount' | 'date' | 'select' | 'radio' | 'lookup' | 'custom';

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
}

interface IGridInlineEditInput {
    editable?: boolean;
    editableColumns?: string[];
    editors?: Record<string, ICellEditorConfig>;
    idKey: string;
    onCellEdit?: (params: ICellEditParams) => void;
    isCellEditable?: (row: any, attribute: string) => boolean;
    getEditorType?: (attribute: string) => 'text' | 'number';
    save?: (params: ICellSaveParams) => Promise<any>;
    updateRowOnSave?: boolean;
    onSaveSuccess?: (params: ICellSaveParams & { response: any }) => void;
    onSaveError?: (params: ICellSaveParams & { error: any }) => void;
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
        save, updateRowOnSave = true, onSaveSuccess, onSaveError
    } = opts;
    const enabled = !!editable;

    const [edits, setEdits] = useState<Record<string, Record<string, any>>>({});
    const [saving, setSaving] = useState<Record<string, Record<string, boolean>>>({});
    const [errors, setErrors] = useState<Record<string, Record<string, string>>>({});
    const lookupLabelRef = useRef<Record<string, string>>({});

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

    const removeEdit = (id: string, attribute: string) => {
        setEdits((prev) => {
            if (!prev[id]) return prev;
            const row = { ...prev[id] };
            delete row[attribute];
            return { ...prev, [id]: row };
        });
    };

    const updateData = (row: any, attribute: string, value: any) => {
        const id = String(row.original[idKey]);
        const oldValue = edits[id] && attribute in edits[id] ? edits[id][attribute] : getByPath(row.original, attribute);
        setEdits((prev) => ({ ...prev, [id]: { ...prev[id], [attribute]: value } }));
        const params: ICellSaveParams = { id: row.original[idKey], attribute, value, oldValue, row: row.original, changes: { [attribute]: value } };
        if (onCellEdit) onCellEdit(params);

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
        if (errors[id]?.[attribute]) return 'error';
        return undefined;
    };

    const getEditedRows = () => Object.entries(edits)
        .filter(([, changes]) => Object.keys(changes).length > 0)
        .map(([id, changes]) => ({ id, changes }));

    const clear = () => { setEdits({}); setErrors({}); };

    const getTableOptions = () => ({
        meta: {
            updateData, getEditedValue, getEditorType, isCellEditable, getCellStatus,
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

    return { enabled, getTableOptions, preProcessColumns, edits, errors, getEditedRows, clear };
};

export { useGridInlineEdit, getByPath, setByPath };
export type { IGridInlineEditInput, ICellEditParams, ICellSaveParams, ICellEditorConfig, ICellEditorRenderParams, CellEditorType };
