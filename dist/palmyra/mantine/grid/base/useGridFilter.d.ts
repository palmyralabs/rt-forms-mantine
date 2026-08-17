import { DependencyList, EffectCallback, RefObject } from 'react';
export declare const useUpdateEffect: (effect: EffectCallback, deps?: DependencyList) => void;
interface GridFilterTarget {
    setFilter?: (f: any) => void;
}
export declare const useGridFilter: (gridRef: RefObject<GridFilterTarget | null | any>, filter: any, options?: {
    applyOnMount?: boolean;
}) => void;
export {};
