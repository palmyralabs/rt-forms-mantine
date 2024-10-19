import { IDatePickerDefinition } from './types';
import { IDateField } from '@palmyralabs/rt-forms';
import { DateInputProps } from '@mantine/dates';
declare const MantineDateInput: import('react').ForwardRefExoticComponent<Omit<IDatePickerDefinition, "displayPattern"> & DateInputProps & import('react').RefAttributes<IDateField>>;
export { MantineDateInput };
