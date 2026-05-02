import { describe } from 'vitest';
import { ITextField } from '@palmyralabs/rt-forms';
import { MantinePasswordField } from '../../../src/main';
import { runStandardFieldTests } from './commons/standardFieldTests';

describe('MantinePasswordField', () => {
    runStandardFieldTests<ITextField>(
        'password',
        'secret123',
        'newpass456',
        'Password is required',
        (formRef, fieldRef, props) => (
            <MantinePasswordField
                id="password"
                attribute="password"
                ref={fieldRef}
                label="Password"
                missingMessage="Password is required"
                disabled={props?.disabled}
                readOnly={props?.readOnly}
                required={props?.required}
            />
        )
    );
});
