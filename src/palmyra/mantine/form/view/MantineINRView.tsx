import { FieldDecorator, getFieldHandler, ITextField, useFieldManager } from '@palmyralabs/rt-forms';
import { forwardRef, MutableRefObject, useImperativeHandle, useRef, useState } from 'react';
import { GoNumber } from "react-icons/go";
import { MdOutlineCurrencyRupee, MdTextFields } from "react-icons/md";
import { formatAmount } from '../../FormatCurrency';
import { ITextFieldDefinition } from '../types';
import { getFieldLabel } from '../util';
import { getVariantClassName } from './variantClassName';
import { Tooltip } from '@mantine/core';

interface TextViewAttributeDefinition {
    textAlign?: 'left' | 'right' | 'center',
    variant?: 'standard' | 'outlined' | 'filled',
    valueFormat?: 'number' | 'text';
}

const MantineINRView = forwardRef(function MantineTextView(props: ITextFieldDefinition & TextViewAttributeDefinition,
    ref: MutableRefObject<ITextField>) {

    const fieldManager = useFieldManager(props.attribute, props);
    const { getValue, mutateOptions } = fieldManager;
    const currentRef = ref ? ref : useRef<ITextField>(null);
    const textAlign: any = props.textAlign || 'left';
    const inputRef: any = useRef(null);
    const variant = props.variant || 'standard';
    const valueFormat = props.valueFormat || 'text';

    useImperativeHandle(currentRef, () => {
        const handler = getFieldHandler(fieldManager)
        return {
            ...handler,
            focus() {
                inputRef.current.focus();
            }
        };
    }, [fieldManager]);

    const [showInWords, setShowInWords] = useState(valueFormat === 'text' ? true : false);
    const value = getValue();

    const toggleView = () => {
        setShowInWords(!showInWords);
    };
    const formatAmountText = (input: any) => {
        if (input >= 10000000) {
            const crores = (input / 10000000).toFixed(2);
            const cr = Number(crores);
            return `${crores} Crore${cr > 1 ? 's' : ''}`;
        } else if (input >= 100000) {
            const lakhs = (input / 100000).toFixed(2);
            const lak = Number(lakhs);
            return `${lakhs} Lakh${lak > 1 ? 's' : ''}`;
        } else if (input >= 1000) {
            const thousands = (input / 1000).toFixed(2);
            const thou = Number(thousands);
            return `${thou} Thousand`
        } else if (input >= 100) {
            const hundreds = (input / 100).toFixed(2);
            const hun = Number(hundreds)
            return `${hun} Hundred`
        } else if (input >= 1) {
            const rupee = input.toFixed(0);
            const rupe = Number(rupee);
            return `${rupe} Rupee${rupe > 1 ? 's' : ''}`;
        }
        formatAmount(input)
    };


    var options = fieldManager.getFieldProps();

    const INRField = <>
        <Tooltip label={showInWords ? 'Switch to Digits' : 'Switch to Words'} withArrow>
            <div onClick={toggleView} style={{ cursor: 'pointer' }}>
                {showInWords ? <GoNumber /> : <MdTextFields />}
            </div>
        </Tooltip>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <MdOutlineCurrencyRupee />
            {showInWords ? formatAmountText(value) : formatAmount(value)}
        </div>
    </>;


    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            {(props.label) ?
                <div {...options} className='text-view-field-container'>
                    <div className="text-view-label">{props.label}</div>
                    <div className={getVariantClassName(variant, props.label)} style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding:'0 10px'
                    }}>
                        {INRField}
                    </div>
                </div> :
                <div {...options} style={{ textAlign: textAlign }}>
                    <div className={getVariantClassName(variant, props.title)} style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding:'0 10px'
                    }}>
                        {INRField}
                    </div>
                </div>
            }
        </FieldDecorator>}
    </>
    );
});

export { MantineINRView };
