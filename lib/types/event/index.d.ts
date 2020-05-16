interface Options{
    capture?: boolean;
    once?: boolean;
    passive?: boolean;
}

export default interface Event {
    listen: (dom: HTMLElement, eventName: string, callback: Function, options?: Options) => number;
    unlisten: (dom: HTMLElement, eid: number) => void;
    trigger: (eid: number) => void;
}