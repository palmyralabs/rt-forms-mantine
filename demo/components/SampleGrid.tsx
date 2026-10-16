import { ServerGrid } from "./grid/ServerGrid";
import { DemoShell } from "./DemoShell";

const SampleGrid = () => {
    return (
        <DemoShell title="Data Grid" description="Server-driven grid (read-only) — search, select, expand, pagination, export">
            <ServerGrid />
        </DemoShell>
    );
};

export { SampleGrid };
