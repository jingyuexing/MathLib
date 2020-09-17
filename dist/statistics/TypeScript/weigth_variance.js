"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weigthVariance = void 0;
/**
 * 加权平均数
 */
/**
 * 计算加权平均数
 * @param {Array<number>} numberData 要计算的值
 * @param {Array<number>} weigth 权值
 */
function weigthVariance(_a, _b) {
    var numberData = _a.slice(0);
    var weigth = _b.slice(0);
    var totalWigth = 0, totaNumber = 0;
    if (numberData.length == weigth.length) {
        for (var i = 0; i <= numberData.length; i++) {
            totalWigth += weigth[i];
            totaNumber += numberData[i] * weigth[i];
        }
    }
    else {
        throw Error("权重值和数据不匹配!");
    }
    return totaNumber / totalWigth;
}
exports.weigthVariance = weigthVariance;
//# sourceMappingURL=weigth_variance.js.map