import { ServerEditGrid } from "./grid/ServerEditGrid";
import { DemoShell } from "./DemoShell";

const SampleEditGrid = () => {
    return (
        <DemoShell title="Edit Grid" description="Dedicated inline-edit grid (PalmyraEditGrid) — batch save-all or per-cell auto-save">
            <ServerEditGrid />
        </DemoShell>
    );
};

export { SampleEditGrid };
