import { DatePickerInputProps } from '@mantine/dates';
import { IDateField } from '@palmyralabs/rt-forms';
import { Ref } from 'react';
import { IDatePickerDefinition } from './types';
declare function MantineDateInput(props: Omit<IDatePickerDefinition, 'displayPattern'> & Omit<DatePickerInputProps, 'defaultValue' | 'ref'> & {
    ref?: Ref<IDateField>;
}): import("react/jsx-runtime").JSX.Element;
export { MantineDateInput };
