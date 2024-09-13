import { MutableRefObject, forwardRef, useRef } from 'react';
import { IPageQueryable, DataGridOptions } from "@palmyralabs/rt-forms"
import { ApiDataTable } from './base/ApiDataTable';
import { topic } from '@palmyralabs/ts-utils';

const DataGrid = forwardRef(function ServerDataGrid(props: DataGridOptions,
  ref: MutableRefObject<IPageQueryable>) {
  const queryRef = ref || useRef<IPageQueryable>();

  const onDataChange = (newData: any[], oldData?: any[]) => {
    if (props.onDataChange) {
      try {
        props.onDataChange(newData, oldData)
      } catch (error) {
        console.error(error);
      }
    }

    if (props.topic) {
      try {
        topic.publish(props.topic + "/data", newData);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (<>
    <ApiDataTable {...props} onDataChange={onDataChange} ref={queryRef} />
  </>
  )
});

export { DataGrid };