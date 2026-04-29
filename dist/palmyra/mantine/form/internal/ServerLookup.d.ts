import { AutocompleteProps } from '@mantine/core';
interface helper {
    onValueChange: (d: any, label: string) => void;
    getOptionKey: (d: any) => any;
    getOptionValue: (d: any) => any;
    noOptionsLabel?: string | ((input: string) => string);
}
declare const ServerLookup: (props: AutocompleteProps & helper) => import("react/jsx-runtime").JSX.Element;
export { ServerLookup };
