import { FieldRequest, useFieldGenrator, ColumnFieldOptions } from "@palmyralabs/rt-forms";
import {
    MantineCheckBox, MantineDateInput, MantineDatePickerInput, MantineMultiSelect, MantineNumberField, MantinePasswordField,
    MantineRadioGroup, MantineRating, MantineSelect, MantineServerLookup, MantineSwitch, MantineTextArea, MantineTextField
} from "../../../form";

const getField = (fieldDef: ColumnFieldOptions, title?: any) => {
    const { type } = fieldDef;
    const props: FieldRequest = { fieldDef, title };

    const { getReactField, getInvalidField } = useFieldGenrator();

    switch (type) {
        case 'string':
            return getReactField(props, MantineTextField);
        case 'radio':
            return getReactField(props, MantineRadioGroup);
        case 'select':
            return getReactField(props, MantineSelect);
        case 'date':
            return getReactField(props, MantineDateInput);
        case 'multiSelect':
            return getReactField(props, MantineMultiSelect);
        case 'checkbox':
            return getReactField(props, MantineCheckBox);
        case 'serverlookup':
            return getReactField(props, MantineServerLookup);
        case 'textarea':
            return getReactField(props, MantineTextArea);
        case 'switch':
            return getReactField(props, MantineSwitch);
        case 'password':
            return getReactField(props, MantinePasswordField);
        case 'rating':
            return getReactField(props, MantineRating);
        case 'float':
        case 'number':
        case 'numbersOnly':
            return getReactField(props, MantineNumberField);
        case 'dateRange':
            return getReactField(props, (p: any) => <MantineDatePickerInput attribute={p.attribute} {...p} type="range" />);
        case 'autoComplete':
        // return getReactField(props, MantineAutoComplete);
        default:
            return getInvalidField(props);
    }
};

export default getField;
