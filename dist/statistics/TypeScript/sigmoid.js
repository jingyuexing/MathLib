"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sigmoid = void 0;
/**
 *
 * @param x inputValue
 * @return number 0 to 1
 */
function sigmoid(x) {
    return 1 / (1 + Math.pow(Math.E, (-x)));
}
exports.sigmoid = sigmoid;
//# sourceMappingURL=sigmoid.js.map