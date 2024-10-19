import { IDatePickerDefinition } from './types';
import { IDateField } from '@palmyralabs/rt-forms';
import { DatePickerInputProps } from '@mantine/dates';
declare const MantineDatePickerInput: import('react').ForwardRefExoticComponent<Omit<IDatePickerDefinition, "displayPattern"> & DatePickerInputProps<"default"> & import('react').RefAttributes<IDateField>>;
export { MantineDatePickerInput };
