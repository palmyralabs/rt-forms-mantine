import { IPluginBtnControl } from './types';
import { DataGridPluginOptions } from '@palmyralabs/rt-forms';
import { TextInput } from '@mantine/core';
interface IQuickSearchOptions extends Pick<DataGridPluginOptions, 'queryRef' | 'columns'>, IPluginBtnControl {
    width: string;
}
export type TextFieldVariants = 'outlined' | 'standard' | 'filled';
type TextFieldProps = React.ComponentProps<typeof TextInput>;
declare const QuickSearch: (options: IQuickSearchOptions & TextFieldProps) => import("react/jsx-runtime").JSX.Element;
export { QuickSearch };
