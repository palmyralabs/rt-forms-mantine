import { NumberInputProps } from '@mantine/core';
import { ITextField } from '@palmyralabs/rt-forms';
import { Ref } from 'react';
import { ITextFieldDefinition } from './types';
import { MantineNumberField } from './MantineNumberField';

type GroupStyle = 'thousand' | 'lakh' | 'wan' | 'none';

interface ICurrencyConfig {
    symbol: string;
    group: GroupStyle;
    decimals: number;
    separator: string;
    decimalSeparator: string;
}

const CURRENCIES: Record<string, ICurrencyConfig> = {
    INR: { symbol: '₹', group: 'lakh', decimals: 2, separator: ',', decimalSeparator: '.' },
    USD: { symbol: '$', group: 'thousand', decimals: 2, separator: ',', decimalSeparator: '.' },
    EUR: { symbol: '€', group: 'thousand', decimals: 2, separator: '.', decimalSeparator: ',' },
    GBP: { symbol: '£', group: 'thousand', decimals: 2, separator: ',', decimalSeparator: '.' },
    JPY: { symbol: '¥', group: 'thousand', decimals: 0, separator: ',', decimalSeparator: '.' },
    CNY: { symbol: '¥', group: 'wan', decimals: 2, separator: ',', decimalSeparator: '.' },
    AED: { symbol: 'د.إ ', group: 'thousand', decimals: 2, separator: ',', decimalSeparator: '.' },
    SGD: { symbol: 'S$', group: 'thousand', decimals: 2, separator: ',', decimalSeparator: '.' }
};

type CurrencyCode = 'INR' | 'USD' | 'EUR' | 'GBP' | 'JPY' | 'CNY' | 'AED' | 'SGD';

interface ICurrencyExtra {
    currency?: CurrencyCode | (string & {});
    symbol?: string;
    decimals?: number;
    locale?: string;
}

function MantineCurrencyField(props: ITextFieldDefinition & ICurrencyExtra & Omit<NumberInputProps, 'ref'> & { ref?: Ref<ITextField> }) {
    const cur = CURRENCIES[(props.currency || 'INR').toUpperCase()] || CURRENCIES.INR;
    const symbol = props.symbol != null ? props.symbol : cur.symbol;
    const group = (props.thousandsGroupStyle as GroupStyle) || cur.group;
    const decimals = props.decimals != null ? props.decimals : cur.decimals;
    const separator = props.thousandSeparator != null ? props.thousandSeparator : cur.separator;
    const decimalSeparator = props.decimalSeparator != null ? props.decimalSeparator : cur.decimalSeparator;

    const { currency, symbol: _s, decimals: _d, locale: _l, ...rest } = props as any;

    return (
        <MantineNumberField
            attribute={props.attribute || ''}
            {...rest}
            styles={{ input: { textAlign: 'right' } }}
            prefix={symbol}
            placeholder={props.placeholder || (props.currency || 'INR')}
            rightSection={props.rightSection || <></>}
            rightSectionWidth={props.rightSection ? '' : 10}
            thousandSeparator={separator as any}
            thousandsGroupStyle={group}
            decimalScale={props.decimalScale != null ? props.decimalScale : decimals}
            decimalSeparator={decimalSeparator}
        />
    );
}

export { MantineCurrencyField };
export type { ICurrencyExtra, CurrencyCode };
