var deBounce = function (fn, time) {
    var tid = 0;
    return function (params) {
        if (tid) {
            clearTimeout(tid);
        }
        tid = setTimeout(function () {
            fn(params);
        }, time);
    };
};
var saveFlow = function (fn, time) {
    var now = performance.now();
    var tid = 0;
    return function (params) {
        var current = performance.now();
        if (current - now >= time) {
            fn(params);
            now = current;
        }
        // else {
        //     if(tid) { clearTimeout(tid); }
        //     tid = (setTimeout(function () {
        //         fn(params);
        //     }, 0) as unknown as number)
        // }
    };
};
export default {
    deBounce: deBounce,
    saveFlow: saveFlow
};
