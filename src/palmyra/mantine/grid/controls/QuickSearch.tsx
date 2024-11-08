import { useState } from "react"
import { IPluginBtnControl } from "./types";
import { DataGridPluginOptions } from "@palmyralabs/rt-forms";
import { TextInput, rem } from "@mantine/core";
import { IoMdSearch } from "react-icons/io";

interface IQuickSearchOptions extends Pick<DataGridPluginOptions, 'queryRef' | 'columns'>, IPluginBtnControl {
    width: string
}

export type TextFieldVariants = 'outlined' | 'standard' | 'filled';

type TextFieldProps = React.ComponentProps<typeof TextInput>

const QuickSearch = (options: IQuickSearchOptions & TextFieldProps) => {
    const { width, queryRef, ...o } = options;
    const [searchText, setSearchText] = useState<string>('');
    const visible = o.visible != false;

    const onSearchTextChange = (event) => {
        const val: string = event.target.value;
        setSearchText(val);
        if (queryRef?.current) {
            if (val && val.length > 0)
                queryRef.current.setQuickSearch(val + '*');
            else {
                queryRef.current.setQuickSearch(null);
            }
        }
    };

    return <> {visible &&
        <TextInput
            value={searchText}
            rightSection={<IoMdSearch style={{ width: rem(18), height: rem(18) }}/>}
            onChange={onSearchTextChange}
            className="py-dataGrid-search-field"
            placeholder="Quick Search"
            {...o}
        />
    }</>
}

export { QuickSearch }