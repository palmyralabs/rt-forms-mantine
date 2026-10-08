import { ColumnDefinition, PalmyraForm, StoreFactoryContext } from "@palmyralabs/rt-forms";
import { PalmyraStoreFactory, StoreFactory } from "@palmyralabs/palmyra-wire";
import { useState } from "react";
import { Group } from "@mantine/core";
import './ServerGrid.css'
import { containsFilter, DataGridDefaultControls, GridX, IDataGridDefaultControlConfig } from "../../../src/palmyra/mantine/grid";
import { SearchFilterField } from "../../../src/main";

const columns: ColumnDefinition[] = [
    {
        attribute: 'displayName',
        label: 'name',
        type: 'string',
        searchable: true,
        sortable: true
    }, 
    {
        attribute: 'loginName',
        label: 'loginName',
        type: 'string',
        searchable: true,
        sortable: true
    },
    {
        attribute: 'phoneNumber',
        label: 'Phone Number',
        type: 'string',
        searchable: true,
        sortable: true
    }
]

const storeFactory: StoreFactory<any, any> = new PalmyraStoreFactory({ baseUrl: '/' });

const ServerGrid = () => {
    // const endPoint = 'masterdata/project.json'; //'grid/simpleGridData.json'
    const endPoint = 'api/palmyra/userManagement';

    const [filter, setFilter] = useState<any>({});

    const handleFilterChange = (attribute: string, _type?: string) => (e: any) => {
        const v = e?.target?.value ?? e;
        setFilter((prev: any) => ({ ...prev, [attribute]: v }));
    };

    const gridFilter = Object.fromEntries(
        Object.entries(filter)
            .filter(([, v]) => v)
            .map(([k, v]) => [k, containsFilter(v as string)])
    );

    const getOptions = (): IDataGridDefaultControlConfig => {
        return { export: { disabled: false } }
    }

    return <>
        <StoreFactoryContext.Provider value={storeFactory}>
            <Group justify="flex-start" mb="md">
                <PalmyraForm>
                    <SearchFilterField attribute="displayName" placeholder="Search name"
                        filter={filter} setFilter={setFilter} handleFilterChange={handleFilterChange} />
                </PalmyraForm>
            </Group>
            <GridX columns={columns} endPoint={endPoint} lsKey="uniqueKey"
                filter={gridFilter}
                quickSearch="code" pagination={{ ignoreSinglePage: false }}
                getPluginOptions={getOptions}
                DataGridControls={DataGridDefaultControls}
                pageSize={[20, 30, 1000]} />
        </StoreFactoryContext.Provider>
    </>
}

export { ServerGrid }