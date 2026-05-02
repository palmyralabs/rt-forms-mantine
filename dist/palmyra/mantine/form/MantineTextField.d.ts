import { TextInputProps } from '@mantine/core';
import { ITextField } from '@palmyralabs/rt-forms';
import { Ref } from 'react';
import { ITextFieldDefinition } from './types';
declare function MantineTextField(props: ITextFieldDefinition & Omit<TextInputProps, 'ref'> & {
    ref?: Ref<ITextField>;
}): import("react/jsx-runtime").JSX.Element;
export { MantineTextField };
