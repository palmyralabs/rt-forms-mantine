import { describe, expect, test } from "vitest";
import { act, queryByAttribute, render, renderHook } from '@testing-library/react';
import { IDateField, IForm, IInputField, PalmyraForm } from "@palmyralabs/rt-forms";
import { useRef } from "react";
import dayjs from "dayjs";
import { MantineProvider } from "@mantine/core";
import { MantineDatePickerInput } from "../../../src/main";


describe('DatePickerInput', () => {

    const initProps = () => {
        const getById = queryByAttribute.bind(null, 'id');
        const formRef = renderHook(() => useRef<IForm>()).result.current;
        const fieldRef = renderHook(() => useRef<IInputField>()).result.current;
        return { getById, formRef, fieldRef }
    }

    test('Verify DatePicker', () => {
        const getById = queryByAttribute.bind(null, 'id');
        const rdr = renderHook(() => useRef<IForm>());
        const formRef = rdr.result.current;
        const dateRef = renderHook(() => useRef<IDateField>()).result.current;

        const textFieldDefn = <PalmyraForm formData={{ emailAddress: "welcome" }} ref={formRef} >
            <MantineDatePickerInput id="datePicker" attribute="datePicker" ref={dateRef}/>
        </PalmyraForm>

        const dom = render(textFieldDefn, {wrapper:MantineProvider});
        var formData:any = {};
        getById(dom.container, 'datePicker');
        
        act(() => {
            dateRef.current.setValue(dayjs("22-01-2025", "DD-MM-YYYY"));
        });
        formData = formRef.current.getData();
        expect(formData.datePicker).toBe('22-01-2025');

        act(() => {
            dateRef.current.setValue('');
        });
        formData = formRef.current.getData();
        expect(formData.datePicker).toBeNull();

        act(() => {
            dateRef.current.setValue(undefined);
        });
        formData = formRef.current.getData();
        expect(formData.datePicker).toBeNull();

        act(() => {
            dateRef.current.setValue(dayjs("14-df-1995", "MM-DD-YYYY"));
        });
        formData = formRef.current.getData();
        // console.log(formData);
        expect(formData.datePicker).toBeNull();
        
    });

});