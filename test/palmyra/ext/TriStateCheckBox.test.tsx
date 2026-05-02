import { describe, expect, test, vi } from 'vitest';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { TriStateCheckBox } from '../../../src/main';

describe('TriStateCheckBox', () => {

    test('Initial state is neutral (value=0)', () => {
        render(<TriStateCheckBox />, { wrapper: MantineProvider });
        const checkbox = screen.getByRole('checkbox');
        // neutral: indeterminate=true, checked=false, label=""
        expect(checkbox).toHaveProperty('indeterminate', true);
        expect(checkbox).toHaveProperty('checked', false);
        expect(screen.queryByText('Pass')).toBeNull();
        expect(screen.queryByText('Fail')).toBeNull();
    });

    test('Initial state respects value prop (value=1 = Pass)', () => {
        render(<TriStateCheckBox value={1} />, { wrapper: MantineProvider });
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toHaveProperty('checked', true);
        expect(screen.getByText('Pass')).toBeDefined();
    });

    test('Initial state respects value prop (value=-1 = Fail)', () => {
        render(<TriStateCheckBox value={-1} />, { wrapper: MantineProvider });
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toHaveProperty('checked', true);
        expect(screen.getByText('Fail')).toBeDefined();
    });

    test('Cycles: neutral → Pass → Fail → neutral on successive clicks', () => {
        render(<TriStateCheckBox />, { wrapper: MantineProvider });
        const checkbox = screen.getByRole('checkbox');

        // neutral → Pass
        act(() => { fireEvent.click(checkbox); });
        expect(screen.getByText('Pass')).toBeDefined();
        expect(screen.queryByText('Fail')).toBeNull();

        // Pass → Fail
        act(() => { fireEvent.click(checkbox); });
        expect(screen.getByText('Fail')).toBeDefined();
        expect(screen.queryByText('Pass')).toBeNull();

        // Fail → neutral
        act(() => { fireEvent.click(checkbox); });
        expect(screen.queryByText('Pass')).toBeNull();
        expect(screen.queryByText('Fail')).toBeNull();
    });

    test('Disabled - renders with disabled attribute and stays neutral', () => {
        render(<TriStateCheckBox disabled />, { wrapper: MantineProvider });
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toHaveProperty('disabled', true);
        // indeterminate = neutral state (value=0)
        expect(checkbox).toHaveProperty('indeterminate', true);
        expect(screen.queryByText('Pass')).toBeNull();
        expect(screen.queryByText('Fail')).toBeNull();
        // NOTE: fireEvent.click bypasses the browser's disabled behaviour in jsdom;
        // use @testing-library/user-event if click-prevention must be asserted
    });

    test('Custom onChange overrides internal handler', () => {
        const customHandler = vi.fn();
        render(
            <TriStateCheckBox onChange={customHandler} />,
            { wrapper: MantineProvider }
        );
        const checkbox = screen.getByRole('checkbox');

        act(() => { fireEvent.click(checkbox); });
        expect(customHandler).toHaveBeenCalledTimes(1);
        // custom handler takes over — internal cycling does not occur
        expect(screen.queryByText('Pass')).toBeNull();
    });
});
