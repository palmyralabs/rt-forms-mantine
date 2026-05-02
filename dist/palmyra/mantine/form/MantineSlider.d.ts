import { SliderProps } from '@mantine/core';
import { ISliderField } from '@palmyralabs/rt-forms';
import { Ref } from 'react';
import { ISliderDefinition } from './types';
declare function MantineSlider(props: ISliderDefinition & Omit<SliderProps, 'ref'> & {
    ref?: Ref<ISliderField>;
}): import("react/jsx-runtime").JSX.Element;
export { MantineSlider };
