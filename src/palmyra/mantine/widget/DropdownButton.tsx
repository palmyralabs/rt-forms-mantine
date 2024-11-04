import { MdKeyboardArrowDown } from "react-icons/md";
import { forwardRef, MutableRefObject, useImperativeHandle, useRef, useState } from "react"
import './DropDownButton.css'
import { Button, Popover } from "@mantine/core";

interface IDropdownButtonOptions {
    title: string,
    className?: string,
    disabled?: boolean,
    PrefixAdornment?: JSX.Element,
    children?: any,
    width?: string
}

interface IDropdown {
    open: () => void
    close: () => void
}

const DropdownButton = forwardRef(function DropDownButton(props: IDropdownButtonOptions, ref: MutableRefObject<IDropdown>) {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const currentRef = ref || useRef<IDropdown>();
    const className = props.className || "py-dropdown-button"

    useImperativeHandle(currentRef, () => {
        return {
            open() {
                setDropdownOpen(true);
            },
            close() {
                setDropdownOpen(false);
            }
        }
    }, [])

    const PrefixAdornment = props.PrefixAdornment || <></>
    const SuffixAdornment = <MdKeyboardArrowDown
        className={`py-dropdown-button-arrow ${dropdownOpen ? 'open' : ''} `} />

    const onClose = () => {
        setDropdownOpen(!dropdownOpen);
    }

    return <>
        <Popover withArrow shadow="md" position="bottom-end" width={props.width}
            opened={dropdownOpen} onChange={onClose} >
            <Popover.Target>
                <Button className={className}
                    disabled={props.disabled}
                    fullWidth={false}
                    rightSection={SuffixAdornment}
                    leftSection={PrefixAdornment}
                    onClick={() => setDropdownOpen(!dropdownOpen)}>
                    <span>{props.title}</span>
                </Button>
            </Popover.Target>
            <Popover.Dropdown>
                {props.children}
            </Popover.Dropdown>
        </Popover>
    </>
});

export { DropdownButton }
export type { IDropdownButtonOptions, IDropdown }