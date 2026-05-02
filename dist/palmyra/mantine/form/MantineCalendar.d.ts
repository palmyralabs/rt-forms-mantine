import { CalendarProps } from '@mantine/dates';
import { IDateField } from '@palmyralabs/rt-forms';
import { Ref } from 'react';
import { IDatePickerDefinition } from './types';
declare function MantineCalendar(props: Omit<IDatePickerDefinition, 'displayPattern'> & Omit<CalendarProps, 'ref'> & {
    ref?: Ref<IDateField>;
}): import("react/jsx-runtime").JSX.Element;
export { MantineCalendar };
