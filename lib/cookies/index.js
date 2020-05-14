import { __makeTemplateObject } from "tslib";
var Cookies = {
    all: function () {
        if (document.cookie == '') {
            return [];
        }
        else {
            return document.cookie.split('; ').map(function (item) { return item.split('='); });
        }
    },
    get: function (key) {
        var reg = new RegExp(String.raw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["(?:(?:^|.*;s*)", "s*=s*([^;]*).*$)|^.*$"], ["(?:(?:^|.*;\\s*)", "\\s*\\=\\s*([^;]*).*$)|^.*$"])), key));
        return document.cookie.replace(reg, '$1');
    },
    set: function (key, value, options) {
        var optionArr = [];
        if (options && Object.keys(options).length > 0) {
            Object.keys(options).forEach(function (key) {
                if (key == 'path') {
                    optionArr.push("path=" + relPathToAbs(options.path));
                }
                else if (key == 'secure' && options.secure == true) {
                    optionArr.push('secure');
                }
                else {
                    optionArr.push(key + "=" + options[key]);
                }
            });
        }
        document.cookie = key + "=" + value + "; " + optionArr.join('; ');
    },
    remove: function (key) {
        var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
        if (keys === null || keys === void 0 ? void 0 : keys.includes(key)) {
            document.cookie = key + "=;expires=" + new Date(0).toGMTString();
            return true;
        }
        return false;
    },
    clear: function () {
        var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
        keys === null || keys === void 0 ? void 0 : keys.forEach(function (key) {
            Cookies.remove(key);
        });
    }
};
// Relative path to absolute path
function relPathToAbs(sRelPath) {
    var _a;
    var nUpLn = 0, sDir = '', sPath = location.pathname.replace(/[^\/]*$/, sRelPath.replace(/(\/|^)(?:\.?\/+)+/g, '$1')), nEnd = 0, nStart = 0;
    for (nEnd = 0, nStart = 0; nEnd = sPath.indexOf('/../', nStart), nEnd > -1; nStart = nEnd + nUpLn) {
        nUpLn = (_a = /^\/(?:\.\.\/)*/.exec(sPath.slice(nEnd))) === null || _a === void 0 ? void 0 : _a[0].length;
        sDir = (sDir + sPath.substring(nStart, nEnd)).replace(new RegExp('(?:\\\/+[^\\\/]*){0,' + ((nUpLn - 1) / 3) + '}$'), '/');
    }
    return sDir + sPath.substr(nStart);
}
export default Cookies;
var templateObject_1;
