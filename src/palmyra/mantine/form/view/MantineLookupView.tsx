import { forwardRef, useRef, useImperativeHandle } from 'react';
import './TextView.css';
import { ILookupViewOptions, TextViewAttributeDefinition } from '../types';
import { getFieldLabel } from '../util';
import { getFieldHandler, useFieldManager, FieldDecorator } from '@palmyralabs/rt-forms';
import { getVariantClassName } from './variantClassName';

const MantineLookupView = forwardRef(function MantineLabelDisplay(props: ILookupViewOptions & TextViewAttributeDefinition, ref) {

    const fieldManager = useFieldManager(props.attribute, props);
    const { getValue, mutateOptions } = fieldManager;
    const currentRef: any = ref ? ref : useRef(null);
    const data = getValue();
    const lookupOptionList = props.lookupOptions;
    const labelKey = lookupOptionList?.labelAttribute || 'name';
    const textAlignment: any = props.textAlign || 'left';
    const variant: string = props.variant || 'standard';
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

    var {lookupOptions, textAlign, ...options} = fieldManager.getFieldProps();


    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            {(props.label) ?
                <div {...options} className='text-view-field-container'>
                    <div className="text-view-label">{props.label}</div>
                    <div className={getVariantClassName(variant, props.label)}>{data[labelKey] || '--'}</div>
                </div> :
                <div {...options} style={{ textAlign: textAlignment }}>
                    <div className={getVariantClassName(variant, props.title)}>
                        {data[labelKey] || '--'}
                    </div>
                </div>
            }
        </FieldDecorator>}
    </>);
});

export { MantineLookupView };