import { FieldOptions, IServerLookupOptions } from '@palmyralabs/rt-forms';
interface IFieldProps {
    size?: 'small' | 'medium' | 'large';
}
interface ITextFieldProps {
    variant?: 'standard' | 'outlined' | 'filled';
    fullWidth?: boolean;
    placeholder?: string;
}
interface ILayoutOptions {
    customContainerClass?: string;
    customLabelClass?: string;
    customFieldClass?: string;
    colspan?: number;
    className?: string;
    fieldProps?: IFieldProps;
}
interface TextViewAttributeDefinition {
    attribute: string;
    textAlign?: 'left' | 'right' | 'center';
    variant?: 'standard' | 'outlined';
}
interface MantineInputFieldOptions extends FieldOptions {
    label?: string;
    title?: string;
    attribute: string;
}
type IRadioGroupOptions = Record<any, any> | Record<string, any> | {
    value: any;
    label: string;
}[];
type FlexDirection = 'column' | 'row';
interface ValueLabel {
    value: number;
    label: string;
}
interface ITextFieldDefinition extends MantineInputFieldOptions, ILayoutOptions {
}
interface IDatePickerDefinition extends MantineInputFieldOptions, ILayoutOptions, ITextFieldProps {
    serverPattern?: string;
    displayPattern?: string;
}
interface IDateTimePickerDefinition extends IDatePickerDefinition, MantineInputFieldOptions, ILayoutOptions, ITextFieldProps {
}
interface ICalendarDefinition extends MantineInputFieldOptions, ILayoutOptions, ITextFieldProps {
    serverPattern?: string;
}
interface ILookupViewOptions extends MantineInputFieldOptions, ILayoutOptions, ITextFieldProps {
    lookupOptions?: {
        idAttribute: string;
        labelAttribute: string;
    };
}
interface IServerLookupDefinition extends MantineInputFieldOptions, ILayoutOptions, IServerLookupOptions, ITextFieldProps {
    displayAttribute?: string;
    multiple?: boolean;
    renderOption?: (props: React.HTMLAttributes<HTMLLIElement> & {
        key: any;
    }, option: any, ownerState: any) => React.ReactNode;
}
interface ISelectDefinition extends MantineInputFieldOptions, ILayoutOptions {
    options?: Record<any, any> | Record<string, any>;
}
interface ISwitchDefinition extends MantineInputFieldOptions, ILayoutOptions {
    options?: Record<any, any> | Record<string, any>;
}
interface IRadioGroupDefinition extends MantineInputFieldOptions, ILayoutOptions {
    options: IRadioGroupOptions;
    flexDirection?: FlexDirection;
}
interface IRadioDefinition extends MantineInputFieldOptions, ILayoutOptions {
}
interface ICheckBoxDefinition extends MantineInputFieldOptions, ILayoutOptions {
    icon?: any;
    checkedIcon?: any;
}
interface ICheckBoxGroupDefinition extends MantineInputFieldOptions, ILayoutOptions {
    options: Record<any, any> | Record<string, any>;
    flexDirection?: FlexDirection;
}
interface ISliderDefinition extends MantineInputFieldOptions, ILayoutOptions {
    labelName?: number;
}
interface IRatingDefinition extends MantineInputFieldOptions, ILayoutOptions {
    variant?: 'standard' | 'outlined' | 'filled';
}
interface IServerCheckboxDefinition extends MantineInputFieldOptions, ILayoutOptions, IServerLookupOptions {
    hideSelectAll?: boolean;
    showSelectedOnly?: boolean;
    flexDirection?: FlexDirection;
}
interface IEventListeners {
    onBlur: (data: any) => void;
    onFocus: (data: any) => void;
    onValueChange: (data: any) => void;
    onSearch?: (searchKey: string, limt?: number, offset?: number) => void;
}
export type { ITextFieldDefinition, ISelectDefinition, IDatePickerDefinition, IServerLookupDefinition, ISwitchDefinition, IRadioGroupDefinition, ICheckBoxDefinition, ICheckBoxGroupDefinition, ISliderDefinition, IServerCheckboxDefinition, IRatingDefinition, IDateTimePickerDefinition, IRadioDefinition, ICalendarDefinition, ILookupViewOptions };
export type { MantineInputFieldOptions, IEventListeners, ValueLabel, TextViewAttributeDefinition };
