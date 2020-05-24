export default interface F {
    deBounce: (fn: Function, time: number) => Function;
    saveFlow: (fn: Function, time: number) => Function;
    promisefy: (fn: Function, params: any[]) => Promise<any>;
}