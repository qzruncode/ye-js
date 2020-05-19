import { __read } from "tslib";
var Url = {
    formToParams: function (form) {
        return '?' + Array.from(new FormData(form), function (field) { return field.map(encodeURIComponent).join('='); }).join('&');
    },
    objToParams: function (obj) {
        return obj ? Object.entries(obj).reduce(function (queryString, _a, index) {
            var _b = __read(_a, 2), key = _b[0], val = _b[1];
            var symbol = queryString.length === 0 ? '?' : '&';
            queryString += typeof val === 'string' ? "" + symbol + key + "=" + val : '';
            return queryString;
        }, '')
            : '';
    },
    getParamsObjFormUrl: function (url) {
        return (url.match(/([^?=&]+)(=([^&]*))/g) || [])
            .reduce(function (a, v) { return ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a); }, {});
    }
};
export default Url;
