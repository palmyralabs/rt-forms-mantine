import { CheckboxProps } from '@mantine/core';
import { ICheckBoxField } from '@palmyralabs/rt-forms';
import { Ref } from 'react';
import { TriStateCheckBoxProps } from '../ext/TriStateCheckBox';
import { ICheckBoxDefinition } from './types';
declare function MantineTriStateCheckBox(props: Omit<TriStateCheckBoxProps & CheckboxProps, 'ref'> & ICheckBoxDefinition & {
    ref?: Ref<ICheckBoxField>;
}): import("react/jsx-runtime").JSX.Element;
export { MantineTriStateCheckBox };
