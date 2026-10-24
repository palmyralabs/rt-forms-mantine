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
import { Anchor, Group, Loader, LoadingOverlay, Stack, Text } from '@mantine/core';
import BaseTable from './BaseTable';
import { useLSQueryOptions } from './useLSQueryOptions';
import { resolveGridPersistence } from './gridPersistence';
import { useGridSelection } from './useGridSelection';
import { useGridInlineEdit, IGridInlineEditProps, ICellSaveParams, setByPath, getByPath } from './useGridInlineEdit';

type AggSpec = 'sum' | 'avg' | 'count' | 'min' | 'max' | ((rows: any[], attribute: string) => any);

const toNum = (v: any): number => { const n = Number(v); return isNaN(n) ? 0 : n; };

const computeAgg = (rows: any[], attribute: string, spec: AggSpec): any => {
  if (typeof spec === 'function') return spec(rows, attribute);
  const vals = rows.map((r) => getByPath(r, attribute)).filter((v) => v != null && v !== '');
  switch (spec) {
    case 'count': return rows.length;
    case 'sum': return vals.reduce((a, v) => a + toNum(v), 0);
    case 'avg': return vals.length ? vals.reduce((a, v) => a + toNum(v), 0) / vals.length : 0;
    case 'min': return vals.length ? Math.min(...vals.map(toNum)) : '';
    case 'max': return vals.length ? Math.max(...vals.map(toNum)) : '';
    default: return '';
  }
};

const formatAgg = (v: any, spec: AggSpec): any => {
  if (typeof v !== 'number') return v;
  if (spec === 'avg') return v.toFixed(2);
  return Number.isInteger(v) ? v.toLocaleString() : v.toFixed(2);
};

const applyAggregations = (cols: any[], aggregations: Record<string, AggSpec>, summaryLabel?: string) => {
  let labelled = false;
  cols.forEach((col) => {
    const attribute = col?.meta?.attribute || col?.accessorKey || col?.id;
    if (attribute && aggregations[attribute] != null) {
      const spec = aggregations[attribute];
      col.footer = (ctx: any) => {
        const rows = ctx.table.getRowModel().rows.map((r: any) => r.original);
        return formatAgg(computeAgg(rows, attribute, spec), spec);
      };
    } else if (!labelled && summaryLabel && col?.id !== 'py-row-actions') {
      col.footer = () => summaryLabel;
      labelled = true;
    }
  });
};
import { useGridExpansion, IGridExpansionProps } from './useGridExpansion';

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

type ExpansionProps = IGridExpansionProps;

