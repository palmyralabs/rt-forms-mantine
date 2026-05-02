import { SwitchProps } from '@mantine/core';
import { ISwitchField } from '@palmyralabs/rt-forms';
import { Ref } from 'react';
import { ISwitchDefinition } from './types';
declare function MantineSwitch(props: ISwitchDefinition & Omit<SwitchProps, 'ref'> & {
    ref?: Ref<ISwitchField>;
}): import("react/jsx-runtime").JSX.Element;
export { MantineSwitch };
