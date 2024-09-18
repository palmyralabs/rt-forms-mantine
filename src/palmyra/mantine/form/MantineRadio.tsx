import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { IFormFieldError, IRadioGroupField, ISwitchField, getFieldHandler, useFieldManager, FieldDecorator } from '@palmyralabs/rt-forms';
import { getFieldLabel } from './util';
import { IRadioDefinition } from './types';
import { Radio, RadioProps } from '@mantine/core';

const MantineRadio = forwardRef(function MantineRadio(props: IRadioDefinition & RadioProps, ref: MutableRefObject<IRadioGroupField>) {
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

    fieldOptions.onChange = (event: any, v: boolean) => {
        if (!props.readOnly) {
            setValue(event.currentTarget.value);
            if (props.onChange)
                props.onChange(event.currentTarget.value);
        }
    }
    fieldOptions.onBlur = refreshError;

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <Radio
                value={getValue()}
                {...fieldOptions}
                error={error.message}
            />
        </FieldDecorator>}
    </>
    );
});

export { MantineRadio };