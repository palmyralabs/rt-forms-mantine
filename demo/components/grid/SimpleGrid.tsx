
import { ColumnDefinition, generateColumns } from "@palmyralabs/rt-forms";
import BaseTable from "../../../src/palmyra/mantine/grid/base/BaseTable";
import { StaticGrid } from "../../../src/palmyra/mantine/grid";


const rowData = [
    { name: "Sundar" },
    {
        name: 'murugan'
    },
    {
        name: 'valli'
    },
    {
        name: 'surya'
    }
]

const columns: ColumnDefinition[] = [{
    attribute: 'name',
    label: 'Name',
    type: 'string'
}]

const columnDefs = generateColumns(columns);

const SimplGrid = () => {
    return <>
        {/* <BaseTable rowData={rowData} columnDefs={columnDefs} /> */}
        <StaticGrid columns={columns} rowData={rowData}/>
    </>
}

export { SimplGrid }