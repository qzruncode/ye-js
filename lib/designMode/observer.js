export var Observer = {
    objList: [],
    add: function (obj) {
        Object.getPrototypeOf(obj).update = function (payload) {
            console.log(this, payload);
        };
        Observer.objList.push(obj);
    },
    notify: function (payload) {
        Observer.objList.forEach(function (obj) {
            obj.update(payload);
        });
    }
};
