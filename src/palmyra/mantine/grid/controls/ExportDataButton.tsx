import { PiFilePdf, PiFileXls, PiFileCsv, PiFileDoc } from "react-icons/pi";
import { DropdownButton, IDropdown } from "../../widget";
import { TbTableExport } from "react-icons/tb";
import { EXPORT_FORMAT, ExportRequest } from "@palmyralabs/palmyra-wire";
import { DataGridPluginOptions, IPageQueryable } from "@palmyralabs/rt-forms";
import { useRef } from "react";
import { IPluginBtnControl } from "./types";
import './ExportDataButton.css';

interface IExportDataOptions extends Pick<DataGridPluginOptions, 'queryRef'>, IPluginBtnControl {
    exportOption: Partial<Record<EXPORT_FORMAT, string>>
}
const ExportDataButton = (props: IExportDataOptions) => {
    const { exportOption } = props;
    const dropDownRef = useRef<IDropdown>();
    const visible = props.visible != false;

    const exportData = (format: EXPORT_FORMAT) => {
        const queryRef: IPageQueryable = props.queryRef.current;
        const p = queryRef.getQueryRequest();
        const params: ExportRequest = { ...p, format, limit: -1 };
        queryRef.export(params);
        dropDownRef.current.close();
    }

    const optionHandlers = {
        csv: () => exportData('csv'),
        pdf: () => exportData('pdf'),
        excel: () => exportData('excel'),
        doc: () => exportData('doc')
    };
    const optionIcons = {
        csv: <PiFileCsv className='py-export-button-list-icon' />,
        pdf: <PiFilePdf className='py-export-button-list-icon' />,
        excel: <PiFileXls className='py-export-button-list-icon' />,
        doc: <PiFileDoc className='py-export-button-list-icon' />
    };
    return (<>{visible &&
        <DropdownButton title='Export' ref={dropDownRef} disabled={props.disabled}
            PrefixAdornment={<TbTableExport className='py-export-button-icon' />}>
            <div onClick={(e) => e.stopPropagation()} className="py-export-button-container">
                <ul>
                    {Object.entries(exportOption).map(([key, label]) => (
                        <li key={key} onClick={optionHandlers[key]}>
                            {optionIcons[key]}
                            <span className='py-export-list-text'>{label}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </DropdownButton>
    }</>
    )
}

export { ExportDataButton };
export type { IExportDataOptions }
