import { ColumnDefinition } from "@palmyralabs/rt-forms";
import { useMemo, useState } from "react";

/** tanstack columnVisibility map: columnId -> visible? (false = hidden) */
export type ColumnVisibility = Record<string, boolean>;

export interface UseColumnChooserOptions {
    /** column ids (name || attribute) that should start hidden */
    defaultHidden?: string[];
}

export interface ColumnChooserApi {
    /** feed this into the grid: tableOptions={{ state: { columnVisibility } }} */
    columnVisibility: ColumnVisibility;
    setColumnVisibility: (v: ColumnVisibility) => void;
    /** spread onto <ColumnChooserButton {...columnChooserProps} /> */
    columnChooserProps: {
        columns: ColumnDefinition[];
        visibility: ColumnVisibility;
        onVisibilityChange: (v: ColumnVisibility) => void;
    };
}

/** column id used by the grid = name || attribute (matches ColumnConverter.getColumnId) */
export const getColumnId = (col: ColumnDefinition): string =>
    (col as any).name ? (col as any).name : (col as any).attribute;

/**
 * Manages the show/hide state for a grid's columns, to be paired with <ColumnChooserButton>.
 *
 *   const { columnVisibility, columnChooserProps } = useColumnChooser(columns);
 *   ...
 *   <ColumnChooserButton {...columnChooserProps} />
 *   <GridX columns={columns} tableOptions={{ state: { columnVisibility } }} ... />
 */
export const useColumnChooser = (
    columns: ColumnDefinition[],
    options?: UseColumnChooserOptions
): ColumnChooserApi => {
    const initial = useMemo<ColumnVisibility>(() => {
        const v: ColumnVisibility = {};
        (options?.defaultHidden || []).forEach((id) => { v[id] = false; });
        return v;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [columnVisibility, setColumnVisibility] = useState<ColumnVisibility>(initial);

    return {
        columnVisibility,
        setColumnVisibility,
        columnChooserProps: {
            columns,
            visibility: columnVisibility,
            onVisibilityChange: setColumnVisibility,
        },
    };
};
