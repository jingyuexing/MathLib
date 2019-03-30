"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 协方差
 */
var Mean_1 = require("./Mean");
function Covariance(_a, _b) {
    var value_a = _a.slice(0);
    var value_b = _b.slice(0);
    if (value_a.length == value_b.length) {
        var mean = Mean_1.Mean(value_a.slice());
        var mean_b = Mean_1.Mean(value_b.slice());
        var total = 0;
        for (var i = 0; i <= value_a.length; i++) {
            total += (value_a[i] - mean) * (value_b[i] - mean_b);
        }
        return total / value_a.length;
    }
    else {
        throw Error("两个集合不均等!");
    }
}
exports.Cov = Covariance;
//# sourceMappingURL=Covariance.js.map