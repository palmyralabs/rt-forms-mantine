import { useRef, useState } from 'react';
import { EditableCell } from './EditableCell';

interface ICellEditParams {
    id: any;
    attribute: string;
    value: any;
    oldValue: any;
    row: any;
}

type CellEditorType = 'text' | 'number' | 'amount' | 'date' | 'select' | 'radio' | 'lookup';

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
}

interface IGridInlineEditInput {
    editable?: boolean;
    editableColumns?: string[];
    editors?: Record<string, ICellEditorConfig>;
    idKey: string;
    onCellEdit?: (params: ICellEditParams) => void;
    isCellEditable?: (row: any, attribute: string) => boolean;
    getEditorType?: (attribute: string) => 'text' | 'number';
}

const getByPath = (obj: any, path: string): any => {
    if (obj == null) return undefined;
    if (path.indexOf('.') < 0) return obj[path];
    return path.split('.').reduce((o: any, k: string) => (o == null ? undefined : o[k]), obj);
};

const useGridInlineEdit = (opts: IGridInlineEditInput) => {
    const { editable, editableColumns, editors, idKey, onCellEdit, isCellEditable, getEditorType } = opts;
    const enabled = !!editable;

    const [edits, setEdits] = useState<Record<string, Record<string, any>>>({});
    const lookupLabelRef = useRef<Record<string, string>>({});

    const editableSet = editableColumns || (editors ? Object.keys(editors) : undefined);
    const isColumnEditable = (attribute: string) =>
        enabled && (!editableSet || editableSet.includes(attribute));

    const getEditedValue = (row: any, attribute: string) => {
        const id = String(row.original[idKey]);
        return edits[id] && attribute in edits[id] ? edits[id][attribute] : getByPath(row.original, attribute);
    };

    const updateData = (row: any, attribute: string, value: any) => {
        const id = String(row.original[idKey]);
        const oldValue = edits[id] && attribute in edits[id] ? edits[id][attribute] : getByPath(row.original, attribute);
        setEdits((prev) => ({ ...prev, [id]: { ...prev[id], [attribute]: value } }));
        if (onCellEdit) onCellEdit({ id: row.original[idKey], attribute, value, oldValue, row: row.original });
    };

    const getEditedRows = () => Object.entries(edits).map(([id, changes]) => ({ id, changes }));

    const clear = () => setEdits({});

    const getTableOptions = () => ({
        meta: {
            updateData, getEditedValue, getEditorType, isCellEditable,
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

    return { enabled, getTableOptions, preProcessColumns, edits, getEditedRows, clear };
};

export { useGridInlineEdit };
export type { IGridInlineEditInput, ICellEditParams, ICellEditorConfig, CellEditorType };
