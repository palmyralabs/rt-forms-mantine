import { IEndPoint, PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";
import { ISaveForm, PalmyraEditForm, PalmyraNewForm } from "@palmyralabs/rt-forms";
import { MantineCheckBox, MantineNumberPickerInput, MantinePasswordField, MantineRadio, MantineRadioGroup, MantineSwitch, MantineTextArea, MantineTextField, SectionContainer } from "../../src/main";
import { Button } from "@mantine/core";
import { useEffect, useRef } from "react";
import { MantineServerLookup } from "../../src/palmyra/mantine/form/MantineServerLookup";
import { MantineSelect } from "../../src/palmyra/mantine/form/MantineSelect";
import { MantineMultiSelect } from "../../src/palmyra/mantine/form/MantineMultiSelect";
import { MantineNumberField } from "../../src/palmyra/mantine/form/MantineNumberField";
import { MantineDatePickerInput } from "../../src/palmyra/mantine/form/MantineDatePickerInput";
import { DatePicker, DatePickerInput } from "@mantine/dates";
import { MantineRating } from "../../src/palmyra/mantine/form/MantineRating";
import { MantineSlider } from "../../src/palmyra/mantine/form/MantineSlider";
import { MantineRangeSlider } from "../../src/palmyra/mantine/form/MantineRangeSlider";
import { MantineCalendar } from "../../src/palmyra/mantine/form/MantineCalendar";
import { MantineDateInput } from "../../src/palmyra/mantine/form/MantineDateInput";
import { MantineDateTimePicker } from "../../src/palmyra/mantine/form/MantineDateTimePicker";
import { MantineTriStateCheckBox } from "../../src/palmyra/mantine/form/MantineTriStateCheckBox";
import { MantineColorInput } from "../../src/palmyra/mantine/form/MantineColorInput";
import { MantineTimeInput } from "../../src/palmyra/mantine/form/MantineTimeInput";
// import { MantineJsonInput } from "../../src/palmyra/mantine/form/MantineJsonInput";

const SampleForm = () => {

    const storeFactory = new PalmyraStoreFactory({ baseUrl: "/demo/testdata/form/" });
    const formRef = useRef<ISaveForm>();
    const endPoint: IEndPoint = {
        get: '1.json',
        query: '1.json', put: '1.json',
        post: '1.json'
    }

    const saveFormData = () => {
        const s = formRef.current.saveData();
        s.then((d: any) => {
            console.log(d)
        }).catch((e) => {
            if (e.response && e.response.status === 500) {
                console.log(e.response.status)
            }
        });
    }
    console.log(formRef?.current?.getData())

    return (
        <><h1>Edit</h1>
            <PalmyraEditForm id="1" endPoint={endPoint}
                storeFactory={storeFactory} ref={formRef}>
                    <MantineNumberPickerInput attribute="picker" label="Number Picker"/>
                <MantineDatePickerInput attribute='dates' label={"Date Range"}
                    valueFormat='DD-MMM-YYYY' type="range" />
                <MantineDatePickerInput attribute='date' label={"Date"}
                    valueFormat='DD-MM-YYYY' />
                <MantineTimeInput attribute='time' label={"Time"} />
                {/* <MantineTimeInput attribute='times' label={"Time Range"} type="range"/> */}


                <MantineTextField attribute="name" />
                <MantineColorInput attribute="color" />
                {/* <MantineJsonInput attribute="json" /> */}
                <MantineTextArea attribute="area" />
                <MantineSwitch attribute="switch" options={{ True: true, False: false }} />

                <MantineNumberField attribute="population" />
                <MantineSelect
                    attribute="select" required label={"Select"}
                    options={{ 1: 'Tamil Nadu', 2: 'Kerala', 3: 'Maharastra', 4: 'Karnataka' }}
                />
                <MantineSlider attribute="slider" label={"Slider"} />

                <MantineMultiSelect
                    // defaultValue={[]}
                    attribute="multiSelect" label={"Multi Select"} placeholder='Multi Select'
                    options={{ 1: 'Tamil Nadu', 2: 'Kerala', 3: 'Maharastra', 4: 'Karnataka' }}
                />

                <MantineServerLookup
                    attribute="serverLookup"
                    title="Select Country"
                    lookupOptions={{ labelAttribute: 'name', idAttribute: 'id' }}
                    queryOptions={{ endPoint: "/serverlookupData.json", labelAttribute: 'name', idAttribute: 'id' }}
                />

                <MantineRating attribute="rating" fractions={2} />
                <MantineRangeSlider attribute="rangeSlider" label={"Range Slider"} />
                <MantineRadioGroup attribute="radio" options={{ 1: 'true', 0: 'false' }} />
                <MantineRadio attribute="radios" />
                <MantinePasswordField attribute="password" />
                {/* <MantineDateTimePicker attribute='dateTime' label={"DateTime"}
                    valueFormat='DD-MM-YYYY hh:mm:ss'
                /> */}

                <MantineDateTimePicker attribute='dateTime' valueFormat='DD-MM-YYYY hh:mm:ss'
                    defaultValue={new Date("2022-01-02")} label={"Date Time Input"}
                />

                {/* <MantineDateInput attribute='date' label={"Date Input"}
                    valueFormat='DD-MM-YYYY'
                /> */}

                <MantineServerLookup
                    attribute="serverLookup"
                    title="Select Country"
                    // defaultValue={"Germany"}
                    lookupOptions={{ labelAttribute: 'name', idAttribute: 'id' }}
                    queryOptions={{ endPoint: "/serverlookupData.json", labelAttribute: 'name', idAttribute: 'id' }}
                />

                {/* <MantineCheckBox attribute="check" /> */}

                {/* 
                <MantineRadioGroup attribute="radio" options={{ 1: 'true', 0: 'false' }} />
                <MantineDatePickerInput attribute='dates' label={"Dates"}
                    valueFormat='DD-MM-YYYY'
                    type='range'
                // defaultValue={[new Date("2024-01-02"), new Date(2024, 1, 15)]}
                // defaultValue={["2022-01-02", "2025-05-10"]}
                />
                <MantineDatePickerInput attribute='date' title={"Date"} valueFormat='DD-MM-YYYY'
                    defaultValue={new Date("2022-01-02")}
                />
                
                {/* <MantineServerLookup
                    attribute="serverLookup"
                    title="Select Country"
                    // defaultValue={"Germany"}
                    lookupOptions={{ labelAttribute: 'name', idAttribute: 'id' }}
                    queryOptions={{ endPoint: "/serverlookupData.json", labelAttribute: 'name', idAttribute: 'id' }}
                /> */}

                {/* <MantineCalendar attribute='date' valueFormat='DD-MM-YYYY'
                    defaultValue={"2022-01-02"}
                />
                <MantineDateInput attribute='date' valueFormat='DD-MM-YYYY' label={"Date Input"}
                // defaultValue={new Date("2022-01-02")}
                /> */}

                {/* <MantineDateTimePicker attribute='dateTime' valueFormat='DD-MM-YYYY hh:mm:ss'
                    defaultValue={new Date("2022-01-02")} label={"Date Time Input"}
                /> */}
            </PalmyraEditForm>

            <SectionContainer title={"Form"} variant="separated" defaultValue="Form">
                <PalmyraEditForm id="1" endPoint={endPoint}
                    storeFactory={storeFactory} ref={formRef}>
                    <MantineDatePickerInput attribute='date' title={"Date"} valueFormat='DD-MM-YYYY'
                        defaultValue={new Date("2022-01-02")}
                    />
                    <MantineTriStateCheckBox attribute='check' size="xl" />
                </PalmyraEditForm>
            </SectionContainer>
        </>)
}

export { SampleForm }