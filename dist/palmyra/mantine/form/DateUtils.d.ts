import { DatePickerType } from '@mantine/dates';
import { default as dayjs } from 'dayjs';
interface IDateInput {
    type?: DatePickerType;
    serverPattern?: string;
    valueFormat?: string;
    value?: any;
}
declare const DateUtils: (props: IDateInput) => {
    parse: (rawData: string) => dayjs.Dayjs | dayjs.Dayjs[];
    format: (v: any) => string;
    revert: (value: any) => any;
    convert: (d: any) => void;
};
export { DateUtils };
