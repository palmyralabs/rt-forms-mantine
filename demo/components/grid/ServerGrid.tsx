import { ColumnDefinition, PalmyraForm, StoreFactoryContext } from "@palmyralabs/rt-forms";
import { PalmyraStoreFactory, StoreFactory } from "@palmyralabs/palmyra-wire";
import { useState } from "react";
import { Badge, Group } from "@mantine/core";
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
    },
    {
        attribute: 'dob',
        label: 'Date of Birth',
        type: 'date',
        searchable: true,
        sortable: true
    },
    {
        attribute: 'userType.userType',
        label: 'User Type',
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
    const [selected, setSelected] = useState<any[]>([]);

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
            <Group justify="space-between" mb="md">
                <PalmyraForm>
                    <SearchFilterField attribute="displayName" placeholder="Search name"
                        filter={filter} setFilter={setFilter} handleFilterChange={handleFilterChange} />
                </PalmyraForm>
                <Badge size="lg" variant="light" color={selected.length ? 'indigo' : 'gray'}>
                    {selected.length} selected
                </Badge>
            </Group>
            <GridX columns={columns} endPoint={endPoint} lsKey="uniqueKey"
                filter={gridFilter}
                selectable="multi" idProperty="id"
                defaultSelectBy={{ attribute: 'loginName', values: ['satish', 'adarsh'] }}
                onSelectionChange={(rows) => setSelected(rows)}
                editable
                editors={{
                    displayName: { type: 'text' },
                    phoneNumber: { type: 'amount' },
                    dob: { type: 'date' },
                    'userType.userType': { type: 'lookup', endPoint: 'api/palmyra/masterdata/userType', idAttribute: 'id', labelAttribute: 'userType' },
                    loginName: { type: 'select', options: { 'admin@gmail.com': 'Admin', 'satish': 'Satish', 'adarsh': 'Adarsh' } }
                }}
                onCellEdit={(p) => console.log('cell edit', p)}
                quickSearch="code" pagination={{ ignoreSinglePage: false }}
                getPluginOptions={getOptions}
                DataGridControls={DataGridDefaultControls}
                pageSize={[20, 30, 1000]} />
        </StoreFactoryContext.Provider>
    </>
}

export { ServerGrid }