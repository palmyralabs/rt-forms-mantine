import { TimeInputProps } from '@mantine/dates';
import { IDateField } from '@palmyralabs/rt-forms';
import { Ref } from 'react';
import { IDatePickerDefinition } from './types';
declare function MantineTimeInput(props: Omit<IDatePickerDefinition, 'displayPattern'> & Omit<TimeInputProps, 'ref'> & {
    ref?: Ref<IDateField>;
}): import("react/jsx-runtime").JSX.Element;
export { MantineTimeInput };
