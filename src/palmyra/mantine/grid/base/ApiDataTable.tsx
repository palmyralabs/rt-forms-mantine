import { MutableRefObject, forwardRef, useImperativeHandle, useRef } from 'react';
import {
  IPageQueryable, useServerQuery, NoopGridCustomizer, EmptyChildTable,
  ApiDataTableOptions, generateColumns, GridCustomizer
} from "@palmyralabs/rt-forms"
import BaseTable from './BaseTable';
import { useLSQueryOptions } from './useLSQueryOptions';

const ApiDataTable = forwardRef(function ApiDataTable(props: ApiDataTableOptions, ref: MutableRefObject<IPageQueryable>) {
  const { columns, EmptyChild } = props;
  const lsKey = 'hello';
  const EmptyChildContainer = EmptyChild || EmptyChildTable;
  const customizer: GridCustomizer = props.customizer || NoopGridCustomizer;

  const serverQuery = useServerQuery(props);

  const currentRef = ref || useRef<IPageQueryable>();
  useImperativeHandle(currentRef, () => {
    if (lsKey) {
      const LSOptions = useLSQueryOptions({ lsKey });
      const setSortColumns = (d: any) => {
        LSOptions.setSortColumns(d);
        serverQuery.setSortColumns(d);
      }

      const setQuickSearch = (d: any) => {
        LSOptions.setQuickSearch(d);
        serverQuery.setQuickSearch(d);
      }

      const setFilter = (d: any) => {
        LSOptions.setFilter(d);
        serverQuery.setFilter(d);
      }

      const gotoPage = (d: any) => {
        LSOptions.setPage(d);
        serverQuery.gotoPage(d);
      }

      const nextPage = () => {
        const pageNum = serverQuery.nextPage();
        if (pageNum >= 0) {
          LSOptions.setPage(pageNum);
        }
        return pageNum;
      }

      const prevPage = () => {
        const pageNum = serverQuery.prevPage();
        if (pageNum >= 0) {
          LSOptions.setPage(pageNum);
        } else {
          LSOptions.resetPage();
        }
        return pageNum;
      }

      return { ...serverQuery, setQuickSearch, setFilter, gotoPage, nextPage, prevPage, setSortColumns };
    } else {
      return serverQuery;
    }
  }, [serverQuery]);

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