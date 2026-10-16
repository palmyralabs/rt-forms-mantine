import { IPageQueryable } from "@palmyralabs/rt-forms";
import { topic } from "@palmyralabs/ts-utils";
import { RefObject, useEffect, useRef } from "react";
import { EditableGrid, EditableGridProps } from "./EditableGrid";

type PalmyraEditGridProps = EditableGridProps & { ref?: RefObject<IPageQueryable> };

function PalmyraEditGrid(props: PalmyraEditGridProps) {
    const gridTopic = props.topic;
    const internalRef = useRef<IPageQueryable>(null);
    const queryRef: RefObject<IPageQueryable> = (props.ref as RefObject<IPageQueryable>) ?? internalRef;

    useEffect(() => {
        if (gridTopic) {
            const refreshHandle = topic.subscribe(gridTopic + '/refresh', () => {
                if (queryRef.current) queryRef.current.refresh();
            });

            const filterHandle = topic.subscribe(gridTopic + '/filter', (_topic, filter: any) => {
                if (queryRef.current) queryRef.current.setFilter(filter);
            });

            return () => {
                topic.unsubscribe(refreshHandle);
                topic.unsubscribe(filterHandle);
            };
        }
    }, [gridTopic]);

    return <EditableGrid {...props} ref={queryRef} />;
}

export { PalmyraEditGrid };
export type { PalmyraEditGridProps };
