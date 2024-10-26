import { act, fireEvent, queryByAttribute, render, renderHook, screen } from "@testing-library/react";
import { IForm, IInputField, PalmyraForm } from "@palmyralabs/rt-forms";
import { describe, expect, test } from "vitest";
import { Button, MantineProvider } from "@mantine/core";
import { MantineTextField } from "../../../../src/main";
import { useRef } from "react";

describe("Form", () => {

    const initProps = () => {
        const getById = queryByAttribute.bind(null, 'id');
        const formRef = renderHook(() => useRef<IForm>()).result.current;
        const fieldRef = renderHook(() => useRef<IInputField>()).result.current;
        return { getById, formRef, fieldRef }
    }

    test('Initial value', () => {
        const { formRef, fieldRef } = initProps();
        const Wrapper = () => {
            return (
                <MantineProvider>
                    <PalmyraForm formData={{ email: "sample@gmail.com" }} ref={formRef}>
                        <MantineTextField attribute="email" ref={fieldRef} />
                        <Button onClick={() => { console.log("button") }}>Submit</Button>
                    </PalmyraForm>
                </MantineProvider>
            );
        };

        render(<Wrapper />);
        expect(formRef.current.getData().email).toBe("sample@gmail.com")
        expect(fieldRef.current.getValue()).toBe("sample@gmail.com")
        expect(formRef.current.isValid()).toBeTruthy();
        expect(fieldRef.current.isValid()).toBeTruthy();
    });


    test('set value', () => {
        const { formRef, fieldRef } = initProps();
        const Wrapper = () => {
            return (
                <MantineProvider>
                    <PalmyraForm formData={{ email: "sample@gmail.com" }} ref={formRef}>
                        <MantineTextField attribute="email" ref={fieldRef} />
                        <Button onClick={() => { console.log("button") }}>Submit</Button>
                    </PalmyraForm>
                </MantineProvider>
            );
        };

        render(<Wrapper />);

        act(() => {
            fieldRef.current.setValue("hello@gmail.com");
        })

        expect(formRef.current.getData().email).toBe("hello@gmail.com")
        expect(fieldRef.current.getValue()).toBe("hello@gmail.com")
        expect(formRef.current.isValid()).toBeTruthy();
        expect(fieldRef.current.isValid()).toBeTruthy();
    });

    test('onChange value', () => {
        const { formRef, fieldRef } = initProps();
        const Wrapper = () => {
            return (
                <MantineProvider>
                    <PalmyraForm formData={{ email: "sample@gmail.com" }} ref={formRef}>
                        <MantineTextField attribute="email" ref={fieldRef} label="Email" />
                        <Button onClick={() => { console.log("button") }}>Submit</Button>
                    </PalmyraForm>
                </MantineProvider>
            );
        };

        render(<Wrapper />);

        const textField = screen.getByLabelText('Email');

        act(() => {
            fireEvent.change(textField, { target: { value: 'hello@gmail.com' } });
        });

        expect(formRef.current.getData().email).toBe("hello@gmail.com")
        expect(fieldRef.current.getValue()).toBe("hello@gmail.com")
        expect(formRef.current.isValid()).toBeTruthy();
        expect(fieldRef.current.isValid()).toBeTruthy();
    });

    // test('required validation', () => {
    //     const Wrapper = () => {
    //         return (
    //             <MantineProvider>
    //                 <PalmyraForm formData={{}}>
    //                     <MantineTextField attribute="email" invalidMessage="Email is required" required />
    //                     <Button onClick={() => { console.log("button") }}>Submit</Button>
    //                 </PalmyraForm>
    //             </MantineProvider>
    //         );
    //     };

    //     render(<Wrapper />);

    //     const button = screen.getByRole('button', { name: /submit/i });
    //     fireEvent.click(button);

    //     const errorMessage = screen.getAllByText(/Email is required/i);
    //     expect(errorMessage).toBeTruthy();
    // });

    test('rule validation', () => {
        const { formRef, fieldRef } = initProps();
        const Wrapper = () => {
            return (
                <MantineProvider>
                    <PalmyraForm formData={{}} ref={formRef}>
                        <MantineTextField attribute="email" validRule={{ rule: 'email' }} ref={fieldRef}
                            invalidMessage="Email is invalid" label="email" />
                        <Button onClick={() => { console.log("button") }} disabled>Submit</Button>
                    </PalmyraForm>
                </MantineProvider>
            );
        };

        render(<Wrapper />);

        const button = screen.getByRole('button', { name: /submit/i });
        const emailInput = screen.getByLabelText('email');

        fireEvent.change(emailInput, { target: { value: 'example' } });
        fireEvent.click(button);

        const errorMessage = screen.getByText(/Email is invalid/i);
        expect(button).toHaveProperty('disabled', true);
        expect(errorMessage).toBeTruthy();
        expect(formRef.current.isValid()).toBeFalsy();
        expect(fieldRef.current.isValid()).toBeFalsy();
    });

    test('rule validation', () => {
        const { formRef, fieldRef } = initProps();
        const Wrapper = () => {
            return (
                <MantineProvider>
                    <PalmyraForm formData={{}} ref={formRef}>
                        <MantineTextField attribute="email" validRule={{ rule: 'email' }}
                            invalidMessage="Email is invalid" label="email" ref={fieldRef} />
                        <Button onClick={() => { console.log("button") }}>Submit</Button>
                    </PalmyraForm>
                </MantineProvider>
            );
        };

        render(<Wrapper />);

        const button = screen.getByRole('button', { name: /submit/i });
        const emailInput = screen.getByLabelText('email');

        fireEvent.change(emailInput, { target: { value: 'example@gmail.com' } });
        fireEvent.click(button);

        expect(button).toHaveProperty('disabled', false);

        expect(formRef.current.getData().email).toBe("example@gmail.com")
        expect(fieldRef.current.getValue()).toBe("example@gmail.com")

        expect(formRef.current.isValid()).toBeTruthy();
        expect(fieldRef.current.isValid()).toBeTruthy();
    });

    test('length validation', () => {
        const { formRef, fieldRef } = initProps();
        const Wrapper = () => {
            return (
                <MantineProvider>
                    <PalmyraForm formData={{}} ref={formRef}>
                        <MantineTextField attribute="email" ref={fieldRef}
                            length={{ max: 10, errorMessage: "Maximum 10" }} label="email" />
                        <Button onClick={() => { console.log("button") }} disabled={true}>Submit</Button>
                    </PalmyraForm>
                </MantineProvider>
            );
        };

        render(<Wrapper />);

        const button = screen.getByRole('button', { name: /submit/i });
        const emailInput = screen.getByLabelText('email');

        fireEvent.change(emailInput, { target: { value: 'example@gmail.com' } });
        fireEvent.click(button);

        const errorMessage = screen.getByText(/Maximum 10/i);
        expect(button).toHaveProperty('disabled', true);
        expect(errorMessage).toBeTruthy();

        expect(formRef.current.isValid()).toBeFalsy();
        expect(fieldRef.current.isValid()).toBeFalsy();
    });

    test('length validation', () => {
        const { formRef, fieldRef } = initProps();
        const Wrapper = () => {
            return (
                <MantineProvider>
                    <PalmyraForm formData={{}} ref={formRef}>
                        <MantineTextField attribute="email" length={{ max: 15, errorMessage: "Maximum 10" }} label="email"
                            ref={fieldRef} />
                        <Button onClick={() => { console.log("button") }} >Submit</Button>
                    </PalmyraForm>
                </MantineProvider>
            );
        };

        render(<Wrapper />);

        const button = screen.getByRole('button', { name: /submit/i });
        const emailInput = screen.getByLabelText('email');

        fireEvent.change(emailInput, { target: { value: 'exam@gmail.com' } });
        fireEvent.click(button);

        expect(button).toHaveProperty('disabled', false);

        expect(formRef.current.isValid()).toBeTruthy();
        expect(fieldRef.current.isValid()).toBeTruthy();
    });

    test('range validation', () => {
        const { formRef, fieldRef } = initProps();
        const Wrapper = () => {
            return (
                <MantineProvider>
                    <PalmyraForm formData={{}} ref={formRef}>
                        <MantineTextField attribute="number" range={{ end: 15, errorMessage: "range 15" }} label="Number"
                            ref={fieldRef} />
                        <Button onClick={() => { console.log("button") }} >Submit</Button>
                    </PalmyraForm>
                </MantineProvider>
            );
        };

        render(<Wrapper />);

        const button = screen.getByRole('button', { name: /submit/i });
        const emailInput = screen.getByLabelText('Number');

        fireEvent.change(emailInput, { target: { value: '14' } });
        fireEvent.click(button);

        expect(button).toHaveProperty('disabled', false);

        expect(formRef.current.isValid()).toBeTruthy();
        expect(fieldRef.current.isValid()).toBeTruthy();
    });

    test('range validation', () => {
        const { formRef, fieldRef } = initProps();
        const Wrapper = () => {
            return (
                <MantineProvider>
                    <PalmyraForm formData={{}} ref={formRef}>
                        <MantineTextField attribute="number" range={{ end: 5, errorMessage: "range 5" }} label="Number" ref={fieldRef} />
                        <Button onClick={() => { console.log("button") }} disabled={true}>Submit</Button>
                    </PalmyraForm>
                </MantineProvider>
            );
        };

        render(<Wrapper />);

        const button = screen.getByRole('button', { name: /submit/i });
        const input = screen.getByLabelText('Number');

        fireEvent.change(input, { target: { value: '14' } });
        fireEvent.click(button);

        const errorMessage = screen.getByText(/range 5/i);
        expect(button).toHaveProperty('disabled', true);
        expect(errorMessage).toBeTruthy();

        expect(formRef.current.isValid()).toBeFalsy();
        expect(fieldRef.current.isValid()).toBeFalsy();
    });


    test('range validation', () => {
        const { formRef, fieldRef } = initProps();
        const Wrapper = () => {
            return (
                <MantineProvider>
                    <PalmyraForm formData={{}} ref={formRef}>
                        <MantineTextField attribute="number" range={{ end: 5 }} invalidMessage="range 5" label="Number" ref={fieldRef} />
                        <Button onClick={() => { console.log("button") }} disabled={true}>Submit</Button>
                    </PalmyraForm>
                </MantineProvider>
            );
        };

        render(<Wrapper />);

        const button = screen.getByRole('button', { name: /submit/i });
        const input = screen.getByLabelText('Number');

        fireEvent.change(input, { target: { value: '14' } });
        fireEvent.click(button);

        const errorMessage = screen.getByText(/range 5/i);
        expect(button).toHaveProperty('disabled', true);
        expect(errorMessage).toBeTruthy();

        expect(formRef.current.isValid()).toBeFalsy();
        expect(fieldRef.current.isValid()).toBeFalsy();
    });
})