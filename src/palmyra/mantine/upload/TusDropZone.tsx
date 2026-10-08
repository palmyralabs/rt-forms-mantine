import { ActionIcon, Badge, Button, Group, Modal, Progress, Stack, Text, ThemeIcon, Tooltip, rem } from '@mantine/core';
import { Dropzone, FileWithPath, FileRejection, MIME_TYPES } from '@mantine/dropzone';
import '@mantine/dropzone/styles.css';
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { BiCloudUpload, BiImage } from 'react-icons/bi';
import { FiFile, FiFileText, FiPaperclip, FiTrash2, FiUpload } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { uploadFilesWithTus } from './service/tusUploadService';
import './TusDropZone.css';

type FileStatus = 'pending' | 'uploading' | 'completed' | 'failed';

interface UploadStatus {
    name: string;
    progress: number;
    status: FileStatus;
}

interface ITusDropZoneProps {
    endpoint: string;
    accept?: string[];
    maxSize?: number;
    maxSizeMB?: number;
    allowSingleFile?: boolean;
    multiple?: boolean;
    variant?: 'normal' | 'compact';
    chunkSize?: number;
    retryDelays?: number[];
    headers?: Record<string, string>;
    metadata?: (file: File) => Record<string, string>;
    withoutSubmitBtn?: boolean;
    autoUpload?: boolean;
    uploadDelay?: number;
    hint?: string;
    onFilesChange?: (files: File[]) => void;
    onUploadFinish?: (files: File[]) => void;
    onSuccess?: (file: File) => void;
    onError?: (error: any, file: File) => void;
    onMessage?: (type: 'error' | 'success', text: string) => void;
    onClose?: () => void;
    className?: string;
}

interface ITusDropZoneRef {
    hasFiles: () => boolean;
    triggerUpload: (onComplete?: () => void) => void;
    clear: () => void;
}

const DEFAULT_ACCEPT = [MIME_TYPES.pdf, MIME_TYPES.docx, MIME_TYPES.png, MIME_TYPES.jpeg];
const SINGLE_ACCEPT = [MIME_TYPES.pdf];

const formatFileSize = (bytes: number): string => {
    if (!bytes) return '0 B';
    const units = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
};

const getFileIcon = (fileName: string, size = 20) => {
    const ext = fileName.split('.').pop()?.toLowerCase() ?? '';
    if (ext === 'pdf') return <FiFile size={size} color="var(--mantine-color-red-6)" />;
    if (ext === 'docx' || ext === 'doc') return <FiFileText size={size} color="var(--mantine-color-blue-6)" />;
    if (['jpg', 'jpeg', 'png', 'gif'].includes(ext)) return <BiImage size={size} color="var(--mantine-color-green-6)" />;
    return <FiFile size={size} color="var(--mantine-color-gray-6)" />;
};

const statusColor: Record<FileStatus, string> = {
    pending: 'yellow', uploading: 'blue', completed: 'green', failed: 'red'
};

