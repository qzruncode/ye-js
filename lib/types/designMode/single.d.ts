export interface Single {
    instance: any;
    createInstance: <T>(obj: T) => T;
    getInstance: (obj: object) => any;
} 