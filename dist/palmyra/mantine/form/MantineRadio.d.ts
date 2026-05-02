import { RadioProps } from '@mantine/core';
import { IRadioGroupField } from '@palmyralabs/rt-forms';
import { Ref } from 'react';
import { IRadioDefinition } from './types';
declare function MantineRadio(props: IRadioDefinition & Omit<RadioProps, 'ref'> & {
    ref?: Ref<IRadioGroupField>;
}): import("react/jsx-runtime").JSX.Element;
export { MantineRadio };
