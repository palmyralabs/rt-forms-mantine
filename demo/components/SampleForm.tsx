import { IEndPoint, PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";
import { ISaveForm, PalmyraEditForm } from "@palmyralabs/rt-forms";
import { Button, SimpleGrid } from "@mantine/core";
import { useMemo, useRef, useState } from "react";
import {
    MantineDatePickerInput, MantineDateTimePicker, MantineMultiSelect,
    MantineNumberField, MantinePasswordField, MantineRadioGroup, MantineRangeSlider,
    MantineRating, MantineSelect, MantineServerLookup, MantineSlider, MantineSwitch,
    MantineTextArea, MantineTextField, MantineTimeInput
} from "../../src/main";
import { DemoShell } from "./DemoShell";
import { DemoSection } from "./DemoSection";
import { LookupConfig } from "./LookupConfig";

const SampleForm = () => {
    const [baseUrl, setBaseUrl] = useState("/demo/testdata/form/");
    const [lookupEndPoint, setLookupEndPoint] = useState("/serverlookupData.json");

    const storeFactory = useMemo(() => new PalmyraStoreFactory({ baseUrl }), [baseUrl]);
    const formRef = useRef<ISaveForm>(null);

    const endPoint: IEndPoint = {
        get: '1.json', query: '1.json', put: '1.json', post: '1.json'
    };

    const logData = () => console.log(formRef.current?.getData());
    const saveData = () => formRef.current?.saveData()
        .then((d: any) => console.log('saved', d))
        .catch((e: any) => console.error(e));

    const actions = (
        <>
            <Button size="xs" variant="default" onClick={logData}>Log Data</Button>
            <Button size="xs" onClick={saveData}>Update</Button>
        </>
    );

    const cols = { base: 1, sm: 2, lg: 3 };

    return (
        <DemoShell title="Edit Form" description="Loads record id 1 and binds every field to existing values" actions={actions}>
            <LookupConfig baseUrl={baseUrl} endPoint={lookupEndPoint}
                onBaseUrl={setBaseUrl} onEndPoint={setLookupEndPoint} />

            <PalmyraEditForm key={baseUrl} id="1" endPoint={endPoint} storeFactory={storeFactory} ref={formRef}>
                <DemoSection title="Basic details">
                    <SimpleGrid cols={cols} spacing="sm" verticalSpacing="xs">
                        <MantineTextField attribute="name" label="Name" />
                        <MantinePasswordField attribute="password" label="Password" />
                        <MantineTextArea attribute="area" label="About" />
                    </SimpleGrid>
                </DemoSection>

                <DemoSection title="Choices">
                    <SimpleGrid cols={cols} spacing="sm" verticalSpacing="xs">
                        <MantineNumberField attribute="population" label="Population" />
                        <MantineSelect attribute="select" required label="State"
                            options={{ 1: 'Tamil Nadu', 2: 'Kerala', 3: 'Maharastra', 4: 'Karnataka' }} />
                        <MantineMultiSelect attribute="multiSelect" label="Multi select" placeholder="Pick many"
                            options={{ 1: 'Tamil Nadu', 2: 'Kerala', 3: 'Maharastra', 4: 'Karnataka' }} />
                        <MantineSwitch attribute="switch" label="Switch" options={{ True: true, False: false }} />
                        <MantineRadioGroup attribute="radio" label="Flag" options={{ 1: 'true', 0: 'false' }} />
                    </SimpleGrid>
                </DemoSection>

                <DemoSection title="Date & time">
                    <SimpleGrid cols={cols} spacing="sm" verticalSpacing="xs">
                        <MantineDatePickerInput attribute="dates" label="Date range" valueFormat="DD-MMM-YYYY" type="range" />
                        <MantineDatePickerInput attribute="date" label="Date" valueFormat="DD-MM-YYYY" />
                        <MantineTimeInput attribute="time" label="Time" />
                        <MantineDateTimePicker attribute="dateTime" label="Date time" valueFormat="DD-MM-YYYY hh:mm:ss" />
                    </SimpleGrid>
                </DemoSection>

                <DemoSection title="Ratings & sliders">
                    <SimpleGrid cols={cols} spacing="sm" verticalSpacing="xs">
                        <MantineRating attribute="rating" fractions={2} />
                        <MantineSlider attribute="slider" label="Slider" />
                        <MantineRangeSlider attribute="rangeSlider" label="Range slider" />
                    </SimpleGrid>
                </DemoSection>

                <DemoSection title="Lookup">
                    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm" verticalSpacing="xs">
                        <MantineServerLookup attribute="serverLookup" title="Country"
                            lookupOptions={{ labelAttribute: 'name', idAttribute: 'id' }}
                            queryOptions={{ endPoint: lookupEndPoint as any, labelAttribute: 'name', idAttribute: 'id' }} />
                    </SimpleGrid>
                </DemoSection>
            </PalmyraEditForm>
        </DemoShell>
    );
};

export { SampleForm };
