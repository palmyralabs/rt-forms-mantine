import { ITextField } from '@palmyralabs/rt-forms';
import { Ref } from 'react';
import { ITextFieldDefinition } from '../types';
interface TextViewAttributeDefinition {
    textAlign?: 'left' | 'right' | 'center';
    variant?: 'standard' | 'outlined' | 'filled';
    valueFormat?: 'amount' | 'number' | 'text' | 'percentage';
    maxFraction?: number;
}
declare function MantineINRView(props: ITextFieldDefinition & TextViewAttributeDefinition & {
    ref?: Ref<ITextField>;
}): import("react/jsx-runtime").JSX.Element;
export { MantineINRView };
