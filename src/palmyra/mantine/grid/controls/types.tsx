import { ReactNode } from "react";

interface IPluginBtnControl {
    visible?: boolean,
    disabled?: boolean
}

interface IColumnChooserControl extends IPluginBtnControl {
    title?: string,
    ungroupedLabel?: string,
    width?: string,
}

interface IBackOption {
    visible?: boolean,
    label?: string,
    onClick?: () => void,
}

interface IDataGridDefaultControlConfig {
    add?: IPluginBtnControl,
    export?: IPluginBtnControl,
    quickSearch?: IPluginBtnControl,
    columnChooser?: IColumnChooserControl,

    filterField?: ReactNode,
    customBtn?: ReactNode,
    aclCode?: string,
    addText?: string,
    onNewClick?: () => void,
    backOption?: boolean | IBackOption,
    filters?: Record<string, any>,
    setFilters?: (filters: any) => void,
    onClearFilters?: () => void,
}

export type { IPluginBtnControl, IColumnChooserControl, IBackOption, IDataGridDefaultControlConfig }