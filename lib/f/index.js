import { __read, __spread } from "tslib";
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
var promisefy = function (fn, params) {
    return new Promise(function (resolve, reject) {
        try {
            var res = fn.apply(void 0, __spread(params));
            resolve(res);
        }
        catch (err) {
            reject(err);
        }
    });
};
export default {
    deBounce: deBounce,
    saveFlow: saveFlow,
    promisefy: promisefy
};
