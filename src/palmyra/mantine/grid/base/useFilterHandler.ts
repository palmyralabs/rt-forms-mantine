import { delayGenerator } from "@palmyralabs/ts-utils";
import { Dispatch, SetStateAction } from "react";

type FilterType = 'text' | 'raw' | 'lookup' | 'select' | 'checkbox';

const delay = delayGenerator(300);

export const useFilterHandler = <T extends Record<string, any>>(
    setFilter: Dispatch<SetStateAction<T>>
) => {
    const updateFilter = (key: keyof T, value: string | boolean) => {
        setFilter((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleFilterChange =
        (key: keyof T, type: FilterType, mapValue?: (val: any, data?: any) => string | boolean) =>
            (a: any, b?: any) => {
                let value: string | boolean = '';

                if (type === 'text') {
                    value = a?.target?.value || '';
                    if (typeof value === 'string' && value !== '') {
                        if (!value.endsWith('*')) value += '*';
                        value = '*' + value;
                    }
                } else if (type === 'raw') {
                    value = a?.target?.value || '';
                } else if (type === 'select') {
                    value = a || '';
                } else if (type === 'lookup') {
                    value = b?.id || '';
                } else if (type === 'checkbox') {
                    value = a?.target?.checked || false;
                }

                if (mapValue) {
                    value = mapValue(value, b);
                }

                delay(() => updateFilter(key, value));
            };

    return { handleFilterChange };
};
