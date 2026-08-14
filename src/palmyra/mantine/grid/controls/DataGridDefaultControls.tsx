import { QuickSearch } from "./QuickSearch"
import { FilterButton } from "./FilterButton"
import { NewButton } from "./ActionButton";
import { ExportDataButton } from "./ExportDataButton";
import { ColumnChooserButton } from "./ColumnChooserButton";
import { IDataGridDefaultControlConfig } from "./types";
import { DataGridPluginOptions } from "@palmyralabs/rt-forms";

const DataGridDefaultControls = (props: DataGridPluginOptions) => {

    const { getPluginOptions, ...o } = props;
    const pluginOptions: IDataGridDefaultControlConfig = getPluginOptions ? getPluginOptions() : {};

    const columnChooser = pluginOptions.columnChooser || {};
    const showColumnChooser = columnChooser.visible !== false
        && Array.isArray(o.columns) && o.columns.length > 0;

    return (<>
        {o.quickSearch && <QuickSearch width="200" queryRef={o.queryRef}
            columns={o.columns} {...pluginOptions.quickSearch} />}
        <FilterButton {...o} />
        {showColumnChooser && <ColumnChooserButton columns={o.columns}
            tableRef={(o as any).tableRef}
            title={columnChooser.title} ungroupedLabel={columnChooser.ungroupedLabel}
            width={columnChooser.width} />}
        <NewButton label="Add" topic={o.topic} {...pluginOptions.add} />
        <ExportDataButton exportOption={{ csv: 'CSV' }}
            visible={pluginOptions.export?.visible} disabled={pluginOptions.export?.disabled}
            queryRef={o.queryRef} {...pluginOptions.export} />
    </>);
}

export { DataGridDefaultControls }