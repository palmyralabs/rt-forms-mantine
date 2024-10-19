import { IDatePickerDefinition } from './types';
import { IDateField } from '@palmyralabs/rt-forms';
import { DateTimePickerProps } from '@mantine/dates';
declare const MantineDateTimePicker: import('react').ForwardRefExoticComponent<Omit<IDatePickerDefinition, "displayPattern"> & DateTimePickerProps & import('react').RefAttributes<IDateField>>;
export { MantineDateTimePicker };
