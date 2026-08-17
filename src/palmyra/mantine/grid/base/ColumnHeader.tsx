import { useEffect } from 'react';
import { LuArrowDownUp, LuArrowUpDown } from "react-icons/lu";
import './ColumnHeader.css';
import { useSortColumn } from '@palmyralabs/rt-forms';
import { Table } from '@mantine/core';
const ColumnHeader = ({ header, children, sortMode, onSortChange, resizeEnabled }) => {
    const columnAttribute = header.column.columnDef.meta?.attribute || header.id;

    const original: any = header.column.columnDef.meta?.columnDef || {};
    const disableColumn = !!original.disableColumn;

    const canResize = !!resizeEnabled && original.enableResizing === true && !disableColumn
        && (header.column.getCanResize ? header.column.getCanResize() : true);

    const sortDisabled = !header.column.columnDef.enableSorting || disableColumn;
    const rawWidth = resizeEnabled ? header.getSize() : original.width;
    const hasWidth = rawWidth != null && rawWidth !== '' && rawWidth !== 'auto';
    const width = rawWidth || 'auto';
    const widthStyle: any = { width, position: 'relative' };
    if (hasWidth) widthStyle.minWidth = rawWidth;

    const { sortColumn, order, sortOrder } = useSortColumn({ sortDisabled, onSortChange, initMode: sortMode })

    useEffect(() => {
        onSortChange(columnAttribute, order)
    }, [order])

    const meta: any = header.column.columnDef.meta;
    const isTypeNumber = meta?.columnDef?.type === 'number';
    const cellClassName = 'py-dataGrid-header-text'
        + (isTypeNumber ? ' py-dataGrid-header-text-type-number' : '')
        + (disableColumn ? ' py-dataGrid-header-text-disabled' : '')

    const resizer = canResize ? (
        <div
            className={'py-grid-resizer' + (header.column.getIsResizing() ? ' py-grid-resizer-active' : '')}
            onMouseDown={header.getResizeHandler()}
            onTouchStart={header.getResizeHandler()}
            onClick={(e) => e.stopPropagation()}
        />
    ) : null;

    if (header.column.columnDef.columns) {
        return (
            <Table.Td className='py-baseGrid-header-cell py-baseGrid-header-group-cell' key={header.id} colSpan={header.colSpan}
                style={widthStyle}>
                <div className={cellClassName + ' py-dataGrid-header-text-group'}>
                    {children}
                </div>
                {resizer}
            </Table.Td>
        )
    } else
        return (
            <Table.Td key={header.id} colSpan={header.colSpan}
                className='py-baseGrid-header-cell'
                style={widthStyle}>
                <div
                    // style={{ width: width }}
                    className={cellClassName}
                    onClick={() => { if (!disableColumn) sortColumn() }}>
                    {children}
                    {sortOrder === 'asc' ? (
                        <LuArrowUpDown className='py-baseGrid-header-sort-icon' />
                    ) :
                        sortOrder === 'desc' ? (
                            <LuArrowDownUp className='py-baseGrid-header-sort-icon' />
                        ) : null}

                </div>
                {resizer}
            </Table.Td>
        )
}

export default ColumnHeader;
