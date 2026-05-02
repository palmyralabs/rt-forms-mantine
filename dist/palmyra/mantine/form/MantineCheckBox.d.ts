import { CheckboxProps } from '@mantine/core';
import { ICheckBoxField } from '@palmyralabs/rt-forms';
import { Ref } from 'react';
import { ICheckBoxDefinition } from './types';
declare function MantineCheckBox(props: Omit<CheckboxProps, 'ref'> & ICheckBoxDefinition & {
    ref?: Ref<ICheckBoxField>;
}): import("react/jsx-runtime").JSX.Element;
export { MantineCheckBox };
