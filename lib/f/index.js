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
    return function (params) {
        var current = performance.now();
        if (current - now >= time) {
            fn(params);
            now = current;
        }
    };
};
export default {
    deBounce: deBounce,
    saveFlow: saveFlow
};
