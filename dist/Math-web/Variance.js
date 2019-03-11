"use strict";
var Mean_1 = require("./Mean");
var Variance = /** @class */ (function () {
    /**
     * 方差的正平方根称为该随机变量的标准差
     * 方差
     */
    function Variance(_a) {
        var value = _a.slice(0);
        var mean = Mean_1.Mean(value.slice());
        var total = 0;
        for (var i = 0; i <= value.length; i++) {
            total += Math.pow((value[i] - mean), 2);
        }
        return total / value.length;
    }
    return Variance;
}());
//# sourceMappingURL=Variance.js.map