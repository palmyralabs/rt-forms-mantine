import * as tus from "tus-js-client";

interface UploadOptions {
    endpoint: string;
    files: File[];
    chunkSize?: number;
    retryDelays?: number[];
    headers?: Record<string, string>;
    metadata?: (file: File) => Record<string, string>;
    onRefresh?: () => void;
    onUploadFinish?: () => void;
    onSuccess?: (file: File) => void;
    onError?: (error: any, file: File) => void;
    onAfterResponse?: (res: any, file: File) => void;
    onProgress?: (file: File, bytesUploaded: number, bytesTotal: number) => void;
    onMessage?: (type: 'error' | 'success', text: string) => void;
    onClose?: () => void;
    setLoading?: (loading: boolean) => void;
    setFileList?: (files: File[]) => void;
}

const uploadFilesWithTus = (options: UploadOptions) => {
    const {
        endpoint, files, chunkSize = 5 * 1024 * 1024, retryDelays = [0], headers,
        metadata, onRefresh, onUploadFinish, onSuccess, onError, onAfterResponse,
        onProgress, onMessage, onClose, setLoading, setFileList
    } = options;

    if (!files || files.length === 0) return;

    let count = files.length;
    setLoading?.(true);

    files.forEach((file) => {
        const upload = new tus.Upload(file, {
            endpoint,
            headers,
            metadata: metadata ? metadata(file) : { filename: file.name, filetype: file.type },
            chunkSize,
            retryDelays,
            onError: (error: any) => {
                count--;
                const status = error.originalResponse?._xhr?.status;
                if (status === 302) onMessage?.('error', `${file.name} already available`);
                else onMessage?.('error', `Failed to upload ${file.name}`);
                setLoading?.(count > 0);
                onError?.(error, file);
            },
            onShouldRetry: (err: any) => {
                const status = err.originalResponse ? err.originalResponse.getStatus() : 0;
                if (status === 403 || status === 302) return false;
                return true;
            },
            onProgress: (bytesUploaded, bytesTotal) => {
                onProgress?.(file, bytesUploaded, bytesTotal);
            },
            onSuccess: () => {
                count--;
                setLoading?.(count > 0);
                onSuccess?.(file);
                if (count === 0) {
                    onRefresh?.();
                    onUploadFinish?.();
                    setFileList?.([]);
                    onClose?.();
                    onMessage?.('success', 'All files uploaded successfully!');
                }
            },
            onAfterResponse: (_req, res) => {
                onAfterResponse?.(res, file);
            }
        });

        upload.start();
    });
};

export { uploadFilesWithTus };
export type { UploadOptions };
