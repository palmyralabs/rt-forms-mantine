import { FieldGroupContainer } from "/home/palmyra/Palmyra_library/ts_lib/rt-forms-mantine/rt-forms-mantine/src/palmyra/mantine/FieldGroupContainer.tsx";
import { PalmyraStoreFactory, StoreFactory } from "@palmyralabs/palmyra-wire";
import { PalmyraForm } from "@palmyralabs/rt-forms";
import { MutableRefObject, useState } from "react";
import React from 'react'

interface IFormInput {
    children: React.ReactNode, 
    formRef?: MutableRefObject<any>
}
const FormX = (props: IFormInput) => {
    const { children } = props;
    const [_isValid, setValid] = useState<boolean>(false);

    const storeFactory: StoreFactory<any, any> = new PalmyraStoreFactory({ baseUrl: '/testdata/form' });

    return (
        <PalmyraForm formData={{}} onValidChange={setValid} ref={props.formRef}
            storeFactory={storeFactory}>
            <FieldGroupContainer>
                <div className="formx-children-container">
                    {children}
                </div>
            </FieldGroupContainer>
        </PalmyraForm>
    )
}

export default FormX;
