import { ITitle } from '@palmyralabs/rt-forms';
interface Parent {
    children?: any;
}
interface Titleable {
    name?: string;
    title: ITitle;
    hideTitle?: boolean;
}
interface SectionContainerInput extends Titleable, Parent {
    customButton?: React.ReactNode[];
}
export type { Titleable, SectionContainerInput };
