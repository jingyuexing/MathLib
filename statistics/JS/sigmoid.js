"use strict";
exports.__esModule = true;
/**
 *
 * @param x inputValue
 * @return number 0 to 1
 */
function sigmoid(x) {
    return 1 / (1 + Math.pow(Math.E, (-x)));
}
exports.sigmoid = sigmoid;
