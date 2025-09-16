import { CalendarProps } from '@mantine/dates';
import { IDateField } from '@palmyralabs/rt-forms';
import { IDatePickerDefinition } from './types';
declare const MantineCalendar: import('react').ForwardRefExoticComponent<Omit<IDatePickerDefinition, "displayPattern"> & CalendarProps & import('react').RefAttributes<IDateField>>;
export { MantineCalendar };
