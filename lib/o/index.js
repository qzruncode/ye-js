import { __read, __spread } from "tslib";
var deepClone = function (obj) {
    if (obj === null)
        return null;
    var clone = Object.assign({}, obj);
    Object.keys(clone).forEach(function (key) { return (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]); });
    return Array.isArray(obj) && obj.length
        ? (clone.length = obj.length) && Array.from(clone)
        : Array.isArray(obj)
            ? Array.from(obj)
            : clone;
};
var shallowClone = function (obj) { return Object.assign({}, obj); };
var merge = function () {
    var objs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objs[_i] = arguments[_i];
    }
    return __spread(objs).reduce(function (acc, obj) {
        return Object.keys(obj).reduce(function (a, k) {
            acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k];
            return acc;
        }, {});
    }, {});
};
export default {
    deepClone: deepClone,
    shallowClone: shallowClone,
    merge: merge
};
