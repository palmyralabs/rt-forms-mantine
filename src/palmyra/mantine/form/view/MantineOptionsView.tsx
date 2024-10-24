import { useRef, useImperativeHandle, forwardRef } from 'react';
import './TextView.css';
import { ISelectField, useFieldManager, FieldDecorator } from '@palmyralabs/rt-forms';
import { ISelectDefinition, TextViewAttributeDefinition } from '../types';
import { getFieldLabel } from '../util'

const MantineOptionsView = forwardRef(function MantineOptionsView(props: ISelectDefinition & TextViewAttributeDefinition, ref) {
    const fieldManager = useFieldManager(props.attribute, props);
    const currentRef = ref ? ref : useRef<ISelectField>(null);
    const textAlign: any = props.textAlign || 'left';
    const variant: string = props.variant || 'standard';

    const { getValue } = fieldManager;

    useImperativeHandle(currentRef, () => ({
        getValue
    }), [fieldManager]);

    return (
        <>{!fieldManager.mutateOptions.visible &&
            <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
                customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
                <div className='text-view-field-container'>
                    <div className="text-view-label">{props.label}</div>
                    <div style={{ textAlign: textAlign }}
                        className={props.label ? (variant === 'outlined' ? "text-view-value-outlined" : "text-view-value") : ''}>
                        {props.options[getValue()] || '--'}
                    </div>
                </div>
            </FieldDecorator>}
        </>
    );
});

export { MantineOptionsView };
