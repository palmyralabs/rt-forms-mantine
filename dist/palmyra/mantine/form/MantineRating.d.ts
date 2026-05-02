import { RatingProps } from '@mantine/core';
import { IRatingField } from '@palmyralabs/rt-forms';
import { Ref } from 'react';
import { IRatingDefinition } from './types';
declare function MantineRating(props: IRatingDefinition & Omit<RatingProps, 'ref'> & {
    ref?: Ref<IRatingField>;
}): import("react/jsx-runtime").JSX.Element;
export { MantineRating };
