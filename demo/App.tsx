import { TextInput } from '@mantine/core'
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { MantineCheckBox, MantineSwitch, MantineTextArea, MantineTextField } from '../src/main';
import FormX from './components/wire/FormX';
import { MantineSelect } from '../src/palmyra/mantine/MantineSelect';
// import { MantineServerLookup } from '../src/palmyra/mantine/MantineServerLookup';

function App() {

  return (
    <>
      <TextInput label="ASd" required defaultValue={"Asd"} />
      <FormX>
        {/* <MantineTextField attribute='text' title={"Text"} variant='default' validRule={"alphabets"} invalidMessage='Alphabets only' /> */}
        {/* <MantineTextField attribute='text' title={"Text"} variant='default' length={{ eq: 5, /*errorMessage: "Length is 5" }} /> */}
        {/* <MantineTextField attribute='text' title={"Text"} variant='default' regExp={/^[0-9]*$/} required />
        <MantineTextField attribute='text' label={"Text"} defaultValue={"Asd"} placeholder='asd' /> */}


        {/* <MantineTextArea key="asd" attribute='textArea' title={"Text Area"} variant='default' validRule={"alphabets"} invalidMessage='Alphabets only' />
        <MantineTextArea attribute='textArea' title={"Text Area"} variant='default' length={{ eq: 5 }} />
        <MantineTextArea attribute='textArea' title={"Text Area"} variant='default' regExp={/^[0-9]*$/} />
        <MantineTextArea attribute='textArea' label={"Text Area"} defaultValue={"Asd"} required />

        <MantineSwitch attribute='switch' defaultValue={"Asd"} required onLabel="Enabled"
          offLabel="Disabled" size='lg' options={{ "Enabled": 1, "Disabled": 2 }} /> */}

        {/* <MantineCheckBox attribute='check' label={"Checkbox"} />
        <MantineCheckBoxGroup attribute='check' label={"Checkbox Group"} defaultValue={1}
          options={{ 1: 'Tamilnadu', 2: 'Kerala', 3: 'Maharastra', 4: 'Karnataka' }} />

        <MantineRadioGroup attribute='check' label={"Checkbox Group"} defaultValue={1}
          options={{ 1: 'Tamilnadu', 2: 'Kerala', 3: 'Maharastra', 4: 'Karnataka' }} /> */}

        <MantineSelect
          attribute="select" required defaultValue='2' label={"asd"}
          options={{ 1: 'Tamil Nadu', 2: 'Kerala', 3: 'Maharastra', 4: 'Karnataka' }}
        />
        <MantineTextField attribute='text' label={"Text"} defaultValue={"Asd"} placeholder='asd' />
      </FormX>

    </>

  )
}

export default App;