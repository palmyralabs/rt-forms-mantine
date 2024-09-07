import { ICheckBoxField } from '@palmyralabs/rt-forms';
import { ICheckBoxDefinition } from './types';
import { CheckboxProps } from '@mantine/core';

declare const MantineCheckBox: import('react').ForwardRefExoticComponent<CheckboxProps & ICheckBoxDefinition & import('react').RefAttributes<ICheckBoxField>>;
export { MantineCheckBox };
