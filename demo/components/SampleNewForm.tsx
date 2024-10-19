import { IEndPoint, PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";
import { ISaveForm, PalmyraEditForm, PalmyraNewForm } from "@palmyralabs/rt-forms";
import { MantineCheckBox, MantinePasswordField, MantineRadio, MantineRadioGroup, MantineSwitch, MantineTextArea, MantineTextField } from "../../src/main";
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

const SampleNewForm = () => {

    const storeFactory = new PalmyraStoreFactory({ baseUrl: "/demo/testdata/form/" });
    const formRef = useRef<ISaveForm>();
    const endPoint: IEndPoint = {
        get: '1.json',
        query: '1.json', put: '1.json',
        post: '1.json'
    }

    return (
        <>

            <DatePickerInput />

            <PalmyraNewForm endPoint={endPoint}
                storeFactory={storeFactory} ref={formRef}>
                {/* <MantineTextField attribute="name" defaultValue="123" />
                <MantineTextArea attribute="area" defaultValue={"123"} />
                <MantineSwitch attribute="switch" defaultValue={0} options={{ 1: 'True', 0: 'False' }} />
                <MantineSwitch attribute="switch" defaultValue={'true'} options={{ True: 'true', False: 'false' }} />
                <MantineNumberField attribute="population" defaultValue={212} />
                <MantineSelect
                    attribute="select" required label={"Select"} defaultValue="1"
                    options={{ 1: 'Tamil Nadu', 2: 'Kerala', 3: 'Maharastra', 4: 'Karnataka' }}
                />
                <MantineSlider attribute="slider" defaultValue={70} label={"Slider"} />
                <MantineMultiSelect
                    defaultValue={["2"]}
                    attribute="multiSelect" label={"Multi Select"} placeholder='Multi Select'
                    options={{ 1: 'Tamil Nadu', 2: 'Kerala', 3: 'Maharastra', 4: 'Karnataka' }}
                />
               
                <MantineRating attribute="rating" fractions={2} defaultValue={4.7} />
                <MantineRangeSlider attribute="rangeSlider" label={"Range Slider"} defaultValue={[10, 30]} />
                <MantineRadioGroup attribute="radio" options={{ 1: 'true', 0: 'false' }} defaultValue={0} />
                <MantineRadio attribute="radio" defaultChecked={true} />
                <MantinePasswordField attribute="password" defaultValue={"new"} /> */}
                {/* <MantineDateTimePicker attribute='dateTime' label={"DateTime"}
                    valueFormat='DD-MM-YYYY hh:mm:ss'
                    // defaultValue={[new Date("2024-01-02"), new Date(2024, 1, 15)]}
                    defaultValue={new Date("2022-01-02 03:12:12")}
                /> */}
                <MantineDatePickerInput attribute='date' label={"Date"}
                    valueFormat='DD-MM-YYYY'
                    defaultValue={new Date("2032-02-15")}
                />

                <MantineDatePickerInput attribute='date' title={"Date"}
                    valueFormat='DD-MM-YYYY' defaultValue={new Date("2032-02-15")}
                />

                <MantineDateTimePicker attribute='dateTime' valueFormat='DD-MM-YYYY hh:mm:ss'
                    defaultValue={new Date("2022-01-02")} label={"Date Time Input"} />

                <MantineDateInput attribute='date' label={"Date Input"}
                    valueFormat='DD-MM-YYYY' defaultValue={new Date("2032-03-10")}
                />

                <MantineServerLookup
                    attribute="serverLookup"
                    title="Select Country"
                    defaultValue={"Germany"}
                    lookupOptions={{ labelAttribute: 'name', idAttribute: 'id' }}
                    queryOptions={{ endPoint: "/serverlookupData.json", labelAttribute: 'name', idAttribute: 'id' }}
                />

                {/* 
                 <MantineCheckBox attribute="switch" defaultChecked={true} /> */}

                {/*<MantineDatePickerInput attribute='dates' label={"Dates"}
                    valueFormat='DD-MM-YYYY'
                    type='range'
                // defaultValue={[new Date("2024-01-02"), new Date(2024, 1, 15)]}
                // defaultValue={["2022-01-02", "2025-05-10"]}
                />
                <MantineDatePickerInput attribute='date' title={"Date"} valueFormat='DD-MM-YYYY'
                    defaultValue={new Date("2022-01-02")}
                />
                
                <MantineSlider attribute="slider" defaultValue={70} label={"Slider"} />
                 */}
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
                />

                <MantineDateTimePicker attribute='dateTime' valueFormat='DD-MM-YYYY hh:mm:ss'
                    defaultValue={new Date("2022-01-02")} label={"Date Time Input"}
                /> */}
            </PalmyraNewForm>

            {/* <SectionContainer title={"Form"} variant="separated" defaultValue="Form">
            <PalmyraEditForm id="1" endPoint={endPoint}
                storeFactory={storeFactory} ref={formRef}>
                <MantineDatePickerInput attribute='date' title={"Date"} valueFormat='DD-MM-YYYY'
                    defaultValue={new Date("2022-01-02")}
                />
                <MantineTriStateCheckBox attribute='check' size="xl" />
                <MantineServerLookup
                    attribute="serverLookup"
                    title="Select Country"
                    // defaultValue={"Germany"}
                    lookupOptions={{ labelAttribute: 'name', idAttribute: 'id' }}
                    queryOptions={{ endPoint: "/serverlookupData.json", labelAttribute: 'name', idAttribute: 'id' }}
                />
            </PalmyraEditForm>
        </SectionContainer> */}
        </>)
}

export { SampleNewForm }