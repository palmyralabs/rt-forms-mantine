import { IDatePickerDefinition } from './types';
import { IDateField } from '@palmyralabs/rt-forms';
import { CalendarProps } from '@mantine/dates';

declare const MantineCalendar: import('react').ForwardRefExoticComponent<IDatePickerDefinition & CalendarProps & import('react').RefAttributes<IDateField>>;
export { MantineCalendar };
