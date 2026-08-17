import { DependencyList, EffectCallback, RefObject, useEffect, useRef } from "react";

export const useUpdateEffect = (effect: EffectCallback, deps?: DependencyList) => {
    const isFirst = useRef(true);
    useEffect(() => {
        if (isFirst.current) {
            isFirst.current = false;
            return;
        }
        return effect();
    }, deps);
};

interface GridFilterTarget {
    setFilter?: (f: any) => void;
}

export const useGridFilter = (
    gridRef: RefObject<GridFilterTarget | null | any>,
    filter: any,
    options?: { applyOnMount?: boolean }
) => {
    const isFirst = useRef(true);
    let key = '';
    try { key = JSON.stringify(filter); } catch (e) { key = String(filter); }
    useEffect(() => {
        if (isFirst.current) {
            isFirst.current = false;
            if (!options?.applyOnMount) return;
        }
        gridRef?.current?.setFilter?.(filter);
    }, [key]);
};
