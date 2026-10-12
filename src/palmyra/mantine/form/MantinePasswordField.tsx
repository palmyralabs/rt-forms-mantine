import { Group, PasswordInput, PasswordInputProps, Progress, Stack, Text, ThemeIcon } from '@mantine/core';
import { FieldDecorator, getFieldHandler, IFormFieldError, ITextField, useFieldManager } from '@palmyralabs/rt-forms';
import { Ref, useImperativeHandle, useRef, useState } from 'react';
import { FiAlertTriangle, FiCheck, FiX } from 'react-icons/fi';
import { ITextFieldDefinition } from './types';
import { getFieldLabel, getLabelNode } from './util';

interface IStrengthRule {
    re: RegExp;
    label: string;
}

const DEFAULT_RULES: IStrengthRule[] = [
    { re: /.{8,}/, label: 'At least 8 characters' },
    { re: /[a-z]/, label: 'Lowercase letter' },
    { re: /[A-Z]/, label: 'Uppercase letter' },
    { re: /[0-9]/, label: 'Number' },
    { re: /[^A-Za-z0-9]/, label: 'Special character' }
];

interface IPasswordExtra {
    showStrength?: boolean;
    showRequirements?: boolean;
    strengthRules?: IStrengthRule[];
    capsLockWarning?: boolean;
    withConfirm?: boolean;
    confirmLabel?: string;
    confirmPlaceholder?: string;
    onConfirmChange?: (match: boolean) => void;
}

function MantinePasswordField(props: ITextFieldDefinition & IPasswordExtra & Omit<PasswordInputProps, 'ref'> & { ref?: Ref<ITextField> }) {
    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions, refreshError } = fieldManager;
    const error: IFormFieldError = getError();
    const inputRef: any = useRef(null);
    const variant = props.variant || 'default';

    const [capsOn, setCapsOn] = useState(false);
    const [confirmVal, setConfirmVal] = useState('');

    useImperativeHandle(props.ref, () => {
        const handler = getFieldHandler(fieldManager)
        return {
            ...handler,
            focus() {
                inputRef.current.focus();
            }
        };
    }, [fieldManager]);

    var options = fieldManager.getFieldProps();

    options.onChange = (event: any) => {
        if (!props.readOnly) {
            setValue(event.target.value);
            if (props.onChange)
                props.onChange(event);
        }
    }
    options.onBlur = (event: any) => {
        refreshError;
        if (props.onBlur) {
            props.onBlur(event);
            refreshError
        }
    }

    ['labelInfo', 'showStrength', 'showRequirements', 'strengthRules', 'capsLockWarning',
        'withConfirm', 'confirmLabel', 'confirmPlaceholder', 'onConfirmChange'].forEach((k) => delete options[k]);

    const onKey = (e: any) => {
        if (props.capsLockWarning === false) return;
        try {
            if (e.getModifierState) setCapsOn(e.getModifierState('CapsLock'));
        } catch (err) { }
    };

    const value = getValue() || '';
    const capsWarning = props.capsLockWarning !== false && capsOn;

    const rules = props.strengthRules || DEFAULT_RULES;
    const metCount = rules.filter((r) => r.re.test(value)).length;
    const strength = rules.length ? Math.round((metCount / rules.length) * 100) : 0;
    const strengthColor = strength >= 100 ? 'teal' : strength >= 60 ? 'yellow' : 'red';
    const strengthLabel = strength >= 100 ? 'Strong' : strength >= 60 ? 'Medium' : 'Weak';

    const mismatch = props.withConfirm && confirmVal.length > 0 && confirmVal !== value;

    const onConfirm = (e: any) => {
        const v = e.target.value;
        setConfirmVal(v);
        if (props.onConfirmChange) props.onConfirmChange(v === value);
    };

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass}
            colspan={props.colspan} customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <div>
                <PasswordInput
                    defaultValue={props.defaultValue}
                    variant={variant}
                    ref={inputRef}
                    {...options}
                    label={getLabelNode(props)}
                    description={props.description}
                    placeholder={props.placeholder}
                    value={getValue()}
                    error={error.message}
                    onKeyUp={onKey}
                    onKeyDown={onKey}
                />

                {capsWarning && (
                    <Group gap={4} mt={4} wrap="nowrap">
                        <FiAlertTriangle size={12} color="var(--mantine-color-orange-6)" />
                        <Text size="xs" c="orange">Caps Lock is on</Text>
                    </Group>
                )}

                {props.showStrength && value.length > 0 && (
                    <>
                        <Group gap="xs" wrap="nowrap" mt={6}>
                            <Progress value={strength} color={strengthColor} size="sm" radius="xl" flex={1} />
                            <Text size="xs" c={strengthColor} fw={500}>{strengthLabel}</Text>
                        </Group>
                        {props.showRequirements && (
                            <Stack gap={2} mt={4}>
                                {rules.map((req, i) => {
                                    const ok = req.re.test(value);
                                    return (
                                        <Group key={i} gap={6} wrap="nowrap">
                                            <ThemeIcon size={14} radius="xl" variant="light" color={ok ? 'teal' : 'gray'}>
                                                {ok ? <FiCheck size={9} /> : <FiX size={9} />}
                                            </ThemeIcon>
                                            <Text size="xs" c={ok ? 'teal' : 'dimmed'}>{req.label}</Text>
                                        </Group>
                                    );
                                })}
                            </Stack>
                        )}
                    </>
                )}

                {props.withConfirm && (
                    <PasswordInput
                        mt="xs"
                        variant={variant}
                        label={props.confirmLabel || 'Confirm password'}
                        placeholder={props.confirmPlaceholder || 'Re-enter password'}
                        value={confirmVal}
                        onChange={onConfirm}
                        onKeyUp={onKey}
                        onKeyDown={onKey}
                        error={mismatch ? 'Passwords do not match' : undefined}
                    />
                )}
            </div>
        </FieldDecorator>}
    </>
    );
}

export { MantinePasswordField };
export type { IPasswordExtra, IStrengthRule };
