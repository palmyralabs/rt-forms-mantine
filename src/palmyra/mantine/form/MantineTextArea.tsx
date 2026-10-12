import { Text, Textarea, TextareaProps } from '@mantine/core';
import { FieldDecorator, getFieldHandler, IFormFieldError, ITextField, useFieldManager } from '@palmyralabs/rt-forms';
import { Ref, useImperativeHandle, useRef } from 'react';
import { ITextFieldDefinition } from './types';
import { getFieldLabel, getLabelNode } from './util';
import './MantineTextArea.css';

function MantineTextArea(props: ITextFieldDefinition & Omit<TextareaProps, 'ref'> & { ref?: Ref<ITextField>, showCount?: boolean }) {

    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions, refreshError } = fieldManager;
    const error: IFormFieldError = getError();
    const inputRef: any = useRef(null);
    const variant = props.variant || 'default';

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
    delete options.labelInfo;
    delete options.showCount;
    const value = getValue();
    const length = (value != null ? String(value) : '').length;
    const autosize = props.autosize != null ? props.autosize : true;

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass}
            colspan={props.colspan} customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <div className={'py-textarea-wrap' + (props.showCount ? ' py-textarea-has-count' : '')}>
                <Textarea
                    variant={variant}
                    ref={inputRef}
                    defaultValue={props.defaultValue}
                    autosize={autosize}
                    minRows={props.minRows != null ? props.minRows : 2}
                    maxRows={props.maxRows}
                    maxLength={props.maxLength}
                    {...options}
                    label={getLabelNode(props)}
                    description={props.description}
                    value={value}
                    error={error.message} />
                {props.showCount && (
                    <Text size="xs" c="dimmed" className="py-textarea-count">
                        {length}{props.maxLength ? ` / ${props.maxLength}` : ''}
                    </Text>
                )}
            </div>
        </FieldDecorator>}
    </>
    );
}

export { MantineTextArea };
