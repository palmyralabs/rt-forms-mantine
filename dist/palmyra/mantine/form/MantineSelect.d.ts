import { SelectProps } from '@mantine/core';
import { ISelectField } from '@palmyralabs/rt-forms';
import { Ref } from 'react';
import { ISelectDefinition } from './types';
declare function MantineSelect(props: ISelectDefinition & Omit<SelectProps, 'ref'> & {
    ref?: Ref<ISelectField>;
}): import("react/jsx-runtime").JSX.Element;
export { MantineSelect };