function ApiDataTable(props: ApiDataTableOptions & SelectionProps & IGridInlineEditProps & ExpansionProps & { ref?: RefObject<IPageQueryable>, tableRef?: RefObject<any>, tableOptions?: any, onTableReady?: (table: any) => void, loadingOverlay?: boolean, loader?: any, loadingText?: string, aggregations?: Record<string, AggSpec>, summaryLabel?: string, groupBy?: string, groupCollapsible?: boolean, defaultCollapsedGroups?: string[], transformResult?: (data: any) => { result: any[], total?: number }, transformRequest?: (config: any) => any, columnPinning?: { left?: string[], right?: string[] }, rowPinning?: { top?: string[], bottom?: string[] }, stickyHeader?: boolean, maxHeight?: number | string }) {
  const { columns, EmptyChild } = props;
  const EmptyChildContainer = EmptyChild || EmptyChildTable;
  const customizer: GridCustomizer = props.customizer || NoopGridCustomizer;

  const persist = resolveGridPersistence(props);

  const LSOptions = useLSQueryOptions({ lsKey: persist.key, pageSize: props.pageSize, mode: persist.mode });
  const lsParams = persist.enabled
    ? { ...props.initParams, ...LSOptions.getLSOptions() }
    : { ...props.initParams };
  const requestStoreOptions = useMemo(() => {
    const transformRequest = props.transformRequest;
    if (!transformRequest) return props.storeOptions;
    const base: any = props.storeOptions || {};
    const userCustomizer = base.axiosCustomizer;
    return {
      ...base,
      axiosCustomizer: (axios: any) => {
        if (userCustomizer) userCustomizer(axios);
        axios.interceptors.request.use((config: any) => {
          try { return transformRequest(config) || config; } catch (e) { return config; }
        });
      }
    };
  }, [props.storeOptions, props.transformRequest]);

  const queryParams = { ...props, storeOptions: requestStoreOptions, initParams: lsParams };

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

  const rawData = serverQuery.getCurrentData();
  if (rawData != null && !Array.isArray(rawData)) {
    console.warn('[grid] query result must be an array of rows; got', rawData, '— check transformResult (it must return { result: any[] }).');
  }
  const data = (Array.isArray(rawData) || rawData == null) ? rawData : [];

  const dataRef = useRef<any[]>([]);
  dataRef.current = Array.isArray(data) ? data : [];

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
    const store: any = storeFactory?.getFormStore?.({}, props.endPoint, idProperty);
    if (!store?.put) return Promise.reject(new Error('No form store available'));
    const payload: any = { [idProperty]: p.id };
    setByPath(payload, p.attribute, p.value);
    return store.put(payload);
  };
  const save = props.onCellSave ? props.onCellSave : (props.autoSave ? defaultSave : undefined);

  const defaultRowSave = (rowOriginal: any, changes: Record<string, any>, id: string) => {
    const store: any = storeFactory?.getFormStore?.({}, props.endPoint, idProperty);
    if (!store?.put) return Promise.reject(new Error('No form store available'));
    const payload: any = { [idProperty]: id };
    Object.keys(changes).forEach((a) => setByPath(payload, a, changes[a]));
    return store.put(payload);
  };
  const rowSave = props.onRowSave ? props.onRowSave : (props.autoSave ? defaultRowSave : undefined);

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
    onSaveError: props.onSaveError,
    onValidityChange: props.onValidityChange,
    onEditsChange: props.onEditsChange,
    rowEdit: props.rowEdit,
    rowActionsPosition: props.rowActionsPosition,
    rowEditIcon: props.rowEditIcon,
    rowSaveIcon: props.rowSaveIcon,
    rowCancelIcon: props.rowCancelIcon,
    renderRowActions: props.renderRowActions,
    rowSave,
    onRowSaveSuccess: props.onRowSaveSuccess,
    onRowSaveError: props.onRowSaveError
  });

  const expansion = useGridExpansion({
    expandable: props.expandable,
    idKey: idProperty,
    getSubRows: props.getSubRows,
    childrenKey: props.childrenKey,
    loadChildren: props.loadChildren,
    renderDetail: props.renderDetail,
    getRowCanExpand: props.getRowCanExpand,
    accordion: props.accordion,
    expandOnRowClick: props.expandOnRowClick,
    treeLines: props.treeLines,
    expanded: props.expanded,
    defaultExpanded: props.defaultExpanded,
    expandPosition: props.expandPosition,
    onExpandedChange: props.onExpandedChange
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
        getErrors: inlineEdit.getErrors,
        isValid: inlineEdit.isValid,
        undo: inlineEdit.undo,
        redo: inlineEdit.redo,
        canUndo: inlineEdit.canUndo,
        canRedo: inlineEdit.canRedo,
        clear: inlineEdit.clear
      };
    }
    if (props.expandRef) {
      props.expandRef.current = expansion.api;
    }
  });

  const visibleColumns = (columns || []).filter((c: any) => !c.hideColumn);
  const columnDefs = generateColumns(visibleColumns, customizer);
  if (inlineEdit.enabled) inlineEdit.preProcessColumns(columnDefs);
  if (selection.enabled) selection.preProcessColumns(columnDefs);
  if (expansion.enabled) expansion.preProcessColumns(columnDefs);
  if (props.aggregations) applyAggregations(columnDefs, props.aggregations, props.summaryLabel);
  const showFooter = props.showFooter || !!props.aggregations;

  const handleRowClick = props.onRowClick ? (rowData: any) => {
    props.onRowClick(rowData);
  } : () => { };

  const mergeOpts = (base: any, add: any) => ({
    ...base, ...add,
    state: { ...(base.state || {}), ...(add.state || {}) },
    meta: { ...(base.meta || {}), ...(add.meta || {}) }
  });

  let tableOptions: any = props.tableOptions || {};
  if (selection.enabled) tableOptions = mergeOpts(tableOptions, selection.getTableOptions());
  if (expansion.enabled) tableOptions = mergeOpts(tableOptions, expansion.getTableOptions());
  if (inlineEdit.enabled) tableOptions = mergeOpts(tableOptions, inlineEdit.getTableOptions());

  const setSortColumns = currentRef.current?.setSortColumns || serverQuery.setSortColumns;

  const treeData = useMemo(() => expansion.decorateData(data), [data, expansion.childrenState]);

  const banner = selection.banner;
  const overlayVisible = props.loadingOverlay !== false && !!serverQuery.isLoading;

  const loaderContent = props.loader || (
    <Stack align="center" gap={10} className="py-grid-loader">
      <Loader size="lg" type="bars" color="indigo" />
      <Text size="sm" fw={500} c="dimmed">{props.loadingText || 'Loading…'}</Text>
    </Stack>
  );

  return (
    <div className="py-grid-loading-wrapper">
      <LoadingOverlay visible={overlayVisible} zIndex={5}
        transitionProps={{ duration: 150 }}
        overlayProps={{ radius: 'md', blur: 2, backgroundOpacity: 0.55 }}
        loaderProps={{ children: loaderContent }} />
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
      <BaseTable columnDefs={columnDefs} EmptyChild={EmptyChildContainer} customizer={customizer} showFooter={showFooter}
        rowData={treeData} onRowClick={handleRowClick} onColumnSort={setSortColumns} initParams={queryParams.initParams}
        tableOptions={tableOptions} onTableReady={props.onTableReady} tableRef={props.tableRef}
        groupBy={props.groupBy} groupCollapsible={props.groupCollapsible} defaultCollapsedGroups={props.defaultCollapsedGroups}
        aggregations={props.aggregations}
        columnPinning={props.columnPinning} rowPinning={props.rowPinning} idProperty={idProperty}
        stickyHeader={props.stickyHeader} maxHeight={props.maxHeight}
      />
    </div>
  )
}

export { ApiDataTable };
