import { Accordion, AccordionProps } from '@mantine/core';
import './SectionLayout.css';
import { SectionContainerInput } from "./type";

const SectionContainer = (props: SectionContainerInput & AccordionProps) => {
    const title: any = props.title || '';

    return <>
        <div className='section-container'>
            <Accordion {...props}>
                <Accordion.Item key={title} value={title}>
                    <Accordion.Control >{title}</Accordion.Control>
                    <Accordion.Panel>{props.children}</Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </div >
    </>
}

export { SectionContainer };