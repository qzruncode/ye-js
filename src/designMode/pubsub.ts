export const PubSub = {
    topList: {} as {[propName: string]: any[]},
    sub: (topic: string, obj: any) => {
        if(!PubSub.topList[topic]){
            const objList: any[] = [];
            Object.getPrototypeOf(objList).sid = -100000;
            PubSub.topList[topic] = objList;
        }
        Object.getPrototypeOf(obj).update = function(payload: any) {
            console.log(this, payload, this.sid);
        }
        obj.sid = ++Object.getPrototypeOf(PubSub.topList[topic]).sid;
        PubSub.topList[topic].push(obj);

        return Object.getPrototypeOf(obj).sid;
    },
    unsub: (topic: string, sid: number) => {
        if(!PubSub.topList[topic]){
            return false;
        }
        const i = PubSub.topList[topic].findIndex(item => item.sid == sid);
        if(i != -1) {
            PubSub.topList[topic].splice(i, 1);
            return true;
        }else {
            return false;
        }
    },
    pub: (topic: string, payload: any) => {
        if(!PubSub.topList[topic]){
            return false;
        }
        PubSub.topList[topic].forEach(item => {
            item.update(payload);
        })
    }
}