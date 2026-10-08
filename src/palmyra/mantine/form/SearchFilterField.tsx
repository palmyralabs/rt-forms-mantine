import { ReactNode, useRef } from "react";
import { MdClose } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { Transition } from "@mantine/core";
import { MantineTextField } from "./MantineTextField";
import './SearchFilterField.css';

interface SearchFilterFieldProps {
    attribute: string;
    placeholder?: string;
    filter: any;
    setFilter: any;
    handleFilterChange: any;
    filterType?: string;
    clearable?: boolean;
    leftIcon?: ReactNode;
    minChars?: number;
    size?: string;
    variant?: string;
    className?: string;
    onClear?: () => void;
}

const SearchFilterField = (props: SearchFilterFieldProps) => {
    const {
        attribute,
        placeholder,
        filter,
        setFilter,
        handleFilterChange,
        filterType = 'text',
        clearable = true,
        leftIcon,
        minChars = 0,
        size,
        variant,
        className,
        onClear
    } = props;

    const inputRef = useRef<any>(null);

    const handleClear = () => {
        if (inputRef.current?.setValue) {
            inputRef.current.setValue('');
        }
        setFilter((prev: any) => ({
            ...prev,
            [attribute]: ''
        }));
        onClear?.();
    };

    const onChange = (e: any) => {
        const val = e?.target?.value ?? '';
        if (minChars > 0 && val.length > 0 && val.length < minChars) {
            return;
        }
        handleFilterChange(attribute, filterType)(e);
    };

    const showClear = clearable && !!filter?.[attribute];

    return (
        <MantineTextField
            attribute={attribute}
            className={'py-search-filter-field' + (className ? ' ' + className : '')}
            placeholder={placeholder || "Search"}
            ref={inputRef}
            size={size as any}
            variant={variant as any}
            leftSection={leftIcon ?? <BiSearch size={18} />}
            onChange={onChange}
            rightSection={
                <Transition
                    mounted={showClear}
                    transition="slide-left"
                    duration={100}
                    timingFunction="ease"
                >
                    {(styles) => (
                        <div style={styles}>
                            <MdClose
                                className="py-search-filter-clear"
                                aria-label="Clear search"
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
export type { SearchFilterFieldProps };
