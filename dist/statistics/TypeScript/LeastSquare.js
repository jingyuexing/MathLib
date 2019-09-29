"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mean_1 = require("./Mean");
/**
 * 最小二乘法
 * @param  {Array<number>} ...a [数据集]
 * @param  {Array<number>} ...b [数据集]
 * @param  {number}        n    [回归线取值范围]
 * @return {Array<any>}         [线性回归数据集]
 */
function LeastSquare(_a, _b, n) {
    var a = _a.slice(0);
    var b = _b.slice(0);
    if (a instanceof Array && b instanceof Array) {
        var __x__ = Mean_1.Mean(a); //求得x的平均值
        var __y__ = Mean_1.Mean(b); //求得y的平均值
        var total_1 = 0, total_2 = 0, _a_, _b_, y_, temp = [];
        if (a.length != b.length) {
            throw TypeError("两个数组数据不符合");
        }
        for (var i = 0; i < a.length; i++) {
            total_1 = a[i] * b[i] - (a.length * __x__ * __y__);
            total_2 = Math.pow(a[i], 2) - (a.length * Math.pow(__x__, 2));
        }
        _b_ = total_1 / total_2;
        _a_ = __y__ - _b_ * __x__;
        for (var j = 1; j < n; j++) {
            y_ = _b_ * j + _a_;
            temp.push({ x: j, y: y_ });
        }
        return temp;
    }
    else {
        throw TypeError("参数必须是数组类型数据");
    }
}
exports.LeastSquare = LeastSquare;
//# sourceMappingURL=LeastSquare.js.map