import dayjs from "dayjs";
import { forwardRef, useImperativeHandle, useRef } from 'react';
import './TextView.css';
import { FieldDecorator, IDateField, getFieldHandler, useFieldManager } from '@palmyralabs/rt-forms';
import { getFieldLabel } from '../util';
import { IDatePickerDefinition, TextViewAttributeDefinition } from '../types';

const MantineDateView = forwardRef(function MantineLabelDisplay(props: IDatePickerDefinition & TextViewAttributeDefinition, ref) {

    const fieldManager = useFieldManager(props.attribute, props);
    const { getValue, mutateOptions } = fieldManager;
    const currentRef: any = ref ? ref : useRef<IDateField>(null);
    const value = getValue();
    const textAlign: any = props.textAlign || 'left';
    const variant: string = props.variant || 'standard';
    const displayFormat: string = props.displayPattern || "DD-MM-YYYY";
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
        const formats = ['YYYY-MM-DD', 'DD-MM-YYYY', 'MM-DD-YYYY', 'DD-YYYY-MM', 'YYYY/MM/DD', 'DD/MM/YYYY',
            "YYYY-MM-DD'T'HH:mm:ss", "DD-MM-YYYY HH:mm", "MM-DD-YYYY h:mm a", "YYYY/MM/DD HH:mm:ss", "DD/MM/YYYY HH:mm"
        ];
        if (null == value || undefined == value || '' == value)
            return null;

        for (const format of formats) {
            const date = dayjs(value, format);
            if (date.isValid())
                return date;
        }
        return null;
    };

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
                    <div className={(variant == 'standard') ? "text-view-value" : "text-view-value-outlined"}>{formatValue(value)}</div>
                </div> :
                <div {...options} style={{ textAlign: textAlign }}>
                    {formatValue(value)}
                </div>
            }
        </FieldDecorator>}
    </>);
});

export { MantineDateView };