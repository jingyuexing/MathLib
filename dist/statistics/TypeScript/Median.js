"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Median = void 0;
/**
 * 中位数
 */
var Rank_1 = require("./Rank");
/**
 * 取整
 * @param  {x} x [输入数]
 * @return {~~x}   [返回数字]
 */
function int(x) {
    return ~~x;
}
/**
 * 中位数
 *
 * @param   {Array}  number  需要取中位数的数组
 *
 * @return  {number}         取得的中位数
 */
function Median(number) {
    var number = Rank_1.Rank.insert(number);
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
exports.Median = Median;
//# sourceMappingURL=Median.js.map