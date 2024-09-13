import { Tooltip } from "@mantine/core";
import { ITitle } from "@palmyralabs/rt-forms";
import { BsInfoCircle } from "react-icons/bs";

// const InfoTooltip = styled(({ className, ...props }: TooltipProps) => (
//     <Tooltip {...props} classes={{ popper: className }} />
// ))(({ theme }) => ({
//     [`& .${tooltipClasses.tooltip}`]: {
//         backgroundColor: '#f5f5f9',
//         color: 'rgba(0, 0, 0, 0.87)',
//         maxWidth: 500,
//         fontSize: theme.typography.pxToRem(16),
//         border: '1px solid #dadde9',
//     },
//     [`& .${tooltipClasses.arrow}`]: {
//         color: '#f5f5f9',
//         "&::before": {
//             backgroundColor: '#f5f5f9',
//             border: '1px solid #dadde9',
//         },
//     },
// }));

const InfoCircle = function () {
    return <BsInfoCircle className='header-info-icon' />;
};

const renderTitle = (titleInfo: ITitle) => {

    if (titleInfo) {
        if (typeof titleInfo === 'function') {
            return titleInfo();
        }

        if (typeof titleInfo === 'object' && titleInfo.toolTip) {
            //@ts-ignore
            const p: IDecoratedTitle = titleInfo;
            return <div className='info-header'>
                <span className='header-content-text'>{p.title}</span>
                <Tooltip label={p.toolTip}>
                    <span style={{ paddingBottom: '2px' }}>
                        <InfoCircle />
                    </span>
                </Tooltip>
            </div >

        }
        //@ts-ignore
        const title: string = typeof titleInfo == 'string' ? titleInfo : titleInfo.title;
        return <span className='header-content-text'>{title}</span>
    }
    else
        return <></>;
}

export { InfoCircle };

export { renderTitle }