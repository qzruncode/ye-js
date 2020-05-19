import { __read, __spread } from "tslib";
var Base64 = {
    bufferToBase64: function (buffer) {
        var typeArr = new Uint16Array(buffer);
        var str = String.fromCharCode.apply(String, __spread(typeArr));
        return window.btoa(str);
    },
    base64ToBuffer: function (base64) {
        var str = window.atob(base64);
        console.log(str);
        var typeArr = new Uint16Array(str.length);
        for (var i = 0; i < str.length; i++) {
            typeArr[i] = str.charCodeAt(i);
        }
        return typeArr;
    },
    base64ToFile: function (base64, fileName) {
        if (base64) {
            var tmpArr = base64.split(',');
            var mime = tmpArr[0].match(/:(.*?);/);
            if (!mime) {
                return null;
            }
            else {
                var str = atob(tmpArr[1]);
                var arr = new Uint8Array(str.length);
                for (var i = 0; i < str.length; i++) {
                    arr[i] = str.charCodeAt(i);
                }
                return new File([arr], fileName, { type: mime[1] });
            }
        }
        return null;
    },
    fileTobase64: function (file) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                resolve((_a = e.target) === null || _a === void 0 ? void 0 : _a.result);
            };
            reader.onerror = function () {
                reject('read fail');
            };
            reader.readAsDataURL(file);
        });
    }
};
export default Base64;
