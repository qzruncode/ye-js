var Event = {
    eid: 0,
    eventList: [],
    listen: function (dom, eventName, callback, options) {
        if (dom) {
            var eid = ++Event.eid;
            var f = function (e) { return callback(e); };
            Event.eventList.push({
                eid: eid,
                eventName: eventName,
                callback: f,
                options: options,
            });
            dom.addEventListener(eventName, f, options);
            return eid;
        }
        else {
            return -1;
        }
    },
    unlisten: function (dom, eid) {
        var index = Event.eventList.findIndex(function (item) { return item.eid == eid; });
        var item = Event.eventList[index];
        if (index != -1) {
            dom.removeEventListener(item.eventName, item.callback, item.options);
            Event.eventList.splice(index, 1);
        }
    },
    trigger: function (eid) {
        var index = Event.eventList.findIndex(function (item) { return item.eid == eid; });
        var item = Event.eventList[index];
        if (index != -1) {
            var et = new EventTarget();
            var ce = new CustomEvent(item.eventName);
            et.addEventListener(item.eventName, item.callback);
            et.dispatchEvent(ce);
        }
    }
};
Object.defineProperty(Event, 'eid', {
    value: 0,
    enumerable: false,
    configurable: false,
});
export default Event;
