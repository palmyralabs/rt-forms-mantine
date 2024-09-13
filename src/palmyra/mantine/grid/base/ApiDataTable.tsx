import { MutableRefObject, forwardRef, useImperativeHandle, useRef } from 'react';
import {
  IPageQueryable, useServerQuery, NoopGridCustomizer, EmptyChildTable,
  ApiDataTableOptions, generateColumns, GridCustomizer
} from "@palmyralabs/rt-forms"
import BaseTable from './BaseTable';

const ApiDataTable = forwardRef(function ApiDataTable(props: ApiDataTableOptions, ref: MutableRefObject<IPageQueryable>) {
  const { columns, EmptyChild } = props;
  const EmptyChildContainer = EmptyChild || EmptyChildTable;
  const customizer: GridCustomizer = props.customizer || NoopGridCustomizer;

  const serverQuery = useServerQuery(props);

  const currentRef = ref || useRef<IPageQueryable>();
  useImperativeHandle(currentRef, () => serverQuery, [serverQuery]);

  const columnDefs = generateColumns(columns, customizer);

  const handleRowClick = props.onRowClick ? (rowData: any) => {
    props.onRowClick(rowData);
  } : () => { };

  const data = serverQuery.getCurrentData();
  const setSortColumns = serverQuery.setSortColumns;

  return (
    <BaseTable columnDefs={columnDefs} EmptyChild={EmptyChildContainer} customizer={customizer}
      rowData={data} onRowClick={handleRowClick} onColumnSort={setSortColumns}
    />
  )
});

export { ApiDataTable };