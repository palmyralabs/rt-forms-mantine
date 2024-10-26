import {
    __InputStylesNames, Button, NumberInputProps
} from '@mantine/core';
import { PickerInputBase } from './PickerInputBase';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';


const NumberPickerInput = (props: NumberInputProps) => {

    const [value, setValue] = useState<string>('');
    const [dropdownOpened, dropdownHandlers] = useDisclosure(false)

    const onClear = () => { }

    const append = (c: string) => {
        setValue((v) => v + c)
    }

    const NumberButton = (props: { label: string, value: number }) => {
        return <Button onClick={() => append(props.label)}>{props.label}</Button>
    }

    const Action = (props:{label:string}) => {
        return <Button>{props.label}</Button>
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

            <div>
                <table>
                    <tr>
                        <NumberButton label='1' value={1} />
                        <NumberButton label='2' value={2} />
                        <NumberButton label='3' value={3} />
                    </tr>

                    <tr>
                        <NumberButton label='4' value={4} />
                        <NumberButton label='5' value={5} />
                        <NumberButton label='6' value={6} />
                    </tr>

                    <tr>
                        <NumberButton label='7' value={7} />
                        <NumberButton label='8' value={8} />
                        <NumberButton label='9' value={9} />
                    </tr>

                    <tr>
                        <NumberButton label='.' value={1} />
                        <NumberButton label='0' value={0} />
                        <Action label='D'/>
                    </tr>
                </table>
            </div>

        </PickerInputBase>
    );
};



export { NumberPickerInput }