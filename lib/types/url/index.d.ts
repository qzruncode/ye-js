export default interface Url {
    formToParams: (form: HTMLFormElement) => string;
    objToParams: (obj: {[propName: string]: string | undefined}) => string;
    getParamsObjFormUrl: (url: string) => string;
}