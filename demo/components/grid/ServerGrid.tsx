import { ColumnDefinition, StoreFactoryContext } from "@palmyralabs/rt-forms";
import { PalmyraStoreFactory, StoreFactory } from "@palmyralabs/palmyra-wire";
import './ServerGrid.css'
import { DataGridDefaultControls, GridX, IDataGridDefaultControlConfig, PalmyraGrid } from "../../../src/palmyra/mantine/grid";

const columns: ColumnDefinition[] = [
    {
        attribute: 'code',
        label: 'Identifier',
        type: 'string',
        searchable: true,
        sortable: true
    }, {
        attribute: 'name',
        label: 'Thumbnail',
        type: 'date',
        searchable: true,
        sortable: true
    }, {
        attribute: 'count',
        label: 'Count',
        type: 'number',
        searchable: true,
        sortable: true
    }
]

const storeFactory: StoreFactory<any, any> = new PalmyraStoreFactory({ baseUrl: '/api/palmyra/' });

const ServerGrid = () => {
    const endPoint = 'masterdata/project'; //'grid/simpleGridData.json'

    const getOptions = (): IDataGridDefaultControlConfig => {
        return { export: { disabled: false } }
    }

    return <>
        <StoreFactoryContext.Provider value={storeFactory}>
            <GridX columns={columns} endPoint={endPoint}
                quickSearch="code"
                getPluginOptions={getOptions}
                DataGridControls={DataGridDefaultControls}
                pageSize={[20, 30, 1000]} />
        </StoreFactoryContext.Provider>

        {/* <PalmyraGrid columns={columns} endPoint={endPoint}
            quickSearch="code"
            getPluginOptions={getOptions}
            DataGridControls={DataGridDefaultControls}
            pageSize={[20, 30, 1000]} /> */}
    </>
}

export { ServerGrid }