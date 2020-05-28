export default interface DesignMode {
    Observer: {
        objList: any[];
        add: (obj: any) => void;
        notify: (payload: any) => void;
    },
    PubSub: {
        topList: {[propName: string]: any[]};
        sub: (topic: string, obj: any) => number;
        unsub: (topic: string, sid: number) => boolean;
        pub: (topic: string, payload: any) => void;
    },
    Single: {
        instance: any;
        createInstance: <T>(obj: T) => T;
        getInstance: (obj: object) => any;
    } 
}