import type { AxiosInstance } from 'axios';

export const buildFetchFailureStoreOptions = (
    onFetchFailure?: (error: any) => void,
    existingStoreOptions?: any
): any => {
    const userAxios: ((axios: AxiosInstance) => void) | undefined =
        existingStoreOptions?.axiosCustomizer;

    if (!onFetchFailure && !userAxios) return existingStoreOptions;

    return {
        ...(existingStoreOptions || {}),
        axiosCustomizer: (axios: AxiosInstance) => {
            if (userAxios) userAxios(axios);
            if (onFetchFailure) {
                axios.interceptors.response.use(undefined, (err: any) => {
                    try { onFetchFailure(err); } catch { }
                    return Promise.reject(err);
                });
            }
        }
    };
};
