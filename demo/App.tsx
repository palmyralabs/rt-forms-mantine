
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { SampleForm } from './components/SampleForm';
import { SampleNewForm } from './components/SampleNewForm';
import { SampleGrid } from './components/SampleGrid';
import { SampleViewForm } from './components/SampleViewForm';

function App() {

  return (
    <>
      {/* <SampleNewForm /> */}
      <SampleForm /> 
      {/* <SampleGrid /> */}

      <SampleViewForm />
    </>

  )
}

export default App;