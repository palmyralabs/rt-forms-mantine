declare const parseOptions: (options: any, name: any) => {
    checked: {
        title: string;
        value: any;
    };
    unchecked: {
        title: string;
        value: any;
    };
} | {
    checked: {
        title: any;
        value: number;
    };
    unchecked: {
        title: any;
        value: number;
    };
};
export default parseOptions;
