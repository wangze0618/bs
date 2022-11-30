"use strict";
exports.__esModule = true;
exports.zero2 = exports.page1 = exports.getTime = void 0;
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
// 模拟分页
var page1 = function (arr, num) {
    // 新建数组，用于储存新数组
    var arrNew = [];
    // 如果单页的数组长度大于传入数组长度，则证明一个页面就可以展示
    if (arr.length <= num) {
        arrNew.push(arr);
    }
    else {
        // 下面这部分的操作是将 [1,2],[3.4]存入arrNew里面
        for (var i = 0; i < Math.floor(arr.length / num); i++) {
            arrNew.push(arr.slice(i * num, (i + 1) * num));
            // 将剩余部分存入arrNew里面 （利用长度来判断后面有没有数字）
            if (i + 1 == Math.floor(arr.length / num) &&
                arr.slice((i + 1) * num).length != 0) {
                arrNew.push(arr.slice((i + 1) * num));
            }
        }
    }
    return arrNew;
};
exports.page1 = page1;
// 价格补两个0
var zero2 = function (num) {
    return num.toFixed(2);
};
exports.zero2 = zero2;
