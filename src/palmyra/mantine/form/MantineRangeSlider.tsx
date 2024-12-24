import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { IFormFieldError, ISliderField, getFieldHandler, useFieldManager, FieldDecorator } from '@palmyralabs/rt-forms';
import { getFieldLabel } from './util';
import { ISliderDefinition } from './types';
import { RangeSlider, RangeSliderProps } from '@mantine/core';

const MantineRangeSlider = forwardRef(function MantineRangeSlider(props: ISliderDefinition & RangeSliderProps, ref: MutableRefObject<ISliderField>) {
    
    const min = props.min || 0;
    const max = props.max || 100;

    const parse = (rawData: any) => {
        if (rawData){            
            return rawData;
        }
        return [min, min+1];
    };
    const format = (v: any) => {
        return v;
    };
    
    const fieldManager = useFieldManager(props.attribute, props, {format, parse});
    const { getError, getValue, setValue, mutateOptions, refreshError } = fieldManager;
    const currentRef = ref ? ref : useRef<ISliderField>(null);
    const error: IFormFieldError = getError();
    const label = props.label || '';    
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
    options.onBlur = (event: any) => {
        refreshError;
        if (props.onBlur) {
            props.onBlur(event);
            refreshError
        }
    }
    var value = getValue();

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass}
            colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <div style={{ width: '100%', textAlign: 'center' }}>
                {label}
                <RangeSlider {...options}
                    ref={inputRef}
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