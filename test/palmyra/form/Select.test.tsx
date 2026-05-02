import { describe, expect, test } from 'vitest';
import { act, render, renderHook } from '@testing-library/react';
import { IForm, ISelectField, PalmyraForm } from '@palmyralabs/rt-forms';
import { useRef } from 'react';
import { MantineProvider } from '@mantine/core';
import { MantineSelect } from '../../../src/main';
import { runStandardFieldTests } from './commons/standardFieldTests';

const STATUS_OPTIONS = { '1': 'Active', '2': 'Inactive' };

describe('MantineSelect', () => {
    runStandardFieldTests<ISelectField>(
        'status',
        '1',
        '2',
        'Status is required',
        (formRef, fieldRef, props) => (
            <MantineSelect
                id="status"
                attribute="status"
                ref={fieldRef}
                label="Status"
                options={STATUS_OPTIONS}
                missingMessage="Status is required"
                disabled={props?.disabled}
                readOnly={props?.readOnly}
                required={props?.required}
            />
        ),
        {
            // Mantine combobox cannot be cleared via native fireEvent.change;
            // all user-input-path tests are skipped — API-path tests still run
            skipUserInputPath: true,
        }
    );

    test('Options mapping - setValue reflects correct key', () => {
        const formRef = renderHook(() => useRef<IForm>(null)).result.current;
        const fieldRef = renderHook(() => useRef<ISelectField>(null)).result.current;
        render(
            <PalmyraForm formData={{ status: '1' }} ref={formRef}>
                <MantineSelect
                    attribute="status"
                    ref={fieldRef}
                    label="Status"
                    options={STATUS_OPTIONS}
                />
            </PalmyraForm>,
            { wrapper: MantineProvider }
        );
        expect(fieldRef.current!.getValue()).toBe('1');

        act(() => { fieldRef.current!.setValue('2'); });
        expect(fieldRef.current!.getValue()).toBe('2');
        expect(formRef.current!.getData().status).toBe('2');
    });

    test('Options mapping - null value clears selection', () => {
        const formRef = renderHook(() => useRef<IForm>(null)).result.current;
        const fieldRef = renderHook(() => useRef<ISelectField>(null)).result.current;
        render(
            <PalmyraForm formData={{ status: '1' }} ref={formRef}>
                <MantineSelect
                    attribute="status"
                    ref={fieldRef}
                    label="Status"
                    options={STATUS_OPTIONS}
                />
            </PalmyraForm>,
            { wrapper: MantineProvider }
        );
        act(() => { fieldRef.current!.setValue(null); });
        expect(fieldRef.current!.getValue()).toBeNull();
    });
});
