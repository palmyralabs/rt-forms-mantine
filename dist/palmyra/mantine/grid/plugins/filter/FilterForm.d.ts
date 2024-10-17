import { DataGridPluginOptions } from '@palmyralabs/rt-forms';
interface FilterOptions extends DataGridPluginOptions {
    onClose?: (filter: any) => void;
    column?: 1 | 2 | 3;
    defaultFilter?: Record<string, any>;
}
declare const FilterForm: (o: FilterOptions) => import("react/jsx-runtime").JSX.Element;
export { FilterForm };
