export const Observer = {
    objList: [] as any[],
    add: (obj: any) => {
        Object.getPrototypeOf(obj).update = function(payload: any) {
            console.log(this, payload);
        }
        Observer.objList.push(obj);
    },
    notify: (payload: any) => {
        Observer.objList.forEach(obj => {
            obj.update(payload);
        })
    }
};


