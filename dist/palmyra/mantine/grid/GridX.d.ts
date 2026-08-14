import { GridXOptions, IPageQueryable } from '@palmyralabs/rt-forms';
import { RefObject } from 'react';
type GridXProps<ControlPropsType> = GridXOptions<ControlPropsType> & {
    ref?: RefObject<IPageQueryable>;
} & {
    onFetchFailure?: (error: any) => void;
};
declare function GridX<ControlPropsType>(props: GridXProps<ControlPropsType>): import("react/jsx-runtime").JSX.Element;
export { GridX };
