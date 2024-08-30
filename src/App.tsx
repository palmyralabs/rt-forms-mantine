import { TextInput } from '@mantine/core'
import FormX from './components/wire/FormX'
import { MantineTextField } from './palmyra/mantine/MantineTextField'
import '@mantine/core/styles.css';
import { MantineTextArea } from './palmyra/mantine/MantineTextArea';
import { MantineSwitch } from './palmyra/mantine/MuiSwitch';

function App() {

  return (
    <>
      <TextInput label="ASd" required />
      <FormX>
        <MantineTextField attribute='text' title={"Text"} variant='default' validRule={"alphabets"} invalidMessage='Alphabets only' />
        <MantineTextField attribute='text' title={"Text"} variant='default' length={{ eq: 5, /*errorMessage: "Length is 5"*/ }} />
        <MantineTextField attribute='text' title={"Text"} variant='default' regExp={/^[0-9]*$/} />
        <MantineTextField attribute='text' label={"Text"} defaultValue={"Asd"} required />


        <MantineTextArea key="asd" attribute='textArea' title={"Text Area"} variant='default' validRule={"alphabets"} invalidMessage='Alphabets only' />
        <MantineTextArea attribute='textArea' title={"Text Area"} variant='default' length={{ eq: 5 }} />
        <MantineTextArea attribute='textArea' title={"Text Area"} variant='default' regExp={/^[0-9]*$/} />
        <MantineTextArea attribute='textArea' label={"Text Area"} defaultValue={"Asd"} required />

        <MantineSwitch attribute='switch' defaultValue={"Asd"} required onLabel="Enabled"
          offLabel="Disabled" size='lg' options={{ "Enabled": 1, "Disabled": 2 }} />

      </FormX>

    </>

  )
}

export default App;