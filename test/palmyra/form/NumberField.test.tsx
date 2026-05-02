import { describe, expect, test } from 'vitest';
import { act, render, renderHook, screen } from '@testing-library/react';
import { IForm, IInputField, ITextField, PalmyraForm } from '@palmyralabs/rt-forms';
import { useRef } from 'react';
import { MantineProvider } from '@mantine/core';
import { MantineNumberField } from '../../../src/main';
import { runStandardFieldTests } from './commons/standardFieldTests';

describe('MantineNumberField', () => {
    runStandardFieldTests<ITextField>(
        'quantity',
        42,
        99,
        'Value is required',
        (formRef, fieldRef, props) => (
            <MantineNumberField
                id="quantity"
                attribute="quantity"
                ref={fieldRef}
                label="Quantity"
                missingMessage="Value is required"
                disabled={props?.disabled}
                readOnly={props?.readOnly}
                required={props?.required}
            />
        )
    );

    test('Range validation - within max', () => {
        const formRef = renderHook(() => useRef<IForm>(null)).result.current;
        const fieldRef = renderHook(() => useRef<IInputField>(null)).result.current;
        render(
            <PalmyraForm formData={{}} ref={formRef}>
                <MantineNumberField
                    attribute="score"
                    label="Score"
                    ref={fieldRef}
                    range={{ end: 100, errorMessage: 'Max 100' }}
                />
            </PalmyraForm>,
            { wrapper: MantineProvider }
        );
        act(() => { fieldRef.current!.setValue(50); });
        expect(() => screen.getByText('Max 100')).toThrow();
        expect(formRef.current!.isValid()).toBeTruthy();
        expect(fieldRef.current!.isValid()).toBeTruthy();
    });

    test('Range validation - exceeds max', () => {
        const formRef = renderHook(() => useRef<IForm>(null)).result.current;
        const fieldRef = renderHook(() => useRef<IInputField>(null)).result.current;
        render(
            <PalmyraForm formData={{}} ref={formRef}>
                <MantineNumberField
                    attribute="score"
                    label="Score"
                    ref={fieldRef}
                    range={{ end: 100, errorMessage: 'Max 100' }}
                />
            </PalmyraForm>,
            { wrapper: MantineProvider }
        );
        act(() => { fieldRef.current!.setValue(150); });
        expect(screen.getByText('Max 100')).toBeDefined();
        expect(formRef.current!.isValid()).toBeFalsy();
        expect(fieldRef.current!.isValid()).toBeFalsy();
    });

    test('Range validation - within min', () => {
        const formRef = renderHook(() => useRef<IForm>(null)).result.current;
        const fieldRef = renderHook(() => useRef<IInputField>(null)).result.current;
        render(
            <PalmyraForm formData={{}} ref={formRef}>
                <MantineNumberField
                    attribute="score"
                    label="Score"
                    ref={fieldRef}
                    range={{ start: 1, end: 100, errorMessage: 'Range 1-100' }}
                />
            </PalmyraForm>,
            { wrapper: MantineProvider }
        );
        act(() => { fieldRef.current!.setValue(0); });
        expect(screen.getByText('Range 1-100')).toBeDefined();
        expect(formRef.current!.isValid()).toBeFalsy();
    });
});
