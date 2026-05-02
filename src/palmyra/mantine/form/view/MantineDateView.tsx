import dayjs from "dayjs";
import { Ref, useImperativeHandle, useRef } from 'react';
import './TextView.css';
import { FieldDecorator, IDateField, getFieldHandler, useFieldManager } from '@palmyralabs/rt-forms';
import { getFieldLabel } from '../util';
import { IDatePickerDefinition, TextViewAttributeDefinition } from '../types';
import { getVariantClassName } from "./variantClassName";
import { getDefaultDatePattern } from "../DateUtils";

function MantineDateView(props: IDatePickerDefinition & TextViewAttributeDefinition & { ref?: Ref<IDateField> }) {

    const fieldManager = useFieldManager(props.attribute, props);
    const { getValue, mutateOptions } = fieldManager;
    const value = getValue();
    const textAlignment: any = props.textAlign || 'left';
    const variant: string = props.variant || 'standard';
    const serverFormat = props.serverPattern || getDefaultDatePattern();
    const displayFormat: string = props.displayPattern || props.serverPattern || getDefaultDatePattern();
    const inputRef: any = useRef(null);

    useImperativeHandle(props.ref, () => {
        const handler = getFieldHandler(fieldManager)
        return {
            ...handler,
            focus() {
                inputRef.current.focus();
            },
            setCurrent() { }
        };
    }, [fieldManager]);

    const parseDateFromString = (value: any) => {
        if (null == value || undefined == value || '' == value)
            return null;

        const date = dayjs(value, serverFormat);
        if (date.isValid())
            return date;
    }


    const formatValue = (value: any) => {
        if (!value) {
            return "";
        }
        if (value) {
            const date = parseDateFromString(value);
            if (null != date) {
                return date.format(displayFormat);
            }

            console.error("Invalid date provided:", value);
            return "";
        }
    };

    var { datePattern, serverPattern, textAlign,
        displayPattern, ...options } = fieldManager.getFieldProps();

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            {(props.label) ?
                <div {...options} className='text-view-field-container'>
                    <div className="text-view-label">{props.label}</div>
                    <div className={getVariantClassName(variant, props.label)}>{formatValue(value) || "--"}</div>
                </div> :
                <div {...options} style={{ textAlign: textAlignment }}>
                    <div className={getVariantClassName(variant, props.title)}>
                        {formatValue(value) || "--"}
                    </div>
                </div>
            }
        </FieldDecorator>}
    </>);
}

export { MantineDateView };
