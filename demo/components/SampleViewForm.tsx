import { IEndPoint, PalmyraStoreFactory, StoreFactory } from "@palmyralabs/palmyra-wire";
import { PalmyraViewForm } from "@palmyralabs/rt-forms";
import { SimpleGrid } from "@mantine/core";
import { MantineTextView } from "../../src/palmyra/mantine/form/view/MantineTextView";
import { MantineOptionsView } from "../../src/palmyra/mantine/form/view/MantineOptionsView";
import { MantineDateView } from "../../src/palmyra/mantine/form/view/MantineDateView";
import { MantineLookupView } from "../../src/palmyra/mantine/form/view/MantineLookupView";
import { DemoShell } from "./DemoShell";

const SampleViewForm = () => {
    const storeFactory: StoreFactory<any, any> = new PalmyraStoreFactory({ baseUrl: 'demo/testdata/form/' });

    const endPoint: IEndPoint = {
        get: '1.json', query: '1.json', put: '1.json', post: '1.json'
    };

    return (
        <DemoShell title="View Form" description="Read-only presentation of record id 1 — hover a value to copy">
            <PalmyraViewForm storeFactory={storeFactory} endPoint={endPoint} id="1">
                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl" verticalSpacing="lg">
                    <MantineTextView attribute="name" label="Text View" copyable variant="outlined" />
                    <MantineOptionsView attribute="select" label="Options View" copyable variant="outlined"
                        options={{ 1: 'Male', 3: 'Female' }} />
                    <MantineLookupView attribute="serverLookup" label="Lookup View" copyable variant="outlined"
                        lookupOptions={{ idAttribute: "id", labelAttribute: "name" }} />
                    <MantineDateView attribute="date" label="Date View" copyable variant="outlined"
                        displayPattern="DD/MM/YYYY" />
                </SimpleGrid>
            </PalmyraViewForm>
        </DemoShell>
    );
};

export { SampleViewForm };
