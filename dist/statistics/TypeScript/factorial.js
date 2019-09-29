"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * [Factorial 阶乘]
 * @param  {number} n [阶乘数]
 * @return {number}   [阶乘值]
 */
function Factorial(n) {
    var total = 1, k = n % 1;
    for (var i = 1; i <= n; i++) {
        total *= i;
    }
    return total;
}
exports.Factorial = Factorial;
//# sourceMappingURL=factorial.js.map