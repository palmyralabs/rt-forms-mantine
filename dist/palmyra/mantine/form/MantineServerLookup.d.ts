import { AutocompleteProps } from '@mantine/core';
import { IServerLookupField } from '@palmyralabs/rt-forms';
import { Ref } from 'react';
import { IServerLookupDefinition } from './types';
declare function MantineServerLookup(props: IServerLookupDefinition & Omit<AutocompleteProps, 'defaultValue' | 'ref'> & {
    ref?: Ref<IServerLookupField>;
}): import("react/jsx-runtime").JSX.Element;
export { MantineServerLookup };
