
interface IDropdownButtonOptions {
    title: string;
    className?: string;
    disabled?: boolean;
    PrefixAdornment?: JSX.Element;
    children?: any;
}
interface IDropdown {
    open: () => void;
    close: () => void;
}
declare const DropdownButton: import('react').ForwardRefExoticComponent<IDropdownButtonOptions & import('react').RefAttributes<IDropdown>>;
export { DropdownButton };
export type { IDropdownButtonOptions, IDropdown };
