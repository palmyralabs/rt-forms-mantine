import { NumberInputProps } from '@mantine/core';
import { ITextField } from '@palmyralabs/rt-forms';
import { Ref } from 'react';
import { ITextFieldDefinition } from './types';
declare function MantineNumberPickerInput(props: ITextFieldDefinition & Omit<NumberInputProps, 'ref'> & {
    ref?: Ref<ITextField>;
}): import("react/jsx-runtime").JSX.Element;
export { MantineNumberPickerInput };
