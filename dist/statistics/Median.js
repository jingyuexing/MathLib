"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 中位数
 */
/**
 * 取整
 * @param  {x} x [输入数]
 * @return {~~x}   [返回数字]
 */
function int(x) {
    return ~~x;
}
var Median = /** @class */ (function () {
    function Median(number) {
        if (number.length % 2 == 0) {
            /**
             * 当数组长度为偶数，中位数为
             */
            return number[number.length / 2];
        }
        else {
            /**
             * 数组长度为奇数,返回
             * @param {[number]} number[number.length/2]+number[number.length/2+1 [description]
             */
            return (number[int(number.length / 2)] + number[int(number.length / 2) + 1]) / 2;
        }
    }
    return Median;
}());
exports.Median = Median;
//# sourceMappingURL=Median.js.map