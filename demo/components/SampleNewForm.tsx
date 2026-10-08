import { IEndPoint, PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";
import { ISaveForm, PalmyraNewForm } from "@palmyralabs/rt-forms";
import { Button, SimpleGrid, Text } from "@mantine/core";
import { useMemo, useRef, useState } from "react";
import {
    LookupSelect, MantineCurrencyField, MantineDateInput, MantineDatePickerInput,
    MantineDateTimePicker, MantineMultiSelect, MantineNumberField, MantinePasswordField,
    MantineRadioGroup, MantineSelect, MantineServerLookup, MantineSwitch, MantineTextArea,
    MantineTextField, MantineYearInput
} from "../../src/main";
import { DemoShell } from "./DemoShell";
import { DemoSection } from "./DemoSection";
import { LookupConfig } from "./LookupConfig";

const SampleNewForm = () => {
    const [baseUrl, setBaseUrl] = useState("/api/palmyra");
    const [lookupEndPoint, setLookupEndPoint] = useState("/userManagement");

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
            <Button size="xs" onClick={saveData}>Save</Button>
        </>
    );

    const cols = { base: 1, sm: 2, lg: 3 };

    return (
        <DemoShell title="New Form" description="Create record — every input field with grouped layout" actions={actions}>
            <LookupConfig baseUrl={baseUrl} endPoint={lookupEndPoint}
                onBaseUrl={setBaseUrl} onEndPoint={setLookupEndPoint} />

            <PalmyraNewForm key={baseUrl} endPoint={endPoint} storeFactory={storeFactory} ref={formRef}>
                <DemoSection title="Basic details">
                    <SimpleGrid cols={cols} spacing="sm" verticalSpacing="xs">
                        <MantineTextField attribute="name" label="Name" placeholder="Full name" />
                        <MantinePasswordField attribute="password" label="Password" placeholder="••••••" />
                        <MantineSwitch attribute="active" label="Active" options={{ True: true, False: false }} />
                        <MantineTextArea attribute="area" label="About" placeholder="Short description" />
                    </SimpleGrid>
                </DemoSection>

                <DemoSection title="Numbers & money">
                    <SimpleGrid cols={cols} spacing="sm" verticalSpacing="xs">
                        <MantineNumberField attribute="population" label="Population" defaultValue={212} />
                        <MantineCurrencyField attribute="amount" label="Payable amount" />
                    </SimpleGrid>
                </DemoSection>

                <DemoSection title="Choices">
                    <SimpleGrid cols={cols} spacing="sm" verticalSpacing="xs">
                        <MantineSelect attribute="state" required label="State"
                            options={{ 1: 'Tamil Nadu', 2: 'Kerala', 3: 'Maharastra', 4: 'Karnataka' }} />
                        <MantineMultiSelect attribute="states" label="States" placeholder="Pick many"
                            options={{ 1: 'Tamil Nadu', 2: 'Kerala', 3: 'Maharastra', 4: 'Karnataka' }} />
                        <MantineRadioGroup attribute="gender" label="Gender" options={{ 1: 'Male', 0: 'Female' }} />
                    </SimpleGrid>
                </DemoSection>

                <DemoSection title="Date & time">
                    <SimpleGrid cols={cols} spacing="sm" verticalSpacing="xs">
                        <MantineDatePickerInput attribute="date" label="Date" valueFormat="DD-MM-YYYY" />
                        <MantineDateInput attribute="dateInput" label="Date input" valueFormat="DD-MM-YYYY" />
                        <MantineDateTimePicker attribute="dateTime" label="Date time" valueFormat="DD-MM-YYYY hh:mm:ss" />
                        <MantineYearInput attribute="year" label="Year" valueFormat="YYYY" serverPattern="YYYY" />
                    </SimpleGrid>
                </DemoSection>

                <DemoSection title="Lookups">
                    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm" verticalSpacing="xs">
                        <LookupSelect attribute="userId" label="User (LookupSelect)"
                            endPoint={lookupEndPoint} idAttribute="id" labelAttribute="email"
                            queryAttribute="email" searchable clearable fetchLimit={15}
                            nothingFoundMessage="No users found"
                            getOptionLabel={(d) => `${d.displayName} - ${d.email}`}
                            renderOption={(d) => (
                                <Text component="span" size="sm">
                                    <Text component="span" fw={600}>{d.displayName}</Text>{' '}
                                    <Text component="span" c="teal" size="xs">{d.email}</Text>
                                </Text>
                            )}
                            onChange={(id, record) => console.log('LookupSelect', id, record)} />

                        <MantineServerLookup attribute="userLookup" label="User (ServerLookup)"
                            lookupOptions={{ labelAttribute: 'email', idAttribute: 'id' }}
                            queryOptions={{ endPoint: lookupEndPoint as any, labelAttribute: 'email', idAttribute: 'id' }}
                            getOptionLabel={(d) => `${d.displayName} - ${d.email}`}
                            renderOption={(d) => (
                                <Text component="span" size="sm">
                                    <Text component="span" fw={600}>{d.displayName}</Text>{' '}
                                    <Text component="span" c="grape" size="xs">{d.email}</Text>
                                </Text>
                            )} />
                    </SimpleGrid>
                </DemoSection>
            </PalmyraNewForm>
        </DemoShell>
    );
};

export { SampleNewForm };
