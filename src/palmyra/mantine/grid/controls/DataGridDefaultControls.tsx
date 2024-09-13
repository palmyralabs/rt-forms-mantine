import { QuickSearch } from "./QuickSearch"
import { FilterButton } from "./FilterButton"
import { NewButton } from "./ActionButton";
import { ExportDataButton } from "./ExportDataButton";
import { IDataGridDefaultControlConfig } from "./types";
import { DataGridPluginOptions } from "@palmyralabs/rt-forms";

const DataGridDefaultControls = (props: DataGridPluginOptions) => {

    const { getPluginOptions, ...o } = props;
    const pluginOptions: IDataGridDefaultControlConfig = getPluginOptions ? getPluginOptions() : {};

    return (<>
        {o.quickSearch && <QuickSearch width="200" queryRef={o.queryRef}
            columns={o.columns} {...pluginOptions.quickSearch} />}
        <FilterButton {...o} />
        <NewButton label="Add" topic={o.topic} {...pluginOptions.add} />
        <ExportDataButton exportOption={{ csv: 'CSV' }}
            visible={pluginOptions.export?.visible} disabled={pluginOptions.export?.disabled}
            queryRef={o.queryRef} {...pluginOptions.export} />
    </>);
}

export { DataGridDefaultControls }