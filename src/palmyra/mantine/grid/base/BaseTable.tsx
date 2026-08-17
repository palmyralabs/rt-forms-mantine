/**
 * Basic structure to draw the table
 */
import { Table } from '@mantine/core';
import { BaseTableOptions, IReactTanstackTable, useBaseGridManager } from '@palmyralabs/rt-forms';
import { flexRender, useReactTable, } from '@tanstack/react-table';
import { RefObject, useEffect, useRef } from 'react';
import './BaseTable.css';
import ColumnHeader from './ColumnHeader';
import LoadingChild from './LoadingChild';

type BaseTableExtra = { tableRef?: RefObject<any>; tableOptions?: any; onTableReady?: (table: any) => void };

export default function BaseTable(props: BaseTableOptions & BaseTableExtra) {

  const { rowData, customizer } = props;
  const sortParams = props.initParams?.sort || {};
  const { onColumnSort, options, EmptyChildren, onRowClick } = useBaseGridManager(props);
  const localTableRef = useRef<IReactTanstackTable>(null);
  const tableRef: RefObject<IReactTanstackTable> = customizer?.getTableRef ? customizer.getTableRef() : localTableRef;


  const tableOptions: any = props.tableOptions || {};
  const resizeEnabled = !!tableOptions.enableColumnResizing;
  const mergedOptions: any = {
    ...options,
    ...tableOptions,
    columns: (options as any).columns,
    data: (options as any).data,
  };
  if (resizeEnabled && !mergedOptions.columnResizeMode) {
    mergedOptions.columnResizeMode = 'onChange';
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

  return (<>
    <div className={props.className}>
      <Table aria-label={props['aria-label']} className='py-baseGrid' {...tableProps}>
        <Table.Thead className='py-grid-header'>
          {table.getHeaderGroups().map(headerGroup => (
            <Table.Tr key={headerGroup.id} className='py-grid-header-row'>
              {headerGroup.headers.map(header => {
                return (
                  header.isPlaceholder ? null : (
                    <ColumnHeader header={header}
                      key={header.id} sortMode={getMode(header)}
                      onSortChange={onColumnSort}
                      resizeEnabled={resizeEnabled}
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
            {
              table.getRowModel().rows
                .map((row, index) => {
                  const rowClassName = 'py-grid-data-row py-grid-data-row-' + ((1 == index % 2) ? 'even' : 'odd');
                  const rowStyle = { animationDelay: (Math.min(index, 14) * 18) + 'ms' };
                  return (
                    <Table.Tr key={row.id} className={rowClassName} style={rowStyle}>
                      {row.getVisibleCells().map(cell => {
                        const meta: any = cell.column.columnDef.meta;
                        const isTypeNumber = meta?.columnDef?.type === 'number';
                        const cellClassName = 'py-grid-data-cell ' + (isTypeNumber ? ' py-grid-data-cell-type-number' : '');
                        const colWidth = resizeEnabled ? cell.column.getSize() : meta?.columnDef?.width;
                        const cellStyle: any = colWidth ? { width: colWidth } : undefined;
                        return (
                          <Table.Td key={cell.id}
                            className={cellClassName}
                            style={cellStyle}
                            onClick={() => onRowClick(row.original)}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}

                          </Table.Td>
                        )
                      })}
                    </Table.Tr>
                  )
                })}
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
      {(null == rowData) ? (<div>
        <LoadingChild />
      </div>) :
        (undefined == rowData) ? (<div>Error while loading data</div>) : (0 == rowData.length) ? (<EmptyChildren />) : (<></>)}
    </div>
  </>
  )
}
