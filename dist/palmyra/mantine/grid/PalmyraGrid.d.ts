import { IPalmyraGrid, PalmyraGridOptions } from '@palmyralabs/rt-forms';
import { RefObject } from 'react';
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
declare function PalmyraGrid<ControlPropsType>(props: PalmyraGridOptions<ControlPropsType> & {
    ref?: RefObject<IPalmyraGrid>;
}): import("react/jsx-runtime").JSX.Element;
export { PalmyraGrid };
