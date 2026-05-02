import { PinInputProps } from '@mantine/core';
import { ITextField } from '@palmyralabs/rt-forms';
import { Ref } from 'react';
import { IPinInputDefinition } from './types';
declare function MantinePinInput(props: IPinInputDefinition & Omit<PinInputProps, 'ref'> & {
    ref?: Ref<ITextField>;
}): import("react/jsx-runtime").JSX.Element;
export { MantinePinInput };
