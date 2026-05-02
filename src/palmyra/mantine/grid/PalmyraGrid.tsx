import { IPageQueryable, IPalmyraGrid, PalmyraGridOptions } from "@palmyralabs/rt-forms";
import { topic } from "@palmyralabs/ts-utils";
import { RefObject, useEffect, useRef } from "react";
import { GridX } from "./GridX";

/**
 *
 * Emitters
 * ${topic}/data -- onDataChange event
 *
 * Listeners
 * ${topic}/refresh - Refresh dataset / fetch from server
 * ${topic}/filter - apply filter based on the incoming data
 *
 */
function PalmyraGrid<ControlPropsType>(props: PalmyraGridOptions<ControlPropsType> & { ref?: RefObject<IPalmyraGrid> }) {

    const gridTopic = props.topic;
    const internalRef = useRef<IPageQueryable>(null);
    const queryRef = props.ref ?? internalRef;


    useEffect(() => {
        if (props.topic) {
            const refreshHandle = topic.subscribe(gridTopic + '/refresh', () => {
                if (queryRef.current) {
                    queryRef.current.refresh();
                }
            });

            const filterHandle = topic.subscribe(gridTopic + '/filter', (_topic, filter: any) => {
                if (queryRef.current) {
                    queryRef.current.setFilter(filter);
                }
            })

            return () => {
                topic.unsubscribe(refreshHandle);
                topic.unsubscribe(filterHandle);
            }
        }
    }, [gridTopic])


    return <>
        <GridX {...props} ref={queryRef} />
    </>
}


export { PalmyraGrid };
