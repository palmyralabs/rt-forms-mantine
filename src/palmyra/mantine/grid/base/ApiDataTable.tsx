import {
  ApiDataTableOptions,
  EmptyChildTable,
  generateColumns, GridCustomizer,
  IPageQueryable,
  NoopGridCustomizer,
  useServerQuery
} from "@palmyralabs/rt-forms";
import { RefObject, useImperativeHandle, useRef } from 'react';
import BaseTable from './BaseTable';
import { useLSQueryOptions } from './useLSQueryOptions';
import { resolveGridPersistence } from './gridPersistence';

function ApiDataTable(props: ApiDataTableOptions & { ref?: RefObject<IPageQueryable>, tableRef?: RefObject<any> }) {
  const { columns, EmptyChild } = props;
  const EmptyChildContainer = EmptyChild || EmptyChildTable;
  const customizer: GridCustomizer = props.customizer || NoopGridCustomizer;

  const persist = resolveGridPersistence(props);

  const LSOptions = useLSQueryOptions({ lsKey: persist.key, pageSize: props.pageSize, mode: persist.mode });
  const lsParams = persist.enabled
    ? { ...props.initParams, ...LSOptions.getLSOptions() }
    : { ...props.initParams };
  const queryParams = { ...props, initParams: lsParams };

  const serverQuery = useServerQuery(queryParams);

  const internalRef = useRef<IPageQueryable>(null);
  const currentRef = props.ref ?? internalRef;
  useImperativeHandle(currentRef, () => {
    if (persist.enabled) {
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

      const setPageSize = (newPageSize: number) => {
        LSOptions.setPageSize(newPageSize);
        serverQuery.setPageSize(newPageSize);
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
      return { ...serverQuery, setQuickSearch, setFilter, gotoPage, nextPage, prevPage, setPageSize, setSortColumns };
    } else {
      return serverQuery;
    }
  }, [serverQuery]);

  const visibleColumns = (columns || []).filter((c: any) => !c.hideColumn);
  const columnDefs = generateColumns(visibleColumns, customizer);

  const handleRowClick = props.onRowClick ? (rowData: any) => {
    props.onRowClick(rowData);
  } : () => { };

  const data = serverQuery.getCurrentData();
  const setSortColumns = currentRef.current?.setSortColumns || serverQuery.setSortColumns;

  return (
    <BaseTable columnDefs={columnDefs} EmptyChild={EmptyChildContainer} customizer={customizer} showFooter={props.showFooter}
      rowData={data} onRowClick={handleRowClick} onColumnSort={setSortColumns} initParams={queryParams.initParams}
      tableOptions={props.tableOptions} onTableReady={props.onTableReady} tableRef={props.tableRef}
    />
  )
}

export { ApiDataTable };
