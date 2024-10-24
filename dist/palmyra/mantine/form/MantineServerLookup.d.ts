import { IServerLookupDefinition } from './types';
import { IServerLookupField } from '@palmyralabs/rt-forms';
import { AutocompleteProps } from '@mantine/core';
declare const MantineServerLookup: import('react').ForwardRefExoticComponent<IServerLookupDefinition & Omit<AutocompleteProps, "defaultValue"> & import('react').RefAttributes<IServerLookupField>>;
export { MantineServerLookup };
