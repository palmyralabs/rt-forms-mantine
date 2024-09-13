interface IPluginBtnControl {
    visible?: boolean;
    disabled?: boolean;
}
interface IDataGridDefaultControlConfig {
    add?: IPluginBtnControl;
    export?: IPluginBtnControl;
    quickSearch?: IPluginBtnControl;
}
export type { IPluginBtnControl, IDataGridDefaultControlConfig };
