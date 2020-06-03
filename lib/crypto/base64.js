import { __read, __spread } from "tslib";
var bufferToBase64 = function (buffer) {
    var typeArr = new Uint16Array(buffer);
    var str = String.fromCharCode.apply(String, __spread(typeArr));
    return window.btoa(str);
};
var base64ToBuffer = function (base64) {
    var str = window.atob(base64);
    console.log(str);
    var typeArr = new Uint16Array(str.length);
    for (var i = 0; i < str.length; i++) {
        typeArr[i] = str.charCodeAt(i);
    }
    return typeArr;
};
var base64ToFile = function (base64, fileName) {
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
};
var fileTobase64 = function (file) {
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
};
var base64ToBlob = function (base64) {
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
            return new Blob([arr], { type: mime[1] });
        }
    }
    return null;
};
var blobTobase64 = function (blob) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            resolve((_a = e.target) === null || _a === void 0 ? void 0 : _a.result);
        };
        reader.onerror = function () {
            reject('read fail');
        };
        reader.readAsDataURL(blob);
    });
};
var base64ToUrl = function (base64) {
    var b = base64ToBlob(base64);
    var url = window.URL.createObjectURL(b);
    return {
        value: url,
        revoke: function () { return URL.revokeObjectURL(url); }
    };
};
var download = function (base64, fileName) {
    var u = base64ToUrl(base64);
    var a = document.createElement("a");
    a.href = u.value;
    a.download = fileName;
    a.click();
    a.remove();
    u.revoke();
};
var compress = function (base64, encoder) {
    var u = base64ToUrl(base64);
    var img = document.createElement("img");
    var canvas = document.createElement("canvas");
    return new Promise(function (resolve, reject) {
        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext("2d");
            ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            var tmpArr = base64.split(',');
            var mime = tmpArr[0].match(/:(.*?);/) || [];
            var imageData = canvas.toDataURL(mime[1] || 'image/jpeg', encoder);
            resolve(imageData);
        };
        img.onerror = function (e) {
            reject(e);
        };
        img.src = u.value;
    });
};
export default {
    bufferToBase64: bufferToBase64,
    base64ToBuffer: base64ToBuffer,
    base64ToFile: base64ToFile,
    fileTobase64: fileTobase64,
    base64ToBlob: base64ToBlob,
    blobTobase64: blobTobase64,
    base64ToUrl: base64ToUrl,
    download: download,
    compress: compress
};
