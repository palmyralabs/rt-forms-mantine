import { Rating, RatingProps } from '@mantine/core';
import { FieldDecorator, getFieldHandler, IFormFieldError, IRatingField, useFieldManager } from '@palmyralabs/rt-forms';
import { forwardRef, RefObject, useImperativeHandle, useRef } from 'react';
import { IRatingDefinition } from './types';
import { getFieldLabel } from './util';


const MantineRating = forwardRef(function MantineRating(props: IRatingDefinition & RatingProps, ref: RefObject<IRatingField>) {
    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions, refreshError } = fieldManager;
    const currentRef = ref ? ref : useRef<IRatingField>(null);
    const error: IFormFieldError = getError();
    const inputRef = useRef<HTMLDivElement>(null);
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
                if (inputRef.current && inputRef.current.focus) {
                    inputRef.current.focus();
                }
            },
            getOptions() {

            },
            setOptions(_d: any) {

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
    options.onBlur = (event: any) => {
        refreshError;
        if (props.onBlur) {
            props.onBlur(event);
            refreshError
        }
    }

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <Rating
                variant={variant}
                readOnly={props.readOnly}
                ref={inputRef}
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
