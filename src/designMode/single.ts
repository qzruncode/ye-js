export const Single = {
    instance: null as any,
    createInstance: (obj: object) => {
        return obj;
    },
    getInstance: (obj: object) => {
        if(!Single.instance) {
            Single.instance = Single.createInstance(obj);
        }
        return Single.instance;
    }
};