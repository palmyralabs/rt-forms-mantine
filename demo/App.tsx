import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import './demo.css';

import { useState } from 'react';
import { Badge, Container, Group, Tabs, Text } from '@mantine/core';
import { SampleForm } from './components/SampleForm';
import { SampleNewForm } from './components/SampleNewForm';
import { SampleGrid } from './components/SampleGrid';
import { SampleViewForm } from './components/SampleViewForm';

function App() {
  const [tab, setTab] = useState<string | null>('new');

  return (
    <div className="demo-root">
      <header className="demo-header">
        <Container size="lg">
          <Group justify="space-between" align="center">
            <div>
              <Text className="demo-header-title" fz={20}>rt-forms-mantine</Text>
              <Text className="demo-header-sub" fz="xs">Component playground for forms, views and grids</Text>
            </div>
            <Badge size="md" variant="white" color="indigo">Mantine v9</Badge>
          </Group>
        </Container>
      </header>

      <Tabs value={tab} onChange={setTab} variant="pills" radius="md" keepMounted={false}>
        <div className="demo-tabs">
          <Container size="lg">
            <Tabs.List>
              <Tabs.Tab value="new">New Form</Tabs.Tab>
              <Tabs.Tab value="edit">Edit Form</Tabs.Tab>
              <Tabs.Tab value="view">View Form</Tabs.Tab>
              <Tabs.Tab value="grid">Data Grid</Tabs.Tab>
            </Tabs.List>
          </Container>
        </div>

        <Container size="lg" py="md">
          <Tabs.Panel value="new"><SampleNewForm /></Tabs.Panel>
          <Tabs.Panel value="edit"><SampleForm /></Tabs.Panel>
          <Tabs.Panel value="view"><SampleViewForm /></Tabs.Panel>
          <Tabs.Panel value="grid"><SampleGrid /></Tabs.Panel>
        </Container>
      </Tabs>
    </div>
  );
}

export default App;
