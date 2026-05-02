import { MultiSelectProps } from '@mantine/core';
import { ISelectField } from '@palmyralabs/rt-forms';
import { Ref } from 'react';
import { ISelectDefinition } from './types';
declare function MantineMultiSelect(props: ISelectDefinition & Omit<MultiSelectProps, 'ref'> & {
    ref?: Ref<ISelectField>;
}): import("react/jsx-runtime").JSX.Element;
export { MantineMultiSelect };
