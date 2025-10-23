import { CellGetter } from '@palmyralabs/rt-forms';
declare function formatCurrency(): CellGetter;
declare function formatAmount(input: any, maxFraction?: number): string;
export { formatCurrency, formatAmount };
