import { ActionIcon, Badge, Group as MGroup, Table } from '@mantine/core';
import { BaseTableOptions, IReactTanstackTable, useBaseGridManager } from '@palmyralabs/rt-forms';
import { flexRender, useReactTable, } from '@tanstack/react-table';
import { Fragment, RefObject, useEffect, useRef, useState } from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import './BaseTable.css';
import ColumnHeader from './ColumnHeader';
import LoadingChild from './LoadingChild';
import { getByPath } from './useGridInlineEdit';

type AggSpecB = 'sum' | 'avg' | 'count' | 'min' | 'max' | ((rows: any[], attribute: string) => any);
type BaseTableExtra = {
  tableRef?: RefObject<any>; tableOptions?: any; onTableReady?: (table: any) => void;
  groupBy?: string; groupCollapsible?: boolean; defaultCollapsedGroups?: string[];
  aggregations?: Record<string, AggSpecB>;
  columnPinning?: { left?: string[]; right?: string[] };
  rowPinning?: { top?: string[]; bottom?: string[] };
  idProperty?: string;
  stickyHeader?: boolean;
  maxHeight?: number | string;
};

const orderByPin = (cells: any[]): any[] => {
  const left: any[] = [], center: any[] = [], right: any[] = [];
  cells.forEach((c) => {
    const p = c.column.getIsPinned();
    if (p === 'left') left.push(c); else if (p === 'right') right.push(c); else center.push(c);
  });
  return [...left, ...center, ...right];
};

const pinStyle = (column: any): any => {
  const pinned = column.getIsPinned();
  if (!pinned) return undefined;
  const size = column.getSize();
  const style: any = { position: 'sticky', zIndex: 3, width: size, minWidth: size, maxWidth: size };
  if (pinned === 'left') style.left = column.getStart('left');
  if (pinned === 'right') style.right = column.getAfter('right');
  return style;
};

const pinClass = (column: any): string => {
  const pinned = column.getIsPinned();
  if (!pinned) return '';
  let c = ' py-grid-col-pinned py-grid-col-pinned-' + pinned;
  if (pinned === 'left' && column.getIsLastColumn && column.getIsLastColumn('left')) c += ' py-grid-col-pin-left-edge';
  if (pinned === 'right' && column.getIsFirstColumn && column.getIsFirstColumn('right')) c += ' py-grid-col-pin-right-edge';
  return c;
};

const toNumB = (v: any): number => { const n = Number(v); return isNaN(n) ? 0 : n; };
const computeGroupAgg = (rows: any[], attribute: string, spec: AggSpecB): any => {
  if (typeof spec === 'function') return spec(rows, attribute);
  const vals = rows.map((r) => getByPath(r, attribute)).filter((v) => v != null && v !== '');
  switch (spec) {
    case 'count': return rows.length;
    case 'sum': return vals.reduce((a, v) => a + toNumB(v), 0);
    case 'avg': return vals.length ? vals.reduce((a, v) => a + toNumB(v), 0) / vals.length : 0;
    case 'min': return vals.length ? Math.min(...vals.map(toNumB)) : '';
    case 'max': return vals.length ? Math.max(...vals.map(toNumB)) : '';
    default: return '';
  }
};
const formatGroupAgg = (v: any, spec: AggSpecB): any => {
  if (typeof v !== 'number') return v;
  if (spec === 'avg') return v.toFixed(2);
  return Number.isInteger(v) ? v.toLocaleString() : v.toFixed(2);
};

