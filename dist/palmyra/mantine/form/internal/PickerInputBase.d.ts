import { ___BaseInputProps, ___InputStylesNames, BoxProps, ElementProps, Factory, InputVariant, MantineSize, ModalProps, PopoverProps, StylesApiProps } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
export type PickerInputBaseStylesNames = __InputStylesNames;
export interface DateInputSharedProps extends Omit<__BaseInputProps, 'size'>, ElementProps<'button', 'defaultValue' | 'value' | 'onChange' | 'type'> {
    /** Determines whether dropdown should be closed when date is selected, not applicable when type="multiple", true by default */
    closeOnChange?: boolean;
    /** Type of dropdown, defaults to popover */
    dropdownType?: 'popover' | 'modal';
    /** Props passed down to Popover component */
    popoverProps?: Partial<Omit<PopoverProps, 'children'>>;
    /** Props passed down to Modal component */
    modalProps?: Partial<Omit<ModalProps, 'children'>>;
    /** Determines whether input value can be cleared, adds clear button to right section, false by default */
    clearable?: boolean;
    /** Props passed down to clear button */
    clearButtonProps?: React.ComponentPropsWithoutRef<'button'>;
    /** Determines whether the user can modify the value */
    readOnly?: boolean;
    /** Determines whether dates value should be sorted before onChange call, only applicable when type="multiple", true by default */
    sortDates?: boolean;
    /** Separator between range value */
    labelSeparator?: string;
    /** Input placeholder */
    placeholder?: string;
}
export interface PickerInputBaseProps extends BoxProps, DateInputSharedProps, Omit<StylesApiProps<PickerInputBaseFactory>, 'classNames' | 'styles'> {
    classNames?: Partial<Record<string, string>>;
    styles?: Partial<Record<string, React.CSSProperties>>;
    __staticSelector?: string;
    children: React.ReactNode;
    formattedValue: string | null | undefined;
    dropdownHandlers: ReturnType<typeof useDisclosure>[1];
    dropdownOpened: boolean;
    onClear: () => void;
    shouldClear: boolean;
    value: any;
    type: any;
    size?: MantineSize;
}
export type PickerInputBaseFactory = Factory<{
    props: PickerInputBaseProps;
    ref: HTMLButtonElement;
    stylesNames: PickerInputBaseStylesNames;
    variant: InputVariant;
}>;
export declare const PickerInputBase: import('@mantine/core').MantineComponent<{
    props: PickerInputBaseProps;
    ref: HTMLButtonElement;
    stylesNames: PickerInputBaseStylesNames;
    variant: InputVariant;
}>;
