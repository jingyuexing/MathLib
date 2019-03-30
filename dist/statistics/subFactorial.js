"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Factorial_1 = require("./Factorial");
function subFactorial(x, n) {
    return Factorial_1.Factorial(x) / Factorial_1.Factorial(x - n);
}
exports.subFactorial = subFactorial;
//# sourceMappingURL=subFactorial.js.map