import { useState } from "react";
import { GridPersistenceMode, getPersistedGridFilter, stripWildcards } from "./gridPersistence";

export interface UseGridPersistedFilterResult {
    filter: Record<string, any>;
    formData: Record<string, any>;
}

const stripStringWildcards = (filter: Record<string, any>): Record<string, any> => {
    const out: Record<string, any> = {};
    Object.keys(filter || {}).forEach((k) => {
        const v = filter[k];
        out[k] = typeof v === 'string' ? stripWildcards(v) : v;
    });
    return out;
};

export const useGridPersistedFilter = (
    keyOrEndPoint: any,
    transform: (filter: Record<string, any>) => Record<string, any> = stripStringWildcards,
    mode?: GridPersistenceMode
): UseGridPersistedFilterResult => {
    const [state] = useState<UseGridPersistedFilterResult>(() => {
        const filter = getPersistedGridFilter(keyOrEndPoint, mode);
        return { filter, formData: transform(filter) };
    });
    return state;
};
