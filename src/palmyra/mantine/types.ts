import { AutocompleteRenderOptionState } from "@mui/material";
import { FieldOptions, IServerLookupOptions } from "@palmyralabs/rt-forms";
import { InputType } from "zlib";


interface IFieldProps {
    size?: 'small' | 'medium' | 'large'
}

interface ITextFieldProps {
    variant?: 'standard' | 'outlined' | 'filled'
    fullWidth?: boolean,
    placeholder?: string
}

interface ILayoutOptions {
    customContainerClass?: string,
    customLabelClass?: string,
    customFieldClass?: string,
    colspan?: number,
    className?: string,
    fieldProps?: IFieldProps
}

interface TextViewAttributeDefinition {
    attribute: string,
    textAlign?: 'left' | 'right' | 'center',
    variant?: 'standard' | 'outlined'
}

interface MuiInputFieldOptions extends FieldOptions {
    label?: string,
    title?: string,
    attribute: string
}

type IRadioGroupOptions = Record<any, any> | Record<string, any> | { value: any, label: string }[];

type FlexDirection = 'column' | 'row'

interface ValueLabel {
    value: number,
    label: string
}

interface ITextFieldDefinition extends MuiInputFieldOptions, ILayoutOptions {

}

interface IDatePickerDefinition extends MuiInputFieldOptions, ILayoutOptions, ITextFieldProps {
    serverPattern?: string,
    displayPattern?: string,

}

interface IDateTimePickerDefinition extends IDatePickerDefinition, MuiInputFieldOptions, ILayoutOptions, ITextFieldProps {

}

interface IServerLookupDefinition extends MuiInputFieldOptions, ILayoutOptions, IServerLookupOptions, ITextFieldProps {
    displayAttribute?: string,
    defaultValue?: InputType | any,
    multiple?: boolean,
    renderOption?: (
        props: React.HTMLAttributes<HTMLLIElement> & { key: any },
        option: any,
        state: AutocompleteRenderOptionState,
        ownerState: any,
    ) => React.ReactNode
}

interface ISelectDefinition extends MuiInputFieldOptions, ILayoutOptions {
    options?: Record<any, any> | Record<string, any>
}

interface ISwitchDefinition extends MuiInputFieldOptions, ILayoutOptions {
    options?: Record<any, any> | Record<string, any>
    switch?: 'MaterialUISwitch' | 'Android12Switch' | 'IOSSwitch' | 'Switch';
}

interface IRadioGroupDefinition extends MuiInputFieldOptions, ILayoutOptions {
    options: IRadioGroupOptions
    flexDirection?: FlexDirection
}

interface ICheckBoxDefinition extends MuiInputFieldOptions, ILayoutOptions {
    icon?: any,
    checkedIcon?: any
}

interface ICheckBoxGroupDefinition extends MuiInputFieldOptions, ILayoutOptions {
    options: Record<any, any> | Record<string, any>
    flexDirection?: FlexDirection
}

interface ISliderDefinition extends MuiInputFieldOptions, ILayoutOptions {
    minDistance?: number,
    range?: never
}

interface IRatingDefinition extends MuiInputFieldOptions, ILayoutOptions {
    variant?: 'standard' | 'outlined' | 'filled'
}

interface IServerCheckboxDefinition extends MuiInputFieldOptions, ILayoutOptions, IServerLookupOptions {
    hideSelectAll?: boolean,
    showSelectedOnly?: boolean,
    flexDirection?: FlexDirection
}

interface IEventListeners {
    onBlur: (data: any) => void,
    onFocus: (data: any) => void,
    onValueChange: (data: any) => void,
    onSearch?: (searchKey: string, limt?: number, offset?: number) => void
}

export type {
    ITextFieldDefinition, ISelectDefinition, IDatePickerDefinition, IServerLookupDefinition,
    ISwitchDefinition, IRadioGroupDefinition, ICheckBoxDefinition, ICheckBoxGroupDefinition,
    ISliderDefinition, IServerCheckboxDefinition, IRatingDefinition, IDateTimePickerDefinition
}

export type { MuiInputFieldOptions, IEventListeners, ValueLabel, TextViewAttributeDefinition }