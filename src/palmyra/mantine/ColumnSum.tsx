import type { ColumnDefinition } from "@palmyralabs/rt-forms";
import { ReactNode } from "react";
import './ColumnSum.css';

const RUPEE = "₹";

type AggregateType = 'sum' | 'avg' | 'min' | 'max' | 'count';

interface ColumnSumOptions {
    aggregate?: AggregateType;
    isPercentageAverage?: boolean;
    useNumberFormat?: boolean;
    showLabel?: boolean;
    decimals?: number;
    currency?: string;
    locale?: string;
    label?: string;
    className?: string;
    format?: (value: number, column: ColumnDefinition) => ReactNode;
}

const computeAggregate = (values: number[], aggregate: AggregateType): number => {
    switch (aggregate) {
        case 'avg':
            return values.length > 0 ? values.reduce((a, b) => a + b, 0) / values.length : 0;
        case 'min':
            return values.length > 0 ? Math.min(...values) : 0;
        case 'max':
            return values.length > 0 ? Math.max(...values) : 0;
        case 'count':
            return values.length;
        case 'sum':
        default:
            return values.reduce((a, b) => a + b, 0);
    }
};

function columnSum(arg1?: boolean | ColumnSumOptions, useNumberFormat: boolean = false, showLabel: boolean = true) {
    const opts: ColumnSumOptions = (arg1 && typeof arg1 === 'object')
        ? arg1
        : { isPercentageAverage: !!arg1, useNumberFormat, showLabel };

    const aggregate: AggregateType = opts.aggregate || (opts.isPercentageAverage ? 'avg' : 'sum');
    const decimals = opts.decimals != null ? opts.decimals : 2;
    const locale = opts.locale || 'en-IN';
    const currency = opts.currency != null ? opts.currency : RUPEE;
    const withLabel = opts.showLabel !== false;

    return (column: ColumnDefinition) => {
        return (info: any) => {
            const rows = info.table.getFilteredRowModel().rows;
            const values = rows
                .map((row: any) => Number(row.getValue(column.attribute)))
                .filter((v: any) => !isNaN(v) && v != null);

            const result = computeAggregate(values, aggregate);

            const columnTitle = column.label || '';
            const defaultLabel = opts.isPercentageAverage
                ? `Average ${columnTitle} :`
                : (columnTitle.includes("Total") ? columnTitle + " :" : "Total " + columnTitle + " :");
            const displayLabel = opts.label != null ? opts.label : defaultLabel;

            let displayValue: ReactNode;
            if (opts.format) {
                displayValue = opts.format(result, column);
            } else if (opts.isPercentageAverage) {
                displayValue = `${result.toFixed(decimals)}%`;
            } else if (aggregate === 'count') {
                displayValue = String(result);
            } else {
                const number = result.toLocaleString(locale, { minimumFractionDigits: 0, maximumFractionDigits: decimals });
                displayValue = opts.useNumberFormat ? number : currency + number;
            }

            const valueClass = 'py-columnsum-value' + (result < 0 ? ' py-columnsum-value-negative' : '');

            return (
                <div className={'py-columnsum' + (opts.className ? ' ' + opts.className : '')}>
                    {withLabel &&
                        <div>
                            <span className="py-columnsum-label">{displayLabel}</span>
                        </div>}
                    <div className={valueClass}>{displayValue}</div>
                </div>
            );
        };
    };
}

const staticFooter = (text: string = '') => {
    return () => {
        return () => (
            <div className="py-static-footer">{text}</div>
        );
    };
};

export { columnSum, staticFooter };
export type { ColumnSumOptions, AggregateType };
