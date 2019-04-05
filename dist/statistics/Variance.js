"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mean_1 = require("./Mean");
/**
 * 方差的正平方根称为该随机变量的标准差
 * 方差
 */
function Variance(_a) {
    var value = _a.slice(0);
    var mean = Mean_1.Mean(value.slice());
    var total = 0;
    for (var i = 0; i < value.length - 1; i++) {
        total += Math.pow((value[i] - mean), 2);
    }
    return total / value.length;
}
exports.Variance = Variance;
//# sourceMappingURL=Variance.js.map