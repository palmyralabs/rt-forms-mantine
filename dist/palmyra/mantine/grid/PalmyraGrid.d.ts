import { IPalmyraGrid, PalmyraGridOptions } from '@palmyralabs/rt-forms';

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
declare const PalmyraGrid: import('react').ForwardRefExoticComponent<PalmyraGridOptions<unknown> & import('react').RefAttributes<IPalmyraGrid>>;
export { PalmyraGrid };
