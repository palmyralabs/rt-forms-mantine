import { ColumnDefinition } from '@palmyralabs/rt-forms';
import { RefObject } from 'react';
import { ColumnVisibility } from './useColumnChooser';
export interface ColumnChooserButtonProps {
    columns: ColumnDefinition[];
    visibility?: ColumnVisibility;
    onVisibilityChange?: (v: ColumnVisibility) => void;
    tableRef?: RefObject<any>;
    title?: string;
    ungroupedLabel?: string;
    width?: string;
    searchable?: boolean;
}
declare const ColumnChooserButton: (props: ColumnChooserButtonProps) => import("react/jsx-runtime").JSX.Element;
export { ColumnChooserButton };
