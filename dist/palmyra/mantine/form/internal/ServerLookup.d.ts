import { AutocompleteProps } from '@mantine/core';
interface helper {
    onValueChange: (d: any) => void;
    getOptionKey: (d: any) => any;
    getOptionValue: (d: any) => any;
}
declare const ServerLookup: (props: AutocompleteProps & helper) => import("react/jsx-runtime").JSX.Element;
export { ServerLookup };
