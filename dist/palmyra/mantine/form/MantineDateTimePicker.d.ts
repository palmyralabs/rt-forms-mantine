import { DateTimePickerProps } from '@mantine/dates';
import { IDateField } from '@palmyralabs/rt-forms';
import { Ref } from 'react';
import { IDatePickerDefinition } from './types';
declare function MantineDateTimePicker(props: Omit<IDatePickerDefinition, 'displayPattern'> & Omit<DateTimePickerProps, 'defaultValue' | 'ref'> & {
    ref?: Ref<IDateField>;
}): import("react/jsx-runtime").JSX.Element;
export { MantineDateTimePicker };
