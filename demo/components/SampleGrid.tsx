import { ServerGrid } from "./grid/ServerGrid";
import { DemoShell } from "./DemoShell";

const SampleGrid = () => {
    return (
        <DemoShell title="Data Grid" description="Server-driven grid with search, sorting, pagination and export">
            <ServerGrid />
        </DemoShell>
    );
};

export { SampleGrid };
