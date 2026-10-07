import { NumberInputProps } from '@mantine/core';
import { ITextField } from '@palmyralabs/rt-forms';
import { Ref } from 'react';
import { ITextFieldDefinition } from './types';
import { MantineNumberField } from './MantineNumberField';

function MantineCurrencyField(props: ITextFieldDefinition & Omit<NumberInputProps, 'ref'> & { ref?: Ref<ITextField> }) {
    const RUPEE = "₹";
    return (
        <MantineNumberField
            attribute={props.attribute || ''}
            {...props}
            styles={{
                input: {
                    textAlign: 'right',
                }
            }}
            prefix={RUPEE}
            placeholder={props.placeholder || 'INR'}
            rightSection={props.rightSection || <></>}
            rightSectionWidth={props.rightSection ? '' : 10}
            thousandSeparator={props.thousandSeparator || ","}
            thousandsGroupStyle={props.thousandsGroupStyle || "lakh"}
        />
    );
}

export { MantineCurrencyField };
