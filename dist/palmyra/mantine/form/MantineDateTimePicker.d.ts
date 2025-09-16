import { DateTimePickerProps } from '@mantine/dates';
import { IDateField } from '@palmyralabs/rt-forms';
import { IDatePickerDefinition } from './types';
declare const MantineDateTimePicker: import('react').ForwardRefExoticComponent<Omit<IDatePickerDefinition, "displayPattern"> & Omit<DateTimePickerProps, "defaultValue"> & import('react').RefAttributes<IDateField>>;
export { MantineDateTimePicker };
