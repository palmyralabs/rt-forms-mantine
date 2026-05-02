import { describe } from 'vitest';
import { ITextField } from '@palmyralabs/rt-forms';
import { MantineTextArea } from '../../../src/main';
import { runStandardFieldTests } from './commons/standardFieldTests';

describe('MantineTextArea', () => {
    runStandardFieldTests<ITextField>(
        'notes',
        'Hello world',
        'Updated notes',
        'Notes are required',
        (formRef, fieldRef, props) => (
            <MantineTextArea
                id="notes"
                attribute="notes"
                ref={fieldRef}
                label="Notes"
                missingMessage="Notes are required"
                disabled={props?.disabled}
                readOnly={props?.readOnly}
                required={props?.required}
            />
        )
    );
});
