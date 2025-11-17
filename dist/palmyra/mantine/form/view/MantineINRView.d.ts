import { ITextField } from '@palmyralabs/rt-forms';
import { ITextFieldDefinition } from '../types';
interface TextViewAttributeDefinition {
    textAlign?: 'left' | 'right' | 'center';
    variant?: 'standard' | 'outlined' | 'filled';
    valueFormat?: 'amount' | 'number' | 'text' | 'percentage';
    maxFraction?: number;
}
declare const MantineINRView: import('react').ForwardRefExoticComponent<ITextFieldDefinition & TextViewAttributeDefinition & import('react').RefAttributes<ITextField>>;
export { MantineINRView };
