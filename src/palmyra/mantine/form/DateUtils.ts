import { DatePickerType } from "@mantine/dates";
import dayjs from "dayjs";

interface IDateInput {
    type?: DatePickerType
    serverPattern?: string
    valueFormat?: string
    value?: any
}

const DateUtils = (props: IDateInput) => {

    const serverPattern = props.serverPattern || props.valueFormat || "YYYY-MM-DD";
    const type = props.type;

    const parseToDaysJs = (rawData: any, serverPattern) => {
        if (rawData) {
            return dayjs(rawData, serverPattern)
        }
        return null;
    };

    const formatDayJs = (v: any, serverPattern) => {
        if (v && v.isValid && v.isValid()) {
            return v.format(serverPattern)
        }
    };

    const parse = (rawData: string) => {
        if (type == "range") {
            if (rawData && typeof rawData == 'string') {
                var from: dayjs.Dayjs, to: dayjs.Dayjs;
                const fc = rawData.charAt(0);
                if (fc == '>') {
                    from = parseToDaysJs(rawData.slice(1), serverPattern);
                } else if (fc == '<')
                    to = parseToDaysJs(rawData.slice(1), serverPattern);
                else {
                    const dts = rawData.split('...');
                    from = parseToDaysJs(dts[0], serverPattern);
                    if (dts[1])
                        to = parseToDaysJs(dts[1], serverPattern);
                }
            }
            return [from, to];
        } else
            return parseToDaysJs(rawData, serverPattern);
    }

    const format = (v): string => {
        if (type == "range") {
            if (v) {
                const from = formatDayJs(v[0], serverPattern);
                const to = formatDayJs(v[1], serverPattern);

                if (from) {
                    if (to) {
                        return from + '...' + to;
                    } else {
                        return '>' + from;
                    }
                } else {
                    if (to) {
                        return '<' + to;
                    }
                }
            }
        } else {
            return formatDayJs(v, serverPattern);
        }
    };

    const convert = (d) => {
        // if (type == 'range') {
        //     if (d) {
        //         setValue([dayjs(d[0]), dayjs(d[1])]);
        //     } else {
        //         setValue(undefined)
        //     }
        // } else {
        //     if (d) {
        //         setValue(dayjs(d));
        //     } else {
        //         setValue(undefined)
        //     }
        // }
    }

    const revert = (value) => {
        const t = (v) => v && v.isValid() && v.toDate() || null;
        if (type == 'range') {
            return [t(value[0]), t(value[1])]
        }
        else {
            return t(value)
        }
    }

    return { parse, format, revert, convert }
};

export { DateUtils }