import { useRef } from "react";
import { TbFilterShare } from "react-icons/tb";
import { DropdownButton, IDropdown } from "../../widget";
import { FilterForm } from "../plugins/filter/FilterForm";
import { DataGridPluginOptions } from "@palmyralabs/rt-forms";

interface IFilterInput extends DataGridPluginOptions{
    width?: string
}

const FilterButton = (o: IFilterInput) => {
    const buttonRef = useRef<IDropdown>(null);

    return (<DropdownButton title="Filter" ref={buttonRef}
        PrefixAdornment={<TbFilterShare />} width={o.width || '650'}>
        <FilterForm {...o} onClose={() => buttonRef.current.close()} />
    </DropdownButton>)
}

export { FilterButton }