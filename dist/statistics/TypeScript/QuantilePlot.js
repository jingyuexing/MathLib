"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuantilePlot = void 0;
/**
 * 分位数图
 * @param {Array<number>} ...values [输入值]
 */
function QuantilePlot(_a) {
    var values = _a.slice(0);
    var arry = [];
    for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
        var i = values_1[_i];
        arry.push((i - 0.5) / values.length);
    }
    return arry;
}
exports.QuantilePlot = QuantilePlot;
//# sourceMappingURL=QuantilePlot.js.map