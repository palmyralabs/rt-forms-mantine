import { Ref } from 'react';
import { IDateField } from '@palmyralabs/rt-forms';
import { IDatePickerDefinition, TextViewAttributeDefinition } from '../types';
declare function MantineDateView(props: IDatePickerDefinition & TextViewAttributeDefinition & {
    ref?: Ref<IDateField>;
}): import("react/jsx-runtime").JSX.Element;
export { MantineDateView };
