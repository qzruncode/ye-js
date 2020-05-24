const deBounce = (fn: Function, time: number) => {
    let tid = 0;
    return function (params: any) {
        if(tid) { clearTimeout(tid); }
        tid = (setTimeout(function () {
            fn(params);
        }, time) as unknown as number)
    }
};

const saveFlow = (fn: Function, time: number) => {
    let now = performance.now();
    return function (params: any) {
        let current = performance.now();
        if(current - now >= time) {
            fn(params);
            now = current;
        }
    }
};


const promisefy = (fn: Function, params: any[]) => {
    return new Promise((resolve, reject) => {
        try {
            const res = fn(...params);
            resolve(res);
        } catch (err) {
            reject(err);
        }
    });
}

export default {
    deBounce,
    saveFlow,
    promisefy
};