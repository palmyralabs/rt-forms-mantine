import { AutocompleteProps } from '@mantine/core';
interface helper {
    onValueChange: (d: any, label: string) => void;
    getOptionValue: (d: any) => any;
}
declare const MantineAutoComplete: (props: AutocompleteProps & helper) => import("react/jsx-runtime").JSX.Element;
export { MantineAutoComplete };
