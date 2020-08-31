interface Options{
    capture: boolean;
    once: boolean;
    passive: boolean;
}

const Event = {
    eid: 0,
    eventList: [] as {eid: number, eventName:string, callback: EventListener, options: Options | undefined}[],
    listen: (dom: HTMLElement, eventName: string, callback: EventListener, options?: Options) => {
        if(dom) {
            const eid = ++Event.eid;
            const f = (e: Event) => callback(e);
            Event.eventList.push({
                eid,
                eventName,
                callback: f,
                options,
            })
            dom.addEventListener(eventName, f, options);
            return eid;
        }else {
            return -1;
        }
    },
    unlisten: (dom: HTMLElement, eid: number) => {
        const index = Event.eventList.findIndex(item => item.eid == eid);
        const item = Event.eventList[index];
        if(index != -1) {
            dom.removeEventListener(item.eventName, item.callback as any, item.options);
            Event.eventList.splice(index, 1);
        }
    },
    trigger: (eid: number) => {
        const index = Event.eventList.findIndex(item => item.eid == eid);
        const item = Event.eventList[index];
        if(index != -1) {
            const et = new EventTarget();
            const ce = new CustomEvent(item.eventName)
            et.addEventListener(item.eventName, item.callback);
            et.dispatchEvent(ce);
        }
    }
};
Object.defineProperty(Event, 'eid', {
    value: 0,
    enumerable: false,
    configurable: false,
})

export default Event;