"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gcd = void 0;
/**
 * gcd 最大公约数
 * @param  {number} p [description]
 * @param  {number} q [description]
 * @return {number}   [description]
 */
function gcd(p, q) {
    if (q === 0)
        return p;
    var r = p % q;
    return gcd(q, r);
}
exports.gcd = gcd;
//# sourceMappingURL=gcd.js.map