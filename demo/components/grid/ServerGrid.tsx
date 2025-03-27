import { ColumnDefinition, StoreFactoryContext } from "@palmyralabs/rt-forms";
import { PalmyraStoreFactory, StoreFactory } from "@palmyralabs/palmyra-wire";
import './ServerGrid.css'
import { DataGridDefaultControls, GridX, IDataGridDefaultControlConfig, PalmyraGrid } from "../../../src/palmyra/mantine/grid";

const columns: ColumnDefinition[] = [
    {
        attribute: 'name',
        label: 'name',
        type: 'string',
        searchable: true,
        sortable: true
    }, {
        attribute: 'population',
        label: 'Population',
        type: 'number',
        searchable: true,
        sortable: true
    }
]

const storeFactory: StoreFactory<any, any> = new PalmyraStoreFactory({ baseUrl: '/localApi/' });

const ServerGrid = () => {
    const endPoint = 'masterdata/project.json'; //'grid/simpleGridData.json'

    const getOptions = (): IDataGridDefaultControlConfig => {
        return { export: { disabled: false } }
    }

    return <>
        <StoreFactoryContext.Provider value={storeFactory}>
            <GridX columns={columns} endPoint={endPoint} lsKey="uniqueKey"
                quickSearch="code" pagination={{ignoreSinglePage: false}}
                getPluginOptions={getOptions}
                DataGridControls={DataGridDefaultControls}
                pageSize={[20, 30, 1000]} />
        </StoreFactoryContext.Provider>
    </>
}

export { ServerGrid }