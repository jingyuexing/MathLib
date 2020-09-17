"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cov = void 0;
/**
 * 协方差
 */
var Mean_1 = require("./Mean");
/**
 * 求取两数组胡协方差
 *
 * @param   {Array<number>}  [...value_a]:Array<number>  第一个数组
 * @param   {Array<number>}  [...value_b]:Array<number>  第二个数组
 *
 * @return  {number}                              求得的协方差值
 */
function Covariance(_a, _b) {
    var value_a = _a.slice(0);
    var value_b = _b.slice(0);
    if (value_a.length == value_b.length) {
        var mean = Mean_1.Mean(__spreadArrays(value_a));
        var mean_b = Mean_1.Mean(__spreadArrays(value_b));
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