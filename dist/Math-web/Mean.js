"use strict";
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
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var i = input_1[_i];
        total += i;
    }
    return total / input.length;
}
//# sourceMappingURL=Mean.js.map