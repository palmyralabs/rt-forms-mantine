import dayjs from "dayjs";
import { forwardRef, useImperativeHandle, useRef } from 'react';
import './TextView.css';
import { FieldDecorator, IDateField, getFieldHandler, useFieldManager } from '@palmyralabs/rt-forms';
import { getFieldLabel } from '../util';
import { IDatePickerDefinition, TextViewAttributeDefinition } from '../types';
import { getVariantClassName } from "./variantClassName";

const MantineDateView = forwardRef(function MantineLabelDisplay(props: IDatePickerDefinition & TextViewAttributeDefinition, ref) {

    const fieldManager = useFieldManager(props.attribute, props);
    const { getValue, mutateOptions } = fieldManager;
    const currentRef: any = ref ? ref : useRef<IDateField>(null);
    const value = getValue();
    const textAlign: any = props.textAlign || 'left';
    const variant: string = props.variant || 'standard';
    const serverPattern = props.serverPattern || "YYYY-MM-DD"
    const displayFormat: string = props.displayPattern || props.serverPattern || "DD-MM-YYYY";
    const inputRef: any = useRef(null);

    useImperativeHandle(currentRef, () => {
        const handler = getFieldHandler(fieldManager)
        return {
            ...handler,
            focus() {
                inputRef.current.focus();
            }
        };
    }, [fieldManager]);

    const parseDateFromString = (value: any) => {
        if (null == value || undefined == value || '' == value)
            return null;

        const date = dayjs(value, serverPattern);
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

    var options = fieldManager.getFieldProps();

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            {(props.label) ?
                <div {...options} className='text-view-field-container'>
                    <div className="text-view-label">{props.label}</div>
                    <div className={getVariantClassName(variant, props.label)}>{formatValue(value) || "--"}</div>
                </div> :
                <div {...options} style={{ textAlign: textAlign }}>
                    <div className={getVariantClassName(variant, props.title)}>
                        {formatValue(value) || "--"}
                    </div>
                </div>
            }
        </FieldDecorator>}
    </>);
});

export { MantineDateView };