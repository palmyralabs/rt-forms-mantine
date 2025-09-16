import { TimeInputProps } from '@mantine/dates';
import { IDateField } from '@palmyralabs/rt-forms';
import { IDatePickerDefinition } from './types';
declare const MantineTimeInput: import('react').ForwardRefExoticComponent<Omit<IDatePickerDefinition, "displayPattern"> & TimeInputProps & import('react').RefAttributes<IDateField>>;
export { MantineTimeInput };
