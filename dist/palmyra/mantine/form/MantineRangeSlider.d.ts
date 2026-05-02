import { RangeSliderProps } from '@mantine/core';
import { ISliderField } from '@palmyralabs/rt-forms';
import { Ref } from 'react';
import { ISliderDefinition } from './types';
declare function MantineRangeSlider(props: ISliderDefinition & Omit<RangeSliderProps, 'ref'> & {
    ref?: Ref<ISliderField>;
}): import("react/jsx-runtime").JSX.Element;
export { MantineRangeSlider };
