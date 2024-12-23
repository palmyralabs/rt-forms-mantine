import { AutocompleteProps } from '@mantine/core';
import { IServerLookupField } from '@palmyralabs/rt-forms';
import { IServerLookupDefinition } from './types';
declare const MantineServerLookup: import('react').ForwardRefExoticComponent<IServerLookupDefinition & Omit<AutocompleteProps, "defaultValue"> & import('react').RefAttributes<IServerLookupField>>;
export { MantineServerLookup };
