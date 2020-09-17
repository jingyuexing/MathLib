"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powerFactorial = void 0;
var Factorial_1 = require("./Factorial");
function powerFactorial(x, n) {
    return Factorial_1.Factorial(x + n - 1) / Factorial_1.Factorial(x - 1);
}
exports.powerFactorial = powerFactorial;
//# sourceMappingURL=powerFactorial.js.map