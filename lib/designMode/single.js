export var Single = {
    instance: null,
    createInstance: function (obj) {
        Single.instance = obj;
        return obj;
    },
    getInstance: function (obj) {
        if (!Single.instance) {
            Single.createInstance(obj);
        }
        return Single.instance;
    }
};
