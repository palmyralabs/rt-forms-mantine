import { MonthPickerInputProps } from '@mantine/dates';
import { IDateField } from '@palmyralabs/rt-forms';
import { Ref } from 'react';
import { IMonthInputDefinition } from './types';
declare function MantineMonthInput(props: Omit<IMonthInputDefinition, 'displayPattern'> & Omit<MonthPickerInputProps, 'defaultValue' | 'ref'> & {
    ref?: Ref<IDateField>;
}): import("react/jsx-runtime").JSX.Element;
export { MantineMonthInput };
