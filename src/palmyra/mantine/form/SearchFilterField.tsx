import { useRef } from "react";
import { MdClose } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { Transition } from "@mantine/core";
import { MantineTextField } from "./MantineTextField";

interface SearchFilterFieldProps {
    attribute: string;
    placeholder?: string;
    filter: any;
    setFilter: any;
    handleFilterChange: any;
}

const SearchFilterField = ({
    attribute,
    placeholder,
    filter,
    setFilter,
    handleFilterChange
}: SearchFilterFieldProps) => {

    const inputRef = useRef<any>(null);

    const handleClear = () => {
        if (inputRef.current?.setValue) {
            inputRef.current.setValue('');
        }
        setFilter((prev: any) => ({
            ...prev,
            [attribute]: ''
        }));
    };

    return (
        <MantineTextField
            attribute={attribute} style={{ padding: '0 0 6px 0' }}
            placeholder={placeholder || "Search"}
            ref={inputRef}
            leftSection={<BiSearch size={18} />}
            onChange={handleFilterChange(attribute, "text")}
            rightSection={
                <Transition
                    mounted={!!filter?.[attribute]}
                    transition="slide-left"
                    duration={100}
                    timingFunction="ease"
                >
                    {(styles) => (
                        <div style={styles}>
                            <MdClose
                                style={{ cursor: "pointer" }}
                                onClick={handleClear}
                            />
                        </div>
                    )}
                </Transition>
            }
        />
    );
};

export { SearchFilterField };
