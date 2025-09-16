import { Button } from "@mantine/core";
import {
    ColumnDefinition, DataGridPluginOptions,
    FieldGroupContainer, IForm, PalmyraForm, convertToField
} from "@palmyralabs/rt-forms";
import { setValueByKey } from "@palmyralabs/ts-utils";
import { RefObject, useRef } from "react";
import { TbFilterShare, TbRefresh } from "react-icons/tb";
import getField from "./FieldGenerator";
import './FilterForm.css';

interface FilterOptions extends DataGridPluginOptions {
    onClose?: (filter: any) => void,
    column?: 1 | 2 | 3,
    defaultFilter?: Record<string, any>
}

const FilterForm = (o: FilterOptions) => {
    const formattedFilterValue = o.queryRef.current.getCurrentFilter() || {};
    const filterRef: RefObject<IForm> = useRef<IForm>(null);
    const defaultFilter = o.defaultFilter || {};

    const columns: ColumnDefinition[] = convertToField(o.columns);

    const getFilterColumns = () => {
        return columns.map((column: ColumnDefinition, idx) => {
            return getField(column, column.label);
        });
    }

    const onClose = o.onClose || ((d) => { });

    Object.keys(defaultFilter || {}).map((k) => {
        const v = defaultFilter[k];
        setValueByKey(k, formattedFilterValue, v);
    })

    const setFilter = (d) => {
        if (o.queryRef.current) {
            o.queryRef.current.setFilter(d)
            onClose(d);
        }
        else
            console.warn('Query reference not found');
    }

    const reset = () => {
        setFilter({});
    }

    const assignFilter = () => {
        const formData = filterRef.current.getData();
        var filterData = {};

        Object.entries(formData).map(([key, value]) => {
            if (value && value != '') {
                filterData[key] = value;
            }
        })

        if (setFilter) {
            setFilter(filterData);
        };
    };

    const fieldGroupColumn = o.column || 2;

    return <div onMouseDown={(e) => e.stopPropagation()}>
        <PalmyraForm formData={formattedFilterValue} ref={filterRef}>
            <FieldGroupContainer columns={fieldGroupColumn}>
                {getFilterColumns()}
            </FieldGroupContainer>
        </PalmyraForm>
        <div className="py-filter-button-container">
            <Button className='py-reset-button' onClick={reset} leftSection={<TbRefresh size={14} />}>
                Reset
            </Button>
            <Button className='py-filter-button' onClick={assignFilter} leftSection={<TbFilterShare size={14} />}>
                Filter
            </Button>
        </div>
    </div>
}

export { FilterForm };
