"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permu = void 0;
/**
 * 求阶乘
 * @param  {number} n 阶乘数值
 * @return {number}   阶乘
 */
function factorial(n) {
    var total = 1;
    for (var i = 1; i <= n; i++) {
        total *= i;
    }
    return total;
}
/**
 * 排列组合
 */
var Permu = /** @class */ (function () {
    function Permu(m, n) {
        return factorial(n) / factorial(m) * factorial(n - m);
    }
    return Permu;
}());
exports.Permu = Permu;
//# sourceMappingURL=Permutations.js.map