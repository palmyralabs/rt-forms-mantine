import { useRef, useImperativeHandle, forwardRef } from 'react';
import './TextView.css';
import { ISelectField, useFieldManager, FieldDecorator } from '@palmyralabs/rt-forms';
import { ISelectDefinition, TextViewAttributeDefinition } from '../types';
import { getFieldLabel } from '../util'
import { getVariantClassName } from './variantClassName';

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
                {(props.label) ?
                    <div className='text-view-field-container'>
                        <div className="text-view-label">{props.label}</div>
                        <div style={{ textAlign: textAlign }}
                            className={getVariantClassName(variant, props.label)}>
                            {props.options[getValue()] || '--'}
                        </div>
                    </div> :
                    <div style={{ textAlign: textAlign }}>
                        <div className={getVariantClassName(variant, props.title)}>
                            {props.options[getValue()] || '--'}
                        </div>
                    </div>
                }
            </FieldDecorator>}
        </>
    );
});

export { MantineOptionsView };
