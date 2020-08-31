export default interface Storage {
    saveParams: (params: {[propName: string]: any;}) => boolean,
    getParams: () => {[propName: string]: any;},
    removeParams: (key: string) => boolean,
    clearParams: () => boolean;
}