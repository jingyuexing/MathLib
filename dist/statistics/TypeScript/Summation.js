"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summation = void 0;
/**
 * 求和
 * @param {Array<number>} ...num [description]
 */
function Summation(_a) {
    var num = _a.slice(0);
    var total = 0;
    for (var i = 0; i < num.length; i++) {
        total += num[i];
    }
    return total;
}
exports.Summation = Summation;
//# sourceMappingURL=Summation.js.map