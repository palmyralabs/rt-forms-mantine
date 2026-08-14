import { ColumnDefinition } from '@palmyralabs/rt-forms';
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
export declare const getColumnId: (col: ColumnDefinition) => string;
/**
 * Manages the show/hide state for a grid's columns, to be paired with <ColumnChooserButton>.
 *
 *   const { columnVisibility, columnChooserProps } = useColumnChooser(columns);
 *   ...
 *   <ColumnChooserButton {...columnChooserProps} />
 *   <GridX columns={columns} tableOptions={{ state: { columnVisibility } }} ... />
 */
export declare const useColumnChooser: (columns: ColumnDefinition[], options?: UseColumnChooserOptions) => ColumnChooserApi;
