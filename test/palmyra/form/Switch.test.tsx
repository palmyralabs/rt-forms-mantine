import { describe, expect, test } from 'vitest';
import { act, fireEvent, render, renderHook, screen } from '@testing-library/react';
import { IForm, ISwitchField, PalmyraForm } from '@palmyralabs/rt-forms';
import { useRef } from 'react';
import { MantineProvider } from '@mantine/core';
import { MantineSwitch } from '../../../src/main';

describe('MantineSwitch', () => {

    const initProps = () => ({
        formRef: renderHook(() => useRef<IForm>(null)).result.current,
        fieldRef: renderHook(() => useRef<ISwitchField>(null)).result.current,
    });

    test('Renders without error', () => {
        const { formRef } = initProps();
        render(
            <PalmyraForm formData={{ notify: false }} ref={formRef}>
                <MantineSwitch attribute="notify" label="Notify" />
            </PalmyraForm>,
            { wrapper: MantineProvider }
        );
        // Mantine Switch renders with role="switch"
        expect(screen.getByRole('switch')).toBeDefined();
    });

    test('Toggle OFF → ON via click', () => {
        const { formRef, fieldRef } = initProps();
        render(
            <PalmyraForm formData={{ notify: false }} ref={formRef}>
                <MantineSwitch attribute="notify" ref={fieldRef} label="Notify" />
            </PalmyraForm>,
            { wrapper: MantineProvider }
        );
        expect(fieldRef.current!.getValue()).toBeFalsy();

        act(() => { fireEvent.click(screen.getByRole('switch')); });
        expect(fieldRef.current!.getValue()).toBeTruthy();
    });

    test('Toggle ON → OFF via click', () => {
        const { formRef, fieldRef } = initProps();
        render(
            <PalmyraForm formData={{ notify: true }} ref={formRef}>
                <MantineSwitch attribute="notify" ref={fieldRef} label="Notify" />
            </PalmyraForm>,
            { wrapper: MantineProvider }
        );
        expect(fieldRef.current!.getValue()).toBeTruthy();

        act(() => { fireEvent.click(screen.getByRole('switch')); });
        expect(fieldRef.current!.getValue()).toBeFalsy();
    });

    test('readOnly - onChange does not update value', () => {
        const { formRef, fieldRef } = initProps();
        render(
            <PalmyraForm formData={{ notify: false }} ref={formRef}>
                <MantineSwitch attribute="notify" ref={fieldRef} label="Notify" readOnly />
            </PalmyraForm>,
            { wrapper: MantineProvider }
        );
        const switchInput = screen.getByRole('switch');
        const initialValue = fieldRef.current!.getValue();

        // Use fireEvent.change (not click) — onChange checks readOnly, onClick does not
        act(() => { fireEvent.change(switchInput, { target: { checked: true } }); });
        expect(fieldRef.current!.getValue()).toBe(initialValue);
    });

    test('Options - value reflects checked/unchecked option values', () => {
        const { formRef } = initProps();
        render(
            <PalmyraForm formData={{ active: false }} ref={formRef}>
                <MantineSwitch
                    attribute="active"
                    options={{ Active: 1, Inactive: 0 }}
                />
            </PalmyraForm>,
            { wrapper: MantineProvider }
        );
        const switchInput = screen.getByRole('switch');
        // unchecked initial state → option value 0
        expect(switchInput).toHaveProperty('value', '0');

        act(() => { fireEvent.click(switchInput); });
        // checked state → option value 1
        expect(switchInput).toHaveProperty('value', '1');
    });
});
