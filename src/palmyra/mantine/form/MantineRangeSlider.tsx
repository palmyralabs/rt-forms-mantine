import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { IFormFieldError, ISliderField, getFieldHandler, useFieldManager, FieldDecorator } from '@palmyralabs/rt-forms';
import { getFieldLabel } from './util';
import { ISliderDefinition } from './types';
import { RangeSlider, RangeSliderProps } from '@mantine/core';

const MantineRangeSlider = forwardRef(function MantineRangeSlider(props: ISliderDefinition & RangeSliderProps, ref: MutableRefObject<ISliderField>) {
    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions } = fieldManager;
    const currentRef = ref ? ref : useRef<ISliderField>(null);
    const error: IFormFieldError = getError();
    const label = props.label || '';
    const min = props.min || 0;
    const max = props.max || 100;
    const inputRef = useRef(null);

    useImperativeHandle(currentRef, () => {
        const handler = getFieldHandler(fieldManager)
        return {
            ...handler,
            focus() {
                inputRef.current.focus();
            },
            getOptions() {

            },
            setOptions(d) {

            }
        };
    }, [fieldManager]);

    var options = fieldManager.getFieldProps();

    options.onChange = (d: any) => {
        if (!props.readOnly) {
            setValue(d);
            if (props.onChange)
                props.onChange(d);
        }
    }
    var value = getValue() != '' ? getValue() : undefined

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass}
            colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <div style={{ width: '100%', textAlign: 'center' }}>
                {label}
                <RangeSlider {...options}
                    ref={inputRef}
                    defaultValue={props.defaultValue}
                    value={value}
                    label={props.labelName}
                    min={min}
                    max={max}
                    size={props.size}
                    error={error.message}
                />
            </div>
        </FieldDecorator>}
    </>
    );
});

export { MantineRangeSlider };