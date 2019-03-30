"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * [Harmonic 调和数]
 * @param  {number} n [description]
 * @return {number}   [description]
 */
function Harmonic(n) {
    var total = 0;
    for (var i = 1; i <= n; i++) {
        total += (1 / i);
    }
    return total;
}
exports.Harmonic = Harmonic;
//# sourceMappingURL=harmonic.js.map