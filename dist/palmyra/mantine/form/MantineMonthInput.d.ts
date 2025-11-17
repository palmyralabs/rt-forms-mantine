import { MonthPickerInputProps } from '@mantine/dates';
import { IDateField } from '@palmyralabs/rt-forms';
import { IMonthInputDefinition } from './types';
declare const MantineMonthInput: import('react').ForwardRefExoticComponent<Omit<IMonthInputDefinition, "displayPattern"> & Omit<MonthPickerInputProps<"default">, "defaultValue"> & import('react').RefAttributes<IDateField>>;
export { MantineMonthInput };
