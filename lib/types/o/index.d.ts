export default interface O {
    deepClone: (obj: any) => any;
    shallowClone: (obj: any) => any;
    merge: (...objs: any[]) => any;
}