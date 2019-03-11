"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 求n的阶乘
 */
var Factorial = /** @class */ (function () {
    function Factorial(n) {
        var total = 1, k = n % 1;
        /*if(k<1&&k>0){
            for(let m=1;m<=n;m+=0.1**String(k).length-2){
            //广义的求阶乘未实现
                total*=m;
            }
        }*/
        for (var i = 1; i <= n; i++) {
            total *= i;
        }
        return total;
    }
    return Factorial;
}());
exports.Factorial = Factorial;
//# sourceMappingURL=factorial.js.map