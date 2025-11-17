import { DatePickerInputProps } from '@mantine/dates';
import { IDateField } from '@palmyralabs/rt-forms';
import { IDatePickerDefinition } from './types';
declare const MantineDateInput: import('react').ForwardRefExoticComponent<Omit<IDatePickerDefinition, "displayPattern"> & Omit<DatePickerInputProps<"default">, "defaultValue"> & import('react').RefAttributes<IDateField>>;
export { MantineDateInput };
