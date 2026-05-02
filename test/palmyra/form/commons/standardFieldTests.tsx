import { act, fireEvent, queryByAttribute, render, renderHook, screen } from '@testing-library/react';
import { IForm, IInputField, PalmyraForm } from '@palmyralabs/rt-forms';
import { MantineProvider } from '@mantine/core';
import { useRef, RefObject, ReactElement } from 'react';
import { test, expect } from 'vitest';
import { TEST_FLAGS } from './testConfig';

interface FieldProps {
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
}

interface StandardFieldTestOptions {
    skipDisabledToggle?: boolean;
    // skipUserInputPath: skip ALL Path B tests (mandatory + readOnly user-input)
    // use for components where native DOM events can't drive value changes (e.g. combobox Select)
    skipUserInputPath?: boolean;
    // skipMandatoryUserInput: skip only the mandatory Path B tests, keep readOnly user-input test
    // use for boolean fields (e.g. CheckBox) where clearFn produces false not null
    skipMandatoryUserInput?: boolean;
    // clearFn: used in Path B to simulate clearing the input via user interaction
    clearFn?: (input: HTMLElement) => void;
    // clearValue: used in Path A when setValue('') is not appropriate (e.g. boolean fields use null)
    clearValue?: any;
}

type RenderFieldFn<T extends IInputField = IInputField> = (
    formRef: RefObject<IForm>,
    fieldRef: RefObject<T>,
    props?: FieldProps
) => ReactElement;

const defaultClearFn = (input: HTMLElement) =>
    fireEvent.change(input, { target: { value: '' } });

const runStandardFieldTests = <T extends IInputField = IInputField>(
    fieldId: string,
    initialValue: any,
    updatedValue: any,
    missingMessage: string,
    renderField: RenderFieldFn<T>,
    options?: StandardFieldTestOptions
) => {
    const getById = queryByAttribute.bind(null, 'id');
    const clearFn = options?.clearFn ?? defaultClearFn;
    const clearValue = options?.clearValue !== undefined ? options.clearValue : '';

    const initProps = () => ({
        formRef: renderHook(() => useRef<IForm>(null)).result.current,
        fieldRef: renderHook(() => useRef<T>(null)).result.current,
    });

    // ── Always run ──────────────────────────────────────────────────────────

    test('Initial value', () => {
        const { formRef, fieldRef } = initProps();
        render(
            <PalmyraForm formData={{ [fieldId]: initialValue }} ref={formRef}>
                {renderField(formRef, fieldRef)}
            </PalmyraForm>,
            { wrapper: MantineProvider }
        );
        expect(fieldRef.current!.getValue()).toBe(initialValue);
        expect(formRef.current!.getData()[fieldId]).toBe(initialValue);
        expect(formRef.current!.isValid()).toBeTruthy();
        expect(fieldRef.current!.isValid()).toBeTruthy();
    });

    test('Set value via ref', () => {
        const { formRef, fieldRef } = initProps();
        render(
            <PalmyraForm formData={{ [fieldId]: initialValue }} ref={formRef}>
                {renderField(formRef, fieldRef)}
            </PalmyraForm>,
            { wrapper: MantineProvider }
        );
        act(() => { fieldRef.current!.setValue(updatedValue); });
        expect(fieldRef.current!.getValue()).toBe(updatedValue);
        expect(formRef.current!.getData()[fieldId]).toBe(updatedValue);
        expect(fieldRef.current!.isValid()).toBeTruthy();
    });

    // ── Disabled toggle ─────────────────────────────────────────────────────

    if (TEST_FLAGS.disabledToggle) {
        const todoSuffix = options?.skipDisabledToggle
            ? ' - TODO: explicit disabled={props.disabled} overrides setDisabled in this component'
            : '';
        const runTest = options?.skipDisabledToggle ? test.skip : test;

        runTest(`Disabled → Enabled${todoSuffix}`, () => {
            const { formRef, fieldRef } = initProps();
            const dom = render(
                <PalmyraForm formData={{ [fieldId]: initialValue }} ref={formRef}>
                    {renderField(formRef, fieldRef, { disabled: true })}
                </PalmyraForm>,
                { wrapper: MantineProvider }
            );
            const input = getById(dom.container, fieldId);
            expect(input).toHaveProperty('disabled', true);
            act(() => { fieldRef.current!.setDisabled(false); });
            expect(input).toHaveProperty('disabled', false);
        });

        runTest(`Enabled → Disabled${todoSuffix}`, () => {
            const { formRef, fieldRef } = initProps();
            const dom = render(
                <PalmyraForm formData={{ [fieldId]: initialValue }} ref={formRef}>
                    {renderField(formRef, fieldRef)}
                </PalmyraForm>,
                { wrapper: MantineProvider }
            );
            const input = getById(dom.container, fieldId);
            expect(input).toHaveProperty('disabled', false);
            act(() => { fieldRef.current!.setDisabled(true); });
            expect(input).toHaveProperty('disabled', true);
        });
    }

    // ── Optional / Mandatory ────────────────────────────────────────────────

    if (TEST_FLAGS.optionalMandatory) {
        const skipMandatoryUserInput = options?.skipUserInputPath || options?.skipMandatoryUserInput;
        const runMandatoryUserInputTest = skipMandatoryUserInput ? test.skip : test;

        test('Optional → Mandatory (API)', () => {
            const { formRef, fieldRef } = initProps();
            render(
                <PalmyraForm formData={{ [fieldId]: initialValue }} ref={formRef}>
                    {renderField(formRef, fieldRef)}
                </PalmyraForm>,
                { wrapper: MantineProvider }
            );
            expect(fieldRef.current!.isValid()).toBeTruthy();
            expect(() => screen.getByText(missingMessage)).toThrow();
            act(() => { fieldRef.current!.setRequired(true); });
            act(() => { fieldRef.current!.setValue(clearValue); });
            expect(fieldRef.current!.isValid()).toBeFalsy();
            expect(screen.getByText(missingMessage)).toBeDefined();
        });

        runMandatoryUserInputTest('Optional → Mandatory (user input)', () => {
            const { formRef, fieldRef } = initProps();
            const dom = render(
                <PalmyraForm formData={{ [fieldId]: initialValue }} ref={formRef}>
                    {renderField(formRef, fieldRef)}
                </PalmyraForm>,
                { wrapper: MantineProvider }
            );
            const input = getById(dom.container, fieldId);
            expect(input).toHaveProperty('required', false);
            expect(fieldRef.current!.isValid()).toBeTruthy();
            expect(() => screen.getByText(missingMessage)).toThrow();
            act(() => { fieldRef.current!.setRequired(true); });
            expect(input).toHaveProperty('required', true);
            act(() => { clearFn(input); });
            expect(fieldRef.current!.isValid()).toBeFalsy();
            expect(screen.getByText(missingMessage)).toBeDefined();
        });

        test('Mandatory → Optional (API)', () => {
            const { formRef, fieldRef } = initProps();
            render(
                <PalmyraForm formData={{ [fieldId]: initialValue }} ref={formRef}>
                    {renderField(formRef, fieldRef, { required: true })}
                </PalmyraForm>,
                { wrapper: MantineProvider }
            );
            expect(fieldRef.current!.isValid()).toBeTruthy();
            expect(() => screen.getByText(missingMessage)).toThrow();
            act(() => { fieldRef.current!.setValue(clearValue); });
            expect(fieldRef.current!.isValid()).toBeFalsy();
            expect(screen.getByText(missingMessage)).toBeDefined();
            act(() => { fieldRef.current!.setRequired(false); });
            expect(fieldRef.current!.isValid()).toBeTruthy();
            expect(() => screen.getByText(missingMessage)).toThrow();
        });

        runMandatoryUserInputTest('Mandatory → Optional (user input)', () => {
            const { formRef, fieldRef } = initProps();
            const dom = render(
                <PalmyraForm formData={{ [fieldId]: initialValue }} ref={formRef}>
                    {renderField(formRef, fieldRef, { required: true })}
                </PalmyraForm>,
                { wrapper: MantineProvider }
            );
            const input = getById(dom.container, fieldId);
            expect(input).toHaveProperty('required', true);
            expect(fieldRef.current!.isValid()).toBeTruthy();
            act(() => { clearFn(input); });
            expect(fieldRef.current!.isValid()).toBeFalsy();
            expect(screen.getByText(missingMessage)).toBeDefined();
            act(() => { fieldRef.current!.setRequired(false); });
            expect(input).toHaveProperty('required', false);
            expect(fieldRef.current!.isValid()).toBeTruthy();
            expect(() => screen.getByText(missingMessage)).toThrow();
        });
    }

    // ── readOnly ────────────────────────────────────────────────────────────

    if (TEST_FLAGS.readOnly) {
        const runReadOnlyUserInputTest = options?.skipUserInputPath ? test.skip : test;

        runReadOnlyUserInputTest('readOnly - value unchanged on user input', () => {
            const { formRef, fieldRef } = initProps();
            const dom = render(
                <PalmyraForm formData={{ [fieldId]: initialValue }} ref={formRef}>
                    {renderField(formRef, fieldRef, { readOnly: true })}
                </PalmyraForm>,
                { wrapper: MantineProvider }
            );
            const input = getById(dom.container, fieldId);
            act(() => { clearFn(input); });
            expect(fieldRef.current!.getValue()).toBe(initialValue);
            expect(formRef.current!.getData()[fieldId]).toBe(initialValue);
        });
    }

    // ── Visibility ──────────────────────────────────────────────────────────

    if (TEST_FLAGS.visibility) {
        test('Visibility - hide and show', () => {
            const { formRef, fieldRef } = initProps();
            const dom = render(
                <PalmyraForm formData={{ [fieldId]: initialValue }} ref={formRef}>
                    {renderField(formRef, fieldRef)}
                </PalmyraForm>,
                { wrapper: MantineProvider }
            );
            expect(getById(dom.container, fieldId)).toBeDefined();
            // NOTE: inverted condition in component (!mutateOptions.visible) means
            // setVisible(true) hides and setVisible(false) restores visibility
            act(() => { (fieldRef.current as any).setVisible(true); });
            expect(getById(dom.container, fieldId)).toBeNull();
            act(() => { (fieldRef.current as any).setVisible(false); });
            expect(getById(dom.container, fieldId)).toBeDefined();
        });
    }
};

export { runStandardFieldTests };
export type { RenderFieldFn, StandardFieldTestOptions, FieldProps };
