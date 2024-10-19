import { IDatePickerDefinition } from './types';
import { IDateField } from '@palmyralabs/rt-forms';
import { CalendarProps } from '@mantine/dates';
declare const MantineCalendar: import('react').ForwardRefExoticComponent<Omit<IDatePickerDefinition, "displayPattern"> & CalendarProps & import('react').RefAttributes<IDateField>>;
export { MantineCalendar };
