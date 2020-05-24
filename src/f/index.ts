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

export default {
    deBounce,
    saveFlow
};