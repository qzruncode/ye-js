export var PubSub = {
    topList: {},
    sub: function (topic, obj) {
        if (!PubSub.topList[topic]) {
            var objList = [];
            Object.getPrototypeOf(objList).sid = -100000;
            PubSub.topList[topic] = objList;
        }
        Object.getPrototypeOf(obj).update = function (payload) {
            console.log(this, payload, this.sid);
        };
        obj.sid = ++Object.getPrototypeOf(PubSub.topList[topic]).sid;
        PubSub.topList[topic].push(obj);
        return Object.getPrototypeOf(obj).sid;
    },
    unsub: function (topic, sid) {
        if (!PubSub.topList[topic]) {
            return false;
        }
        var i = PubSub.topList[topic].findIndex(function (item) { return item.sid == sid; });
        if (i != -1) {
            PubSub.topList[topic].splice(i, 1);
            return true;
        }
        else {
            return false;
        }
    },
    pub: function (topic, payload) {
        if (!PubSub.topList[topic]) {
            return false;
        }
        PubSub.topList[topic].forEach(function (item) {
            item.update(payload);
        });
    }
};
