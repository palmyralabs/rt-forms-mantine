import {
  ApiDataTableOptions,
  EmptyChildTable,
  generateColumns, GridCustomizer,
  IPageQueryable,
  NoopGridCustomizer,
  StoreFactoryContext,
  useServerQuery
} from "@palmyralabs/rt-forms";
import { RefObject, useContext, useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import { Anchor, Group, Loader, Text } from '@mantine/core';
import BaseTable from './BaseTable';
import { useLSQueryOptions } from './useLSQueryOptions';
import { resolveGridPersistence } from './gridPersistence';
import { useGridSelection } from './useGridSelection';
import { useGridInlineEdit, ICellEditParams, ICellSaveParams, ICellEditorConfig, setByPath } from './useGridInlineEdit';

type SelectionRefValue = {
  selectedRows: any[],
  selectedIds: string[],
  clear: () => void,
  selectIds: (ids: (string | number)[]) => void,
  selectAllPages: () => Promise<void>
};

type SelectionProps = {
  selectable?: 'single' | 'multi' | boolean,
  idProperty?: string,
  checkboxPosition?: 'first' | 'last',
  selectAllPages?: boolean,
  maxSelected?: number,
  defaultSelectedIds?: (string | number)[],
  defaultSelected?: (row: any) => boolean,
  defaultSelectBy?: { attribute: string, values: any[] },
  isRowSelectable?: (row: any) => boolean,
  onSelectionChange?: (rows: any[]) => void,
  selectionRef?: RefObject<SelectionRefValue>
};

type EditRefValue = {
  edits: Record<string, Record<string, any>>,
  getEditedRows: () => { id: string, changes: Record<string, any> }[],
  clear: () => void
};

type InlineEditProps = {
  editable?: boolean,
  editableColumns?: string[],
  editors?: Record<string, ICellEditorConfig>,
  onCellEdit?: (params: ICellEditParams) => void,
  isCellEditable?: (row: any, attribute: string) => boolean,
  getEditorType?: (attribute: string) => 'text' | 'number',
  editRef?: RefObject<EditRefValue>,
  autoSave?: boolean,
  saveEndPoint?: any,
  onCellSave?: (params: ICellSaveParams) => Promise<any>,
  updateRowOnSave?: boolean,
  onSaveSuccess?: (params: ICellSaveParams & { response: any }) => void,
  onSaveError?: (params: ICellSaveParams & { error: any }) => void
};

function ApiDataTable(props: ApiDataTableOptions & SelectionProps & InlineEditProps & { ref?: RefObject<IPageQueryable>, tableRef?: RefObject<any>, tableOptions?: any, onTableReady?: (table: any) => void }) {
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

  const data = serverQuery.getCurrentData();

  const dataRef = useRef<any[]>([]);
  dataRef.current = data || [];

  const idProperty = props.idProperty || 'id';
  const storeFactory: any = useContext(StoreFactoryContext);
  const gridStore = useMemo(
    () => storeFactory?.getGridStore?.(props.storeOptions || {}, props.endPoint, idProperty),
    [storeFactory, props.endPoint, idProperty]
  );

  const fetchAllRows = async (): Promise<any[]> => {
    if (!gridStore?.query) return dataRef.current || [];
    const total = serverQuery.getTotalRecords?.() || 0;
    const req: any = serverQuery.getQueryRequest?.() || {};
    const res: any = await gridStore.query({ ...req, offset: 0, limit: total || undefined, total: false });
    return res?.result || [];
  };

  const selection = useGridSelection({
    selectable: props.selectable,
    idKey: idProperty,
    dataRef,
    position: props.checkboxPosition || 'first',
    maxSelected: props.maxSelected,
    defaultSelectedIds: props.defaultSelectedIds,
    defaultSelected: props.defaultSelected,
    defaultSelectBy: props.defaultSelectBy,
    isRowSelectable: props.isRowSelectable,
    getTotalRecords: () => serverQuery.getTotalRecords?.() || (dataRef.current || []).length,
    fetchAllRows: props.selectAllPages ? fetchAllRows : undefined,
    onSelectionChange: props.onSelectionChange
  });

  const defaultSave = (p: ICellSaveParams) => {
    const store: any = storeFactory?.getFormStore?.({}, props.saveEndPoint || props.endPoint, idProperty);
    if (!store?.put) return Promise.reject(new Error('No form store available'));
    const payload: any = { [idProperty]: p.id };
    setByPath(payload, p.attribute, p.value);
    return store.put(payload);
  };
  const save = props.onCellSave ? props.onCellSave : (props.autoSave ? defaultSave : undefined);

  const inlineEdit = useGridInlineEdit({
    editable: props.editable,
    editableColumns: props.editableColumns,
    editors: props.editors,
    idKey: idProperty,
    onCellEdit: props.onCellEdit,
    isCellEditable: props.isCellEditable,
    getEditorType: props.getEditorType,
    save,
    updateRowOnSave: props.updateRowOnSave,
    onSaveSuccess: props.onSaveSuccess,
    onSaveError: props.onSaveError
  });

  useEffect(() => {
    if (props.selectionRef) {
      props.selectionRef.current = {
        selectedRows: selection.selectedRows,
        selectedIds: selection.selectedIds,
        clear: selection.clear,
        selectIds: selection.selectIds,
        selectAllPages: selection.selectAllPages
      };
    }
    if (props.editRef) {
      props.editRef.current = {
        edits: inlineEdit.edits,
        getEditedRows: inlineEdit.getEditedRows,
        clear: inlineEdit.clear
      };
    }
  });

  const visibleColumns = (columns || []).filter((c: any) => !c.hideColumn);
  const columnDefs = generateColumns(visibleColumns, customizer);
  if (inlineEdit.enabled) inlineEdit.preProcessColumns(columnDefs);
  if (selection.enabled) selection.preProcessColumns(columnDefs);

  const handleRowClick = props.onRowClick ? (rowData: any) => {
    props.onRowClick(rowData);
  } : () => { };

  let tableOptions: any = props.tableOptions || {};
  if (selection.enabled) tableOptions = { ...tableOptions, ...selection.getTableOptions() };
  if (inlineEdit.enabled) {
    const editOpts = inlineEdit.getTableOptions();
    tableOptions = { ...tableOptions, meta: { ...(tableOptions.meta || {}), ...editOpts.meta } };
  }

  const setSortColumns = currentRef.current?.setSortColumns || serverQuery.setSortColumns;

  const banner = selection.banner;

  return (
    <>
      {selection.enabled && (banner.showSelectAll || banner.showClearAll) && (
        <Group gap="xs" justify="center" className="py-grid-select-all-banner">
          {banner.showSelectAll ? (
            <>
              <Text size="xs" c="dimmed">All {banner.pageCount} on this page selected.</Text>
              {banner.loading
                ? <Loader size="xs" />
                : <Anchor size="xs" onClick={banner.onSelectAll}>Select all {banner.total}</Anchor>}
            </>
          ) : (
            <>
              <Text size="xs" c="dimmed">All {selection.selectedIds.length} selected.</Text>
              <Anchor size="xs" onClick={banner.onClear}>Clear selection</Anchor>
            </>
          )}
        </Group>
      )}
      <BaseTable columnDefs={columnDefs} EmptyChild={EmptyChildContainer} customizer={customizer} showFooter={props.showFooter}
        rowData={data} onRowClick={handleRowClick} onColumnSort={setSortColumns} initParams={queryParams.initParams}
        tableOptions={tableOptions} onTableReady={props.onTableReady} tableRef={props.tableRef}
      />
    </>
  )
}

export { ApiDataTable };
