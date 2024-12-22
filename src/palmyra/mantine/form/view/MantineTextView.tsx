import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { getFieldHandler, ITextField, useFieldManager, FieldDecorator } from '@palmyralabs/rt-forms';
import { getFieldLabel } from '../util'
import { ITextFieldDefinition } from '../types';
import { getVariantClassName } from './variantClassName';

interface TextViewAttributeDefinition {
    textAlign?: 'left' | 'right' | 'center',
    variant?: 'standard' | 'outlined' | 'filled'
}

const MantineTextView = forwardRef(function MantineTextView(props: ITextFieldDefinition & TextViewAttributeDefinition,
    ref: MutableRefObject<ITextField>) {

    const fieldManager = useFieldManager(props.attribute, props);
    const { getValue, mutateOptions } = fieldManager;
    const currentRef = ref ? ref : useRef<ITextField>(null);
    const textAlign: any = props.textAlign || 'left';
    const inputRef: any = useRef(null);
    const variant = props.variant || 'standard';

    useImperativeHandle(currentRef, () => {
        const handler = getFieldHandler(fieldManager)
        return {
            ...handler,
            focus() {
                inputRef.current.focus();
            }
        };
    }, [fieldManager]);

    var options = fieldManager.getFieldProps();

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            {(props.label) ?
                <div {...options} className='text-view-field-container'>
                    <div className="text-view-label">{props.label}</div>
                    <div className={getVariantClassName(variant, props.label)}>{getValue() || '--'}</div>
                </div> :
                <div {...options} style={{ textAlign: textAlign }}>
                    <div className={getVariantClassName(variant, props.title)}>
                        {getValue() || "--"}
                    </div>
                </div>
            }
        </FieldDecorator>}
    </>
    );
});

export { MantineTextView };