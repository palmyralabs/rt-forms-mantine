import { CheckboxProps } from '@mantine/core';
interface TriStateCheckBoxProps extends CheckboxProps {
    checked?: any;
    unChecked?: any;
    color?: any;
    checkLabel?: string;
    value?: any;
}
declare const TriStateCheckBox: (props: TriStateCheckBoxProps) => import("react/jsx-runtime").JSX.Element;
export { TriStateCheckBox };
export type { TriStateCheckBoxProps };
