import { IServerAutoCompleteDefinition } from './types';
import { IServerLookupField } from '@palmyralabs/rt-forms';
import { AutocompleteProps } from '@mantine/core';
declare const MantineServerAutoComplete: import('react').ForwardRefExoticComponent<IServerAutoCompleteDefinition & AutocompleteProps & {
    onChange?: (value: string, data?: any) => void;
} & import('react').RefAttributes<IServerLookupField>>;
export { MantineServerAutoComplete };
