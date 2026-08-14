interface IPluginBtnControl {
    visible?: boolean;
    disabled?: boolean;
}
interface IColumnChooserControl extends IPluginBtnControl {
    title?: string;
    ungroupedLabel?: string;
    width?: string;
}
interface IDataGridDefaultControlConfig {
    add?: IPluginBtnControl;
    export?: IPluginBtnControl;
    quickSearch?: IPluginBtnControl;
    columnChooser?: IColumnChooserControl;
}
export type { IPluginBtnControl, IColumnChooserControl, IDataGridDefaultControlConfig };
