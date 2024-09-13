import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { IFormFieldError, IRadioGroupField, ISwitchField, getFieldHandler, useFieldManager, FieldDecorator } from '@palmyralabs/rt-forms';
import { getFieldLabel } from './util';
import { IRadioGroupDefinition } from './types';
import { Group, Radio, RadioProps } from '@mantine/core';

const MantineRadioGroup = forwardRef(function MantineRadioGroup(props: IRadioGroupDefinition & RadioProps, ref: MutableRefObject<IRadioGroupField>) {
    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions } = fieldManager;
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

    fieldOptions.onChange = (event: any, v: boolean) => {
        if (!props.readOnly) {
            setValue(event.currentTarget.value);
            if (props.onChange)
            props.onChange(event.currentTarget.value);
        }
    }

    const getOptions = (options: any) => {
        if (options) {
            if (options instanceof Array) {
                const o: { value: any, label: string }[] = options;
                const result = o.map((v: { value: any, label: string }, index: number) => (
                    <Radio ref={inputRef} label={v.label} value={v.value} error={error.message}
                        defaultValue={props.defaultValue} checked={getValue()}
                    />
                ))
                return result;
            }

            if (typeof options == 'object') {
                return Object.keys(options).map((key, index) => (
                    <Radio ref={inputRef} label={options[key]} value={key} error={error.message}
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
                // value={getValue()}
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