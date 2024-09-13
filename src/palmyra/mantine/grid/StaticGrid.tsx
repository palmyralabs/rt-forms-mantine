import { MutableRefObject, forwardRef } from 'react';
import {
  GridCustomizer, IPageQueryable, NoopGridCustomizer, StaticGridOptions,
  generateColumns
} from "@palmyralabs/rt-forms"
import { EmptyChildTable } from '@palmyralabs/rt-forms'
import BaseTable from './base/BaseTable';

const StaticGrid = forwardRef(function StaticGrid(props: StaticGridOptions, ref: MutableRefObject<IPageQueryable>) {
  const { columns, EmptyChild } = props;
  const EmptyChildContainer = EmptyChild || EmptyChildTable;
  const customizer: GridCustomizer = props.customizer || NoopGridCustomizer;

  const columnDefs = generateColumns(columns, customizer);

  const handleRowClick = props.onRowClick ? (rowData: any) => {
    props.onRowClick(rowData);
  } : () => { };

  const data = props.rowData;

  return (
    <BaseTable columnDefs={columnDefs} EmptyChild={EmptyChildContainer} customizer={customizer}
      rowData={data} onRowClick={handleRowClick} onColumnSort={props.setSortColumns} />
  )
});

export { StaticGrid };