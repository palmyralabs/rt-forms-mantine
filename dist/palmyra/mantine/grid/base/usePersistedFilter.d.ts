import { GridPersistenceMode } from './gridPersistence';
export interface UseGridPersistedFilterResult {
    filter: Record<string, any>;
    formData: Record<string, any>;
}
export declare const useGridPersistedFilter: (keyOrEndPoint: any, transform?: (filter: Record<string, any>) => Record<string, any>, mode?: GridPersistenceMode) => UseGridPersistedFilterResult;
