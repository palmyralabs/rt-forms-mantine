import {
    __InputStylesNames, Button, NumberInputProps
} from '@mantine/core';
import { PickerInputBase } from './PickerInputBase';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { PiBackspaceBold } from "react-icons/pi";
import './NumberPickerInput.css';

const numberButtons = [
    [{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }],
    [{ label: '4', value: 4 }, { label: '5', value: 5 }, { label: '6', value: 6 }],
    [{ label: '7', value: 7 }, { label: '8', value: 8 }, { label: '9', value: 9 }],
    [{ label: '.', value: '.' }, { label: '0', value: 0 },
    { label: <PiBackspaceBold className='py-number-btn-icon' />, value: 'D', isAction: true }],
    [{ label: 'Clear All', value: 'CA', isAction: true }]
];

const NumberPickerInput = (props: NumberInputProps) => {

    const [value, setValue] = useState<string>('');
    const [dropdownOpened, dropdownHandlers] = useDisclosure(false)

    const onClear = () => {
        setValue('');
    }

    const append = (c: string) => {
        if (c === 'D') {
            setValue((v) => v.slice(0, -1));
        } else if (c === 'CA') {
            onClear();
        } else {
            setValue((v) => v + c);
        }
    }

    const NumberButton = (props: { label: string, value: number }) => {
        return <Button onClick={() => append(props.label)} className='py-number-btn'>{props.label}</Button>
    }

    const Action = (props: { label: string, value: string }) => {
        return <Button onClick={() => append(props.value)} className='py-number-btn'>{props.label}</Button>
    }

    return (
        <PickerInputBase
            formattedValue={value}
            dropdownOpened={dropdownOpened}
            dropdownHandlers={dropdownHandlers}
            onClear={onClear}
            wrapperProps={{ label: props.label, error: props.error }}
            shouldClear={false}
            value={value}
            dropdownType={'popover'}
            type={'PickerInputBase'}
            __staticSelector="DatePickerInput">

            <div className='py-number-picker-container'>
                {numberButtons.map((row: any, rowIndex: number) => (
                    <div key={rowIndex} className='py-number-picker'>
                        {row.map((button: any, buttonIndex: number) => (
                            button.isAction ? (
                                <Action key={buttonIndex} label={button.label} value={button.value} />
                            ) : (
                                <NumberButton key={buttonIndex} label={button.label} value={button.value} />
                            )
                        ))}
                    </div>
                ))}
            </div>

        </PickerInputBase>
    );
};



export { NumberPickerInput }