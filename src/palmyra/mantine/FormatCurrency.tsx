import { CellGetter } from "@palmyralabs/rt-forms";
import { CellContext, RowData } from "@tanstack/react-table";

function formatCurrency(): CellGetter {
    return (info: CellContext<RowData, any>) => {
        let data = info.getValue();
        if (typeof data === 'string') {
            data = data.replace(/,/g, '');
        }
        data = Number(data);
        if (!isFinite(data) || data === 0) {
            return '0';
        }
        if (data !== 0) {
            const convertAmount = data.toFixed(0);
            const options = { minimumFractionDigits: 0, maximumFractionDigits: 0 };
            const formattedAmount = Number(convertAmount).toLocaleString('en-IN', options);
            return formattedAmount;
        } else {
            return '0';
        }
    };
}

function formatAmount(input: any, maxFraction?: number) {
    if (input !== 0 && input !== undefined && input !== null) {
        const options = { minimumFractionDigits: 0, maximumFractionDigits: maxFraction ? maxFraction : 0 };
        const formattedAmount = Number(input).toLocaleString('en-IN', options);
        return formattedAmount;
    } else {
        return '0';
    }
}

export { formatCurrency, formatAmount };