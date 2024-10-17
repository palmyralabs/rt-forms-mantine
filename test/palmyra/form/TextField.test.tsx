import { describe, expect, test } from "vitest";
import { act, fireEvent, queryByAttribute, render, renderHook, screen } from '@testing-library/react';
import { IForm, IInputField, PalmyraForm } from "@palmyralabs/rt-forms";
import { useRef } from "react";
import { testMandatory2Optional, testOptional2Mandatory } from "./commons/util";
import { MantineTextField } from "../../../src/main";
import { MantineProvider } from "@mantine/core";


describe('Textfield', () => {

    const initProps = () => {
        const getById = queryByAttribute.bind(null, 'id');
        const formRef = renderHook(() => useRef<IForm>()).result.current;
        const fieldRef = renderHook(() => useRef<IInputField>()).result.current;
        return { getById, formRef, fieldRef }
    }

    test('Verify Email', () => {
        const getById = queryByAttribute.bind(null, 'id');
        const rdr = renderHook(() => useRef<IForm>());
        const formRef = rdr.result.current;
        const textFieldDefn = <PalmyraForm formData={{ emailAddress: "welcome" }} ref={formRef} >
            <MantineTextField id="emailAddress" attribute="emailAddress"
                validRule={{ rule: "email", errorMessage: "Invalid Email Address" }} />
        </PalmyraForm>

        const dom = render(textFieldDefn, {wrapper:MantineProvider});
        expect(screen.getByText("Invalid Email Address")).toBeDefined()

        const textField = getById(dom.container, 'emailAddress');
        act(() => {
            fireEvent.change(textField, { target: { value: 'hello@gmail.com' } });
        });

        expect(() => screen.getByText("Invalid Email Address")).toThrow();
    });

    test('Disabled -> Enabled', () => {
        const { getById, formRef, fieldRef } = initProps();
        const textFieldDefn = <PalmyraForm formData={{ emailAddress: "welcome" }} ref={formRef} >
                <MantineTextField id="emailAddress" attribute="emailAddress" ref={fieldRef}
                    disabled validRule={{ rule: "email", errorMessage: "Invalid Email Address" }} />
            </PalmyraForm>

        const dom = render(textFieldDefn, {wrapper:MantineProvider});
        expect(screen.getByText("Invalid Email Address")).toBeDefined()

        const textField = getById(dom.container, 'emailAddress');
        expect(textField).toHaveProperty('disabled', true)

        act(() => {
            fieldRef.current.setValue('hello');
            fieldRef.current.setDisabled(false);
        });

        expect(textField).toHaveProperty('disabled', false)
    })

    test('Enabled -> Disabled', () => {
        const { getById, formRef, fieldRef } = initProps();
        const textFieldDefn = <PalmyraForm formData={{ emailAddress: "welcome" }} ref={formRef} >
            <MantineTextField id="emailAddress" attribute="emailAddress" ref={fieldRef}
                validRule={{ rule: "email", errorMessage: "Invalid Email Address" }} />
        </PalmyraForm>

        const dom = render(textFieldDefn, {wrapper:MantineProvider});
        expect(screen.getByText("Invalid Email Address")).toBeDefined()

        const textField = getById(dom.container, 'emailAddress');
        expect(textField).toHaveProperty('disabled', false)

        act(() => {
            fieldRef.current.setValue('hello');
            fieldRef.current.setDisabled(true);
        });

        expect(textField).toHaveProperty('disabled', true)
    })


    test('Optional -> Mandatory', () => {
        const { getById, formRef, fieldRef } = initProps();
        const textFieldDefn = <PalmyraForm formData={{ emailAddress: "welcome" }} ref={formRef} >
            <MantineTextField id="emailAddress" attribute="emailAddress" ref={fieldRef}
                missingMessage="Blank not allowed" />
        </PalmyraForm>

        const dom = render(textFieldDefn, {wrapper:MantineProvider});

        const textField = getById(dom.container, 'emailAddress');
        testOptional2Mandatory(textField, fieldRef, "Blank not allowed");
    })

    test('Mandatory -> Optional', () => {
        const { getById, formRef, fieldRef } = initProps();
        const textFieldDefn = <PalmyraForm formData={{ emailAddress: "welcome" }} ref={formRef} >
            <MantineTextField id="emailAddress" attribute="emailAddress" ref={fieldRef}
                missingMessage="Blank not allowed" required />
        </PalmyraForm>

        const dom = render(textFieldDefn, {wrapper:MantineProvider});

        const textField = getById(dom.container, 'emailAddress');
        testMandatory2Optional(textField, fieldRef, "Blank not allowed")
    })

});