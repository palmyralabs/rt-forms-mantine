import { IInputField } from '@palmyralabs/rt-forms';
import { act, fireEvent, screen } from '@testing-library/react';
import { RefObject } from 'react';
import { expect } from 'vitest';


const testOptional2Mandatory = (textField: HTMLElement,
    fieldRef: RefObject<IInputField>, missingMessage: string) => {
    expect(textField).toHaveProperty('required', false)
    expect(fieldRef.current.isValid()).toBeTruthy();
    expect(() => screen.getByText(missingMessage)).toThrow();
    act(() => {
        fieldRef.current.setRequired(true);
    });
    expect(textField).toHaveProperty('required', true)
    act(() => {
        fireEvent.change(textField, { target: { value: '' } });
    });
    expect(fieldRef.current.isValid()).toBeFalsy();
    expect(screen.getByText(missingMessage)).toBeDefined();
}

const testMandatory2Optional = (textField: HTMLElement,
    fieldRef: RefObject<IInputField>, missingMessage: string) => {
    expect(textField).toHaveProperty('required', true)
    expect(fieldRef.current.isValid()).toBeTruthy();
    expect(() => screen.getByText("Blank not allowed")).toThrow();
    act(() => {
        fireEvent.change(textField, { target: { value: '' } });
    });
    expect(fieldRef.current.isValid()).toBeFalsy();
    expect(screen.getByText("Blank not allowed")).toBeDefined()
    act(() => {
        fieldRef.current.setRequired(false);
    });
    expect(textField).toHaveProperty('required', false)
    expect(fieldRef.current.isValid()).toBeTruthy();
    expect(() => screen.getByText("Blank not allowed")).toThrow();
}

export { testOptional2Mandatory, testMandatory2Optional }