export interface PubSub {
    topList: {[propName: string]: any[]};
    sub: (topic: string, obj: any) => number;
    unsub: (topic: string, sid: number) => boolean;
    pub: (topic: string, payload: any) => void;
}