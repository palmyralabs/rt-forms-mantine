import { AutocompleteProps } from '@mantine/core';
import { IServerLookupField } from '@palmyralabs/rt-forms';
import { Ref } from 'react';
import { IServerAutoCompleteDefinition } from './types';
declare function MantineServerAutoComplete(props: IServerAutoCompleteDefinition & Omit<AutocompleteProps, 'ref'> & {
    onChange?: (value: string, data?: any) => void;
    ref?: Ref<IServerLookupField>;
}): import("react/jsx-runtime").JSX.Element;
export { MantineServerAutoComplete };
