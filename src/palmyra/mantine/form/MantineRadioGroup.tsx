import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { IFormFieldError, IRadioGroupField, ISwitchField, getFieldHandler, useFieldManager, FieldDecorator } from '@palmyralabs/rt-forms';
import { getFieldLabel } from './util';
import { IRadioGroupDefinition } from './types';
import { Group, Radio, RadioProps } from '@mantine/core';

const MantineRadioGroup = forwardRef(function MantineRadioGroup(props: IRadioGroupDefinition & RadioProps, ref: MutableRefObject<IRadioGroupField>) {
    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions, refreshError } = fieldManager;
    const currentRef = ref ? ref : useRef<ISwitchField>(null);
    const error: IFormFieldError = getError();
    // const autoFocus = props.autoFocus || false;
    const inputRef: any = useRef(null);

    useImperativeHandle(currentRef, () => {
        const handler = getFieldHandler(fieldManager)
        return {
            ...handler,
            focus() {
                inputRef.current.focus();
            },
            setOptions(d: any) {
            },
            getOptions() {
            }
        };
    }, [fieldManager]);

    var fieldOptions = fieldManager.getFieldProps();

    fieldOptions.onChange = (v: any) => {
        if (!props.readOnly) {
            setValue(v);
            if (props.onChange)
                props.onChange(v);
        }
    }
    fieldOptions.onBlur = (event: any) => {
        refreshError;
        if (props.onBlur) {
            props.onBlur(event);
            refreshError
        }
    };

    const getOptions = (options: any) => {
        if (options) {
            if (options instanceof Array) {
                const o: { value: any, label: string }[] = options;
                const result = o.map((v: { value: any, label: string }, index: number) => (
                    <Radio ref={inputRef} key={v.label + index} label={v.label} value={v.value} error={error.message}
                        defaultValue={props.defaultValue} checked={getValue()}
                    />
                ))
                return result;
            }

            if (typeof options == 'object') {
                return Object.keys(options).map((key, index) => (
                    <Radio ref={inputRef} key={options[key] + index} label={options[key]} value={key} error={error.message}
                        defaultValue={props.defaultValue} checked={getValue()}
                    />
                ))
            }
        }

        return <div>No options provided</div>
    }

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <Radio.Group
                label={props.label}
                value={getValue().toString()}
                {...fieldOptions}
                // withAsterisk={props.required}
                description={props.description}>
                <Group mt="xs">
                    {getOptions(props.options)}
                </Group>
            </Radio.Group>
        </FieldDecorator>}
    </>
    );
});

export { MantineRadioGroup };