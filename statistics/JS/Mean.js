"use strict";
exports.__esModule = true;
/**
 * 平均值
 */
/**
 * 初始化一个数列
 * @param {Array<number>} ...input [需要求平均值的数据]
 */
function Mean(_a) {
    var input = _a.slice(0);
    var total = 0;
    for (var i = 0; i < input.length; i++) {
        total += input[i];
    }
    return total / input.length;
}
exports.Mean = Mean;
