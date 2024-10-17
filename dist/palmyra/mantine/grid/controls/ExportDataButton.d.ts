import { EXPORT_FORMAT } from '@palmyralabs/palmyra-wire';
import { DataGridPluginOptions } from '@palmyralabs/rt-forms';
import { IPluginBtnControl } from './types';
interface IExportDataOptions extends Pick<DataGridPluginOptions, 'queryRef'>, IPluginBtnControl {
    exportOption: Partial<Record<EXPORT_FORMAT, string>>;
}
declare const ExportDataButton: (props: IExportDataOptions) => import("react/jsx-runtime").JSX.Element;
export { ExportDataButton };
export type { IExportDataOptions };
