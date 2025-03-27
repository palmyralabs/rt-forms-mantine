/**
 * Basic structure to draw the table
 */
import { MutableRefObject, useRef } from 'react'
import './BaseTable.css';
import ColumnHeader from './ColumnHeader'
import { flexRender, useReactTable, } from '@tanstack/react-table'
import LoadingChild from './LoadingChild';
import { BaseTableOptions, IReactTanstackTable, useBaseGridManager } from '@palmyralabs/rt-forms';
import { Table } from '@mantine/core';

export default function BaseTable(props: BaseTableOptions) {

  const { rowData, customizer } = props;
  const sortParams = props.initParams?.sort || {};
  const { onColumnSort, options, EmptyChildren, onRowClick } = useBaseGridManager(props);
  const tableRef: MutableRefObject<IReactTanstackTable> = customizer?.getTableRef ? customizer?.getTableRef() : useRef();

  const table = useReactTable(options);
  tableRef.current = table;

  const getMode = (header) => {
    const attribute = header.column?.columnDef?.meta?.attribute;
    if(attribute){      
      return sortParams[attribute];
    }
  }

  return (<>
    <div className={props.className}>
      <Table aria-label={props['aria-label']} className='py-baseGrid'>
        <Table.Thead className='py-grid-header'>
          {table.getHeaderGroups().map(headerGroup => (
            <Table.Tr key={headerGroup.id} className='py-grid-header-row'>
              {headerGroup.headers.map(header => {
                return (
                  header.isPlaceholder ? null : (
                    <ColumnHeader header={header}
                      key={header.id} sortMode={getMode(header)}
                      onSortChange={onColumnSort}
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
                  return (
                    <Table.Tr key={row.id} className={rowClassName} >
                      {row.getVisibleCells().map(cell => {
                        const meta: any = cell.column.columnDef.meta;
                        const isTypeNumber = meta?.columnDef?.type === 'number';
                        const cellClassName = 'py-grid-data-cell ' + (isTypeNumber ? ' py-grid-data-cell-type-number' : '')
                        return (
                          <Table.Td key={cell.id}
                            className={cellClassName}
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