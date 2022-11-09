"use strict";
exports.__esModule = true;
exports.getTime = void 0;
// 格式化时间
var getTime = function () {
    var date = new Date();
    // 补零
    var zero = function (t) {
        return t > 10 ? t : "0".concat(t);
    };
    return "".concat(date.getFullYear(), "/").concat(date.getMonth() + 1, "/").concat(date.getDate(), " ").concat(zero(date.getHours()), ":").concat(zero(date.getMinutes()));
};
exports.getTime = getTime;
