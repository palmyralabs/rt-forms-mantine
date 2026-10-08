import { Ref, useImperativeHandle } from 'react';
import './TextView.css';
import { useFieldManager, FieldDecorator } from '@palmyralabs/rt-forms';
import { ISelectDefinition, TextViewAttributeDefinition } from '../types';
import { getFieldLabel } from '../util'
import { getVariantClassName } from './variantClassName';
import { CopyableValue } from './CopyableValue';

function MantineOptionsView(props: ISelectDefinition & TextViewAttributeDefinition & { ref?: Ref<any> }) {
    const fieldManager = useFieldManager(props.attribute, props);
    const textAlign: any = props.textAlign || 'left';
    const variant: string = props.variant || 'standard';

    const { getValue } = fieldManager;

    useImperativeHandle(props.ref, () => ({
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
                            <CopyableValue copyable={props.copyable} value={props.options[getValue()]}>{props.options[getValue()] || '--'}</CopyableValue>
                        </div>
                    </div> :
                    <div style={{ textAlign: textAlign }}>
                        <div className={getVariantClassName(variant, props.title)}>
                            <CopyableValue copyable={props.copyable} value={props.options[getValue()]}>{props.options[getValue()] || '--'}</CopyableValue>
                        </div>
                    </div>
                }
            </FieldDecorator>}
        </>
    );
}

export { MantineOptionsView };