const TusDropZone = forwardRef<ITusDropZoneRef, ITusDropZoneProps>((props, ref) => {
    const {
        endpoint, allowSingleFile, variant = 'normal', chunkSize, retryDelays, headers,
        metadata, withoutSubmitBtn, autoUpload, uploadDelay = 0, hint,
        onFilesChange, onUploadFinish, onSuccess, onError, onMessage, onClose, className
    } = props;

    const multiple = props.multiple != null ? props.multiple : !allowSingleFile;
    const accept = props.accept || (allowSingleFile ? SINGLE_ACCEPT : DEFAULT_ACCEPT);
    const maxSize = props.maxSize != null ? props.maxSize : (props.maxSizeMB != null ? props.maxSizeMB * 1024 * 1024 : 100 * 1024 * 1024);

    const [fileList, setFileList] = useState<File[]>([]);
    const [totalFileSize, setTotalFileSize] = useState(0);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [progressFile, setProgressFile] = useState<File | null>(null);
    const [uploadStatuses, setUploadStatuses] = useState<UploadStatus[]>([]);

    useEffect(() => {
        onFilesChange?.(fileList);
    }, [fileList]);

    const applyFiles = (files: File[]) => {
        setFileList(files);
        setTotalFileSize(files.reduce((t, f) => t + f.size, 0));
    };

    const handleDrop = (accepted: FileWithPath[]) => {
        if (allowSingleFile) {
            applyFiles([accepted[0]]);
            if (autoUpload) startUpload([accepted[0]]);
            return;
        }
        const existing = new Set(fileList.map((f) => f.name + f.size));
        const merged = [...fileList, ...accepted.filter((f) => !existing.has(f.name + f.size))];
        const total = merged.reduce((t, f) => t + f.size, 0);
        if (total > maxSize) {
            onMessage?.('error', `Total file size exceeds ${formatFileSize(maxSize)}.`);
            return;
        }
        applyFiles(merged);
        if (autoUpload) startUpload(merged);
    };

    const handleReject = (_rejections: FileRejection[]) => {
        onMessage?.('error', `File too large. Max allowed size is ${formatFileSize(maxSize)}.`);
    };

    const removeFile = (file: File) => {
        applyFiles(fileList.filter((f) => !(f.name === file.name && f.size === file.size)));
        setLoading(false);
    };

    const clearAll = () => {
        applyFiles([]);
        setLoading(false);
    };

    const startUpload = (files: File[], onComplete?: () => void) => {
        if (!files.length) {
            onComplete?.();
            return;
        }
        setLoading(true);
        setUploadStatuses(files.map((f) => ({ name: f.name, progress: 0, status: 'pending' })));

        const run = () => uploadFilesWithTus({
            endpoint, files, chunkSize, retryDelays, headers, metadata, onMessage, onClose,
            setLoading, setFileList: (f) => applyFiles(f as File[]),
            onUploadFinish: () => {
                onUploadFinish?.(files);
                onComplete?.();
            },
            onProgress: (file, bytesUploaded, bytesTotal) => {
                setProgressFile(file);
                setProgress(Number(((bytesUploaded / bytesTotal) * 100).toFixed(2)));
            },
            onError: (e, file) => {
                setUploadStatuses((prev) => prev.map((f) => f.name === file.name ? { ...f, status: 'failed' } : f));
                onError?.(e, file);
            },
            onSuccess: (file) => {
                setUploadStatuses((prev) => prev.map((f) => f.name === file.name ? { ...f, progress: 100, status: 'completed' } : f));
                onSuccess?.(file);
            }
        });

        if (uploadDelay > 0) setTimeout(run, uploadDelay);
        else run();
    };

    useImperativeHandle(ref, () => ({
        hasFiles: () => fileList.length > 0,
        triggerUpload: (onComplete?: () => void) => startUpload(fileList, onComplete),
        clear: clearAll
    }));

    const hasFiles = fileList.length > 0;
    const formatHint = hint || (allowSingleFile ? 'PDF' : 'PDF, DOCX, PNG, JPG');
    const maxMB = Math.round(maxSize / (1024 * 1024));

    const renderFileList = () => {
        if (!hasFiles) return null;
        if (variant === 'compact') {
            return (
                <div className="py-tus-chip-row">
                    {fileList.map((file, i) => {
                        const st = uploadStatuses.find((s) => s.name === file.name);
                        return (
                            <Badge key={i} variant="light" color={st ? statusColor[st.status] : 'gray'} size="lg"
                                radius="sm" pr={3}
                                leftSection={getFileIcon(file.name, 12)}
                                rightSection={
                                    <ActionIcon size="xs" variant="subtle" color="gray"
                                        onClick={() => removeFile(file)} aria-label="Remove file">
                                        <IoMdClose size={12} />
                                    </ActionIcon>
                                }>
                                <Tooltip label={file.name} disabled={file.name.length <= 22}>
                                    <span>{file.name.length > 22 ? `${file.name.slice(0, 22)}…` : file.name}</span>
                                </Tooltip>
                            </Badge>
                        );
                    })}
                </div>
            );
        }
        return (
            <Stack gap="xs">
                <Group justify="space-between">
                    <Text size="sm" fw={600}>{fileList.length} file{fileList.length !== 1 ? 's' : ''} selected</Text>
                    {!allowSingleFile && <Text size="xs" c="dimmed">Total: <b>{formatFileSize(totalFileSize)}</b></Text>}
                </Group>
                <div className="py-tus-file-grid">
                    {fileList.map((file, i) => {
                        const st = uploadStatuses.find((s) => s.name === file.name);
                        return (
                            <div key={i} className="py-tus-file-card">
                                {getFileIcon(file.name)}
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <Tooltip label={file.name} disabled={file.name.length <= 24}>
                                        <div className="py-tus-file-name">{file.name}</div>
                                    </Tooltip>
                                    <div className="py-tus-file-meta">
                                        <Text size="xs" c="dimmed">{formatFileSize(file.size)}</Text>
                                        {st && <Badge size="xs" variant="light" color={statusColor[st.status]}>{st.status}</Badge>}
                                    </div>
                                </div>
                                <ActionIcon className="py-tus-file-remove" variant="light" color="red" size="sm"
                                    radius="xl" onClick={() => removeFile(file)} aria-label="Remove file">
                                    <IoMdClose size={12} />
                                </ActionIcon>
                            </div>
                        );
                    })}
                </div>
            </Stack>
        );
    };

    const dropContent = variant === 'compact'
        ? (
            <div className="py-tus-dropzone-compact">
                <FiPaperclip size={14} color="var(--mantine-color-dimmed)" />
                <Text size="xs" c="dimmed">
                    {hasFiles ? 'Add more files…' : `Attach ${allowSingleFile ? 'file' : 'files'} or drop here`}
                </Text>
                <Text size="xs" c="dimmed" ml="auto">{formatHint} · Max {maxMB} MB</Text>
            </div>
        )
        : (
            <div className="py-tus-dropzone-inner">
                <ThemeIcon size={48} radius="xl" variant="light" color="blue">
                    <BiCloudUpload size={26} />
                </ThemeIcon>
                <Text size="sm" fw={600}>
                    Drop {allowSingleFile ? 'file' : 'files'} here, or <Text span c="blue" fw={700}>browse</Text>
                </Text>
                <Text size="xs" c="dimmed">Max {maxMB} MB · {formatHint}</Text>
            </div>
        );

    return (
        <Stack gap="sm" className={'py-tus-root' + (className ? ' ' + className : '')}>
            {variant === 'normal' && renderFileList()}

            <Dropzone
                onDrop={handleDrop}
                onReject={handleReject}
                maxSize={maxSize}
                accept={accept}
                multiple={multiple}
                loading={false}
                radius="md"
                p={variant === 'compact' ? 'xs' : 'md'}>
                {dropContent}
            </Dropzone>

            {variant === 'compact' && renderFileList()}

            {!withoutSubmitBtn && hasFiles && (
                <Group justify={variant === 'compact' ? 'flex-end' : 'center'} gap="sm">
                    <Button variant="default" size={variant === 'compact' ? 'xs' : 'sm'}
                        leftSection={<FiTrash2 size={14} />} onClick={clearAll}>
                        {variant === 'compact' ? 'Clear' : 'Remove All'}
                    </Button>
                    <Button size={variant === 'compact' ? 'xs' : 'sm'} loading={loading}
                        leftSection={<FiUpload size={14} />} onClick={() => startUpload(fileList)}>
                        {loading ? 'Uploading…' : 'Upload'}
                    </Button>
                </Group>
            )}

            <Modal opened={loading} onClose={() => { }} centered withCloseButton={false}
                overlayProps={{ backgroundOpacity: 0.45, blur: 4 }}>
                <Stack align="center" gap="md" p="sm">
                    <ThemeIcon size={56} radius="xl" variant="light" color="blue">
                        <BiCloudUpload size={30} />
                    </ThemeIcon>
                    <Text fw={700}>Uploading your file…</Text>
                    <Text size="xs" c="dimmed">Please stay on this page. This may take a moment.</Text>
                    {progressFile && (
                        <Group gap="xs" w="100%" wrap="nowrap">
                            {getFileIcon(progressFile.name, 18)}
                            <Text size="xs" fw={500} style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {progressFile.name}
                            </Text>
                            <Text size="sm" fw={700} c="blue">{progress > 0 ? `${Math.round(progress)}%` : '—'}</Text>
                        </Group>
                    )}
                    <Progress value={progress} w="100%" radius="xl" striped animated={progress === 0}
                        style={{ height: rem(10) }} />
                </Stack>
            </Modal>
        </Stack>
    );
});

TusDropZone.displayName = 'TusDropZone';

export { TusDropZone };
export type { ITusDropZoneProps, ITusDropZoneRef };
