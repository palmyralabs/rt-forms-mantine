import { AutocompleteProps } from '@mantine/core';
import { IServerLookupField } from '@palmyralabs/rt-forms';
import { IServerAutoCompleteDefinition } from './types';
declare const MantineServerAutoComplete: import('react').ForwardRefExoticComponent<IServerAutoCompleteDefinition & AutocompleteProps & {
    onChange?: (value: string, data?: any) => void;
} & import('react').RefAttributes<IServerLookupField>>;
export { MantineServerAutoComplete };
