import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { IRatingDefinition } from './types';
import { IFormFieldError, IRatingField, getFieldHandler, useFieldManager, FieldDecorator } from '@palmyralabs/rt-forms';
import { getFieldLabel } from './util';
import { Rating, RatingProps } from '@mantine/core';


const MantineRating = forwardRef(function MantineRating(props: IRatingDefinition & RatingProps, ref: MutableRefObject<IRatingField>) {
    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions, refreshError } = fieldManager;
    const currentRef = ref ? ref : useRef<IRatingField>(null);
    const error: IFormFieldError = getError();
    const inputRef = useRef(null);
    const variant = props.variant || 'default';
    const autoFocus = props?.autoFocus || false;
    const fractions = props?.fractions || 1;
    const fullSymbol: any = props?.fullSymbol;
    const emptySymbol: any = props?.emptySymbol;

    useImperativeHandle(currentRef, () => {
        const handler = getFieldHandler(fieldManager)
        return {
            ...handler,
            focus() {
                inputRef.current.checked = true;
                inputRef.current.focus();
            },
            getOptions() {

            },
            setOptions(d) {

            }
        };
    }, [fieldManager]);

    var options = fieldManager.getFieldProps();

    options.onChange = (event: any, v: any) => {
        if (!props.readOnly) {
            setValue(event);
            if (props.onChange)
                props.onChange(event);
        }
    }
    options.onBlur = refreshError;

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <Rating
                variant={variant}
                readOnly={props.readOnly}
                inputRef={inputRef}
                size={props.size}
                fractions={fractions}
                {...options}
                fullSymbol={fullSymbol}
                emptySymbol={emptySymbol}
                value={getValue()}
                error={error.message}
                autoFocus={autoFocus}
            />
        </FieldDecorator>}
    </>
    );
});

export { MantineRating };