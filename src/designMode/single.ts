export const Single = {
    instance: null as any,
    createInstance: (obj: object) => {
        Single.instance = obj;
        return obj;
    },
    getInstance: (obj: object) => {
        if(!Single.instance) {
            Single.createInstance(obj);
        }
        return Single.instance;
    }
};