import { IEndPoint, PalmyraStoreFactory, StoreFactory } from "@palmyralabs/palmyra-wire";
import { PalmyraViewForm } from "@palmyralabs/rt-forms";
import { useEffect, useState } from "react";
import { MantineTextView } from "../../src/palmyra/mantine/form/view/MantineTextView";
import { MantineOptionsView } from "../../src/palmyra/mantine/form/view/MantineOptionsView";
import { MantineDateView } from "../../src/palmyra/mantine/form/view/MantineDateView";
import { MantineLookupView } from "../../src/palmyra/mantine/form/view/MantineLookupView";


const SampleViewForm = () => {
    const storeFactory: StoreFactory<any, any> = new PalmyraStoreFactory({ baseUrl: 'demo/testdata/form/' });

    const [data, setData] = useState({});

    useEffect(() => {
        setData({
            textView: "Hello",
            optionsView: 2,
            lookupView: { id: 1, name: 'Tamil Nadu' },
            date: '2024-06-24'
        })
    }, [])

    console.log(data)
    const endPoint: IEndPoint = {
        get: '1.json',
        query: '1.json', put: '1.json',
        post: '1.json'
    }


    return (
        <PalmyraViewForm storeFactory={storeFactory}
            endPoint={endPoint} id="1" >
            <MantineTextView
                attribute="name"
                textAlign='center'
                label="Text View"
                variant="outlined"
            />
            <MantineOptionsView
                attribute="select"
                textAlign='center'
                label="Options View"
                variant="outlined"
                options={{ 1: 'Male', 3: 'Female' }}
            />
            <MantineLookupView
                attribute="serverLookup"
                textAlign='center'
                label="Lookup View"
                variant="outlined"
                lookupOptions={{ idAttribute: "id", labelAttribute: "name" }}
            />
            <MantineDateView
                attribute="date"
                textAlign='center'
                label="Date View"
                variant="outlined"
                displayPattern="DD/MM/YYYY"
            />
        </PalmyraViewForm>
    )
}

export { SampleViewForm }