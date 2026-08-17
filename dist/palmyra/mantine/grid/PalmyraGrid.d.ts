import { IPalmyraGrid, PalmyraGridOptions } from '@palmyralabs/rt-forms';
import { RefObject } from 'react';
type PalmyraGridProps<ControlPropsType> = PalmyraGridOptions<ControlPropsType> & {
    ref?: RefObject<IPalmyraGrid>;
} & {
    onFetchFailure?: (error: any) => void;
} & {
    filter?: any;
};
declare function PalmyraGrid<ControlPropsType>(props: PalmyraGridProps<ControlPropsType>): import("react/jsx-runtime").JSX.Element;
export { PalmyraGrid };
