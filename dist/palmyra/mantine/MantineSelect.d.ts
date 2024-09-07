import { ISelectField } from '@palmyralabs/rt-forms';
import { ISelectDefinition } from './types';
import { SelectProps } from '@mantine/core';

declare const MantineSelect: import('react').ForwardRefExoticComponent<ISelectDefinition & SelectProps & import('react').RefAttributes<ISelectField>>;
export { MantineSelect };
