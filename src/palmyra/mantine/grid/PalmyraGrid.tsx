import { forwardRef, MutableRefObject, useEffect, useRef } from "react";
import { GridX } from "./GridX";
import { topic } from "@palmyralabs/ts-utils";
import { IPageQueryable, IPalmyraGrid, PalmyraGridOptions, StoreFactoryContext } from "@palmyralabs/rt-forms";
import { PalmyraStoreFactory, StoreFactory } from "@palmyralabs/palmyra-wire";
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
const PalmyraGrid = forwardRef(function PalmyraGrid<ControlPropsType>(props: PalmyraGridOptions<ControlPropsType>, ref: MutableRefObject<IPalmyraGrid>) {

    const gridTopic = props.topic;
    const queryRef = ref || useRef<IPageQueryable>();
    const storeFactory: StoreFactory<any, any> = new PalmyraStoreFactory({ baseUrl: '/api/palmyra/' });

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
        <StoreFactoryContext.Provider value={storeFactory}>
            <GridX {...props} ref={queryRef} />
        </StoreFactoryContext.Provider>
    </>
})


export { PalmyraGrid }