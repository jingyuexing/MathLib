"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var Mean_1 = require("./Mean");
/**
 * 方差的正平方根称为该随机变量的标准差
 * 方差
 */
function Variance(_a) {
    var value = _a.slice(0);
    var mean = Mean_1.Mean(__spreadArrays(value));
    var total = 0;
    for (var i = 0; i < value.length - 1; i++) {
        total += Math.pow((value[i] - mean), 2);
    }
    return total / value.length;
}
exports.Variance = Variance;
