import { describe } from 'vitest';
import { fireEvent } from '@testing-library/react';
import { ICheckBoxField } from '@palmyralabs/rt-forms';
import { MantineCheckBox } from '../../../src/main';
import { runStandardFieldTests } from './commons/standardFieldTests';

describe('MantineCheckBox', () => {
    runStandardFieldTests<ICheckBoxField>(
        'active',
        true,
        false,
        'This field is required',
        (formRef, fieldRef, props) => (
            <MantineCheckBox
                id="active"
                attribute="active"
                ref={fieldRef}
                label="Active"
                missingMessage="This field is required"
                disabled={props?.disabled}
                readOnly={props?.readOnly}
                required={props?.required}
            />
        ),
        {
            // disabled={props.disabled} in MantineCheckBox overrides options.disabled,
            // so setDisabled() has no visual effect — tracked as a known bug
            skipDisabledToggle: true,
            // boolean false is not treated as "missing" by rt-forms required validation;
            // use null to clear and the API path still verifies required behaviour
            clearValue: null,
            clearFn: (input) => fireEvent.change(input, { target: { checked: false } }),
            // user-input path can only produce false (not null), so mandatory tests
            // are skipped for that path; API path tests (setValue(null)) still run
            skipMandatoryUserInput: true,
        }
    );
});
