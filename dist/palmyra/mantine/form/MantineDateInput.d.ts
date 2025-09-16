import { DateInputProps } from '@mantine/dates';
import { IDateField } from '@palmyralabs/rt-forms';
import { IDatePickerDefinition } from './types';
declare const MantineDateInput: import('react').ForwardRefExoticComponent<Omit<IDatePickerDefinition, "displayPattern"> & DateInputProps & import('react').RefAttributes<IDateField>>;
export { MantineDateInput };
