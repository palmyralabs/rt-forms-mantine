import { PasswordInputProps } from '@mantine/core';
import { ITextField } from '@palmyralabs/rt-forms';
import { Ref } from 'react';
import { ITextFieldDefinition } from './types';
declare function MantinePasswordField(props: ITextFieldDefinition & Omit<PasswordInputProps, 'ref'> & {
    ref?: Ref<ITextField>;
}): import("react/jsx-runtime").JSX.Element;
export { MantinePasswordField };
