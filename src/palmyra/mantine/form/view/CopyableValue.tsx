import { ActionIcon, CopyButton, Tooltip } from '@mantine/core';
import { ReactNode } from 'react';
import { LuCheck, LuCopy } from 'react-icons/lu';
import './CopyableValue.css';

interface CopyableValueProps {
    value: any;
    copyable?: boolean;
    children: ReactNode;
}

const CopyableValue = ({ value, copyable, children }: CopyableValueProps) => {
    if (!copyable || value == null || value === '') {
        return <>{children}</>;
    }
    return (
        <span className="py-copyable">
            <span className="py-copyable-value">{children}</span>
            <CopyButton value={String(value)} timeout={1500}>
                {({ copied, copy }) => (
                    <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow events={{ hover: true, focus: false, touch: true }}>
                        <ActionIcon size="sm" variant="subtle" color={copied ? 'teal' : 'gray'}
                            className="py-copyable-btn" onClick={copy} aria-label="Copy value">
                            {copied ? <LuCheck size={14} /> : <LuCopy size={14} />}
                        </ActionIcon>
                    </Tooltip>
                )}
            </CopyButton>
        </span>
    );
};

export { CopyableValue };
