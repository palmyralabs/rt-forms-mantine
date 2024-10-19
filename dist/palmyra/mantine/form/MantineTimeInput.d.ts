import { IDatePickerDefinition } from './types';
import { IDateField } from '@palmyralabs/rt-forms';
import { TimeInputProps } from '@mantine/dates';
declare const MantineTimeInput: import('react').ForwardRefExoticComponent<Omit<IDatePickerDefinition, "displayPattern"> & TimeInputProps & import('react').RefAttributes<IDateField>>;
export { MantineTimeInput };
