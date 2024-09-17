import { useRef } from "react";
import { TbFilterShare } from "react-icons/tb";
import { DropdownButton, IDropdown } from "../../widget";
import { FilterForm } from "../plugins/filter/FilterForm";
import { DataGridPluginOptions } from "@palmyralabs/rt-forms";

const FilterButton = (o: DataGridPluginOptions) => {
    const buttonRef = useRef<IDropdown>();

    return (<DropdownButton title="Filter" ref={buttonRef}
        PrefixAdornment={<TbFilterShare />}>
        
        <FilterForm {...o} onClose={() => buttonRef.current.close()} />
    </DropdownButton>)
}

export { FilterButton }