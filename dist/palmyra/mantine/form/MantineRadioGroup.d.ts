import { RadioProps } from '@mantine/core';
import { IRadioGroupField } from '@palmyralabs/rt-forms';
import { Ref } from 'react';
import { IRadioGroupDefinition } from './types';
declare function MantineRadioGroup(props: IRadioGroupDefinition & Omit<RadioProps, 'ref'> & {
    ref?: Ref<IRadioGroupField>;
}): import("react/jsx-runtime").JSX.Element;
export { MantineRadioGroup };
