import { __read, __spread } from "tslib";
var base = Math.pow(2, 16) - 1;
var Shift = {
    encode: function (str, shift) {
        if (str === void 0) { str = ''; }
        if (shift <= base) {
            var codes = [];
            for (var i = 0; i < str.length; i++) {
                codes.push((str.charCodeAt(i) + shift) % base);
            }
            return String.fromCharCode.apply(String, __spread(codes));
        }
        return '';
    },
    decode: function (str, shift) {
        if (str === void 0) { str = ''; }
        if (shift <= base) {
            var codes = [];
            for (var i = 0; i < str.length; i++) {
                codes.push((str.charCodeAt(i) - shift) % base);
            }
            return String.fromCharCode.apply(String, __spread(codes));
        }
        return '';
    },
};
export default {
    Shift: Shift
};