export default function BaseTable(props: BaseTableOptions & BaseTableExtra) {

  const { rowData, customizer } = props;
  const sortParams = props.initParams?.sort || {};
  const { onColumnSort, options, EmptyChildren, onRowClick } = useBaseGridManager(props);
  const localTableRef = useRef<IReactTanstackTable>(null);
  const tableRef: RefObject<IReactTanstackTable> = customizer?.getTableRef ? customizer.getTableRef() : localTableRef;
  const [collapsed, setCollapsed] = useState<Set<string>>(() => new Set((props.defaultCollapsedGroups || []).map(String)));
  const toggleGroup = (key: string) => setCollapsed((prev) => {
    const next = new Set(prev);
    next.has(key) ? next.delete(key) : next.add(key);
    return next;
  });


  const tableOptions: any = props.tableOptions || {};
  const resizeEnabled = !!tableOptions.enableColumnResizing;

  const parsePx = (w: any): number | undefined => {
    if (typeof w === 'number') return w;
    if (typeof w === 'string') {
      const m = w.match(/^(\d+(?:\.\d+)?)\s*px$/) || w.match(/^(\d+(?:\.\d+)?)$/);
      if (m) return parseFloat(m[1]);
    }
    return undefined;
  };
  const seedSizes = (cols: any[]): any[] => (cols || []).map((c) => {
    if (c?.size != null) return c;                
    const px = parsePx(c?.meta?.columnDef?.width);
    if (px == null) return c;
    const next: any = { ...c, size: px };
    if (px < 20) next.minSize = px;                
    return next;
  });

  const columnPinning = (() => {
    const left: string[] = [...(props.columnPinning?.left || [])];
    const right: string[] = [...(props.columnPinning?.right || [])];
    ((options as any).columns || []).forEach((c: any) => {
      const pin = c?.meta?.columnDef?.pin ?? c?.pin;
      const id = c?.meta?.attribute ?? c?.accessorKey ?? c?.id ?? c?.meta?.columnDef?.attribute;
      if (id == null || !pin) return;
      if (pin === 'left' && !left.includes(String(id))) left.push(String(id));
      else if (pin === 'right' && !right.includes(String(id))) right.push(String(id));
    });
    return { left, right };
  })();
  const colPinEnabled = (columnPinning.left.length + columnPinning.right.length) > 0;
  const rowPinEnabled = !!(props.rowPinning && ((props.rowPinning.top?.length || 0) + (props.rowPinning.bottom?.length || 0) > 0));

  const mergedOptions: any = {
    ...options,
    ...tableOptions,
    columns: (resizeEnabled || colPinEnabled) ? seedSizes((options as any).columns) : (options as any).columns,
    data: (options as any).data,
  };
  if (resizeEnabled && !mergedOptions.columnResizeMode) {
    mergedOptions.columnResizeMode = 'onChange';
  }
  if (colPinEnabled || rowPinEnabled) {
    mergedOptions.state = {
      ...(mergedOptions.state || {}),
      ...(colPinEnabled ? { columnPinning } : {}),
      ...(rowPinEnabled ? { rowPinning: { top: props.rowPinning?.top || [], bottom: props.rowPinning?.bottom || [] } } : {})
    };
    if (colPinEnabled) mergedOptions.enableColumnPinning = true;
    if (rowPinEnabled) { mergedOptions.enableRowPinning = true; mergedOptions.keepPinnedRows = true; }
    const idProp = props.idProperty;
    if (rowPinEnabled && idProp && !mergedOptions.getRowId) {
      mergedOptions.getRowId = (row: any) => String(row?.[idProp]);
    }
  }

  const table = useReactTable(mergedOptions);
  tableRef.current = table;
  if (props.tableRef) props.tableRef.current = table;

  const readyRef = useRef(false);
  useEffect(() => {
    if (props.onTableReady && !readyRef.current) {
      readyRef.current = true;
      try {
        props.onTableReady(table);
      } catch (e) {
        console.error(e);
      }
    }
  }, [table]);

  const getMode = (header) => {
    const attribute = header.column?.columnDef?.meta?.attribute;
    if(attribute){
      return sortParams[attribute];
    }
  }

  const tableProps: any = resizeEnabled
    ? { layout: 'fixed', style: { width: table.getTotalSize(), minWidth: '100%' } }
    : {};

  const renderDataRow = (row: any, index: number, pinPos?: 'top' | 'bottom') => {
    const rowClassName = 'py-grid-data-row py-grid-data-row-' + ((1 == index % 2) ? 'even' : 'odd');
    const rowStyle = pinPos ? {} : { animationDelay: (Math.min(index, 14) * 18) + 'ms' };
    const renderDetail = mergedOptions.meta?.renderDetail;
    const showDetail = renderDetail && row.getIsExpanded && row.getIsExpanded() && row.depth === 0;
    const cellsRaw = row.getVisibleCells();
    const visibleCells = colPinEnabled ? orderByPin(cellsRaw) : cellsRaw;
    const expandOnRowClick = mergedOptions.meta?.expandOnRowClick;
    const rowClickable = expandOnRowClick && row.getCanExpand && row.getCanExpand();
    const onTrClick = rowClickable ? () => mergedOptions.meta?.onRowToggle?.(row) : undefined;
    const trClassName = rowClassName + (rowClickable ? ' py-grid-row-clickable' : '')
      + (pinPos ? ' py-grid-row-pinned py-grid-row-pinned-' + pinPos : '');
    return (
      <Fragment key={(pinPos ? pinPos + '-' : '') + row.id}>
        <Table.Tr className={trClassName} style={rowStyle} onClick={onTrClick}>
          {visibleCells.map((cell: any) => {
            const meta: any = cell.column.columnDef.meta;
            const isTypeNumber = meta?.columnDef?.type === 'number';
            const cellClassName = 'py-grid-data-cell ' + (isTypeNumber ? ' py-grid-data-cell-type-number' : '')
              + (colPinEnabled ? pinClass(cell.column) : '');
            const colWidth = resizeEnabled ? cell.column.getSize() : meta?.columnDef?.width;
            const cellStyle: any = colPinEnabled && cell.column.getIsPinned()
              ? pinStyle(cell.column)
              : (colWidth ? { width: colWidth, minWidth: colWidth } : undefined);
            return (
              <Table.Td key={cell.id} className={cellClassName} style={cellStyle}
                onClick={() => onRowClick(row.original)}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Table.Td>
            );
          })}
        </Table.Tr>
        {showDetail && (
          <Table.Tr className='py-grid-detail-row'>
            <Table.Td colSpan={visibleCells.length} className='py-grid-detail-cell'>
              <div className='py-grid-detail-content'>{renderDetail(row.original)}</div>
            </Table.Td>
          </Table.Tr>
        )}
      </Fragment>
    );
  };

  const renderCenter = () => {
    const allRows = rowPinEnabled ? table.getCenterRows() : table.getRowModel().rows;
    const colCount = table.getVisibleFlatColumns().length;
    const groupBy = props.groupBy;
    if (!groupBy) return allRows.map((row, index) => renderDataRow(row, index));
    const order: string[] = [];
    const groupMap: Record<string, any[]> = {};
    allRows.forEach((row) => {
      const key = String(getByPath(row.original, groupBy) ?? '—');
      if (!(key in groupMap)) { groupMap[key] = []; order.push(key); }
      groupMap[key].push(row);
    });
    const aggregations = props.aggregations || {};
    const aggAttrs = Object.keys(aggregations);
    let idx = 0;
    return order.map((key) => {
      const rows = groupMap[key];
      const isCollapsed = collapsed.has(key);
      const originals = rows.map((r) => r.original);
      return (
        <Fragment key={'grp-' + key}>
          <Table.Tr className='py-grid-group-row'
            onClick={() => props.groupCollapsible !== false && toggleGroup(key)}>
            <Table.Td colSpan={colCount} className='py-grid-group-cell'>
              <MGroup gap="xs" wrap="nowrap">
                {props.groupCollapsible !== false && (
                  <ActionIcon size="sm" variant="subtle" color="gray"
                    aria-label={isCollapsed ? 'Expand group' : 'Collapse group'}
                    onClick={(e) => { e.stopPropagation(); toggleGroup(key); }}>
                    {isCollapsed ? <FiChevronRight size={14} /> : <FiChevronDown size={14} />}
                  </ActionIcon>
                )}
                <span className='py-grid-group-label'>{key}</span>
                <Badge size="sm" variant="light" color="gray">{rows.length}</Badge>
                {aggAttrs.map((attr) => (
                  <span key={attr} className='py-grid-group-agg'>
                    {attr}: <b>{formatGroupAgg(computeGroupAgg(originals, attr, aggregations[attr]), aggregations[attr])}</b>
                  </span>
                ))}
              </MGroup>
            </Table.Td>
          </Table.Tr>
          {!isCollapsed && rows.map((row) => renderDataRow(row, idx++))}
        </Fragment>
      );
    });
  };

  const renderBody = () => {
    if (!rowPinEnabled) return renderCenter();
    const top = table.getTopRows();
    const bottom = table.getBottomRows();
    return (<>
      {top.map((row: any, i: number) => renderDataRow(row, i, 'top'))}
      {renderCenter()}
      {bottom.map((row: any, i: number) => renderDataRow(row, i, 'bottom'))}
    </>);
  };

  return (<>
    <div className={props.className}>
      <div className='py-baseGrid-scroll'
        style={props.maxHeight != null ? { maxHeight: props.maxHeight, overflowY: 'auto' } : undefined}>
      <Table aria-label={props['aria-label']} className='py-baseGrid' stickyHeader={!!props.stickyHeader} {...tableProps}>
        <Table.Thead className='py-grid-header'>
          {table.getHeaderGroups().map(headerGroup => (
            <Table.Tr key={headerGroup.id} className='py-grid-header-row'>
              {(colPinEnabled ? orderByPin(headerGroup.headers) : headerGroup.headers).map(header => {
                return (
                  header.isPlaceholder ? null : (
                    <ColumnHeader header={header}
                      key={header.id} sortMode={getMode(header)}
                      onSortChange={onColumnSort}
                      resizeEnabled={resizeEnabled}
                      pinStyle={colPinEnabled ? pinStyle(header.column) : undefined}
                      pinClassName={colPinEnabled ? pinClass(header.column) : undefined}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </ColumnHeader>
                  )
                )
              })}
            </Table.Tr>
          ))}
        </Table.Thead>

        {(null == rowData || undefined == rowData || 0 == rowData.length) ? (<></>) : (
          <Table.Tbody>
            {renderBody()}
          </Table.Tbody>)}
        {(!props.showFooter || null == rowData || undefined == rowData || 0 == rowData.length) ? (<></>) : (
          <Table.Tfoot className='py-grid-footer'>
            {table.getFooterGroups().map(footerGroup => (
              <Table.Tr key={footerGroup.id} className='py-grid-footer-row'>
                {footerGroup.headers.map(header => (
                  <Table.Td key={header.id} className='py-grid-footer-cell'>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                  </Table.Td>
                ))}
              </Table.Tr>
            ))}
          </Table.Tfoot>)}

      </Table>
      </div>
      {(null == rowData) ? (<div>
        <LoadingChild />
      </div>) :
        (undefined == rowData) ? (<div>Error while loading data</div>) : (0 == rowData.length) ? (<EmptyChildren />) : (<></>)}
    </div>
  </>
  )
}
