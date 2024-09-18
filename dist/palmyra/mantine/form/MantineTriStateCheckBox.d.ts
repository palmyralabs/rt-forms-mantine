import { ICheckBoxField } from '@palmyralabs/rt-forms';
import { ICheckBoxDefinition } from './types';
import { CheckboxProps } from '@mantine/core';
import { TriStateCheckBoxProps } from '../ext/TriStateCheckBox';

declare const MantineTriStateCheckBox: import('react').ForwardRefExoticComponent<TriStateCheckBoxProps & CheckboxProps & ICheckBoxDefinition & import('react').RefAttributes<ICheckBoxField>>;
export { MantineTriStateCheckBox };
