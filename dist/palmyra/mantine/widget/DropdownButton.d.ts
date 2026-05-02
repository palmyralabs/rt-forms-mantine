import { JSX, RefObject } from 'react';
interface IDropdownButtonOptions {
    title: string;
    className?: string;
    disabled?: boolean;
    PrefixAdornment?: JSX.Element;
    children?: any;
    width?: string;
}
interface IDropdown {
    open: () => void;
    close: () => void;
}
declare function DropdownButton(props: IDropdownButtonOptions & {
    ref?: RefObject<IDropdown>;
}): import("react/jsx-runtime").JSX.Element;
export { DropdownButton };
export type { IDropdown, IDropdownButtonOptions };
