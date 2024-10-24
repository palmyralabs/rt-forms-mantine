import { IDatePickerDefinition } from './types';
import { IDateField } from '@palmyralabs/rt-forms';
import { DatePickerInputProps } from '@mantine/dates';
declare const MantineDatePickerInput: import('react').ForwardRefExoticComponent<Omit<IDatePickerDefinition, "displayPattern"> & Omit<DatePickerInputProps<"default">, "defaultValue"> & import('react').RefAttributes<IDateField>>;
export { MantineDatePickerInput };
