"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expetation = void 0;
/**
 * [expetation 期望值]
 * @param  {Array<number>} ...x [样本空间]
 * @param  {Array<number>} ...y [值域]
 * @return {number}             [期望值]
 */
function expetation(_a, _b) {
    var x = _a.slice(0);
    var y = _b.slice(0);
    var sum = 0;
    if (x.length == y.length) {
        for (var i = 0; i < y.length; i++) {
            sum += x[i] * y[i];
        }
    }
    return sum;
}
exports.expetation = expetation;
//# sourceMappingURL=expetation.js.map