"use strict";
var Summation = /** @class */ (function () {
    function Summation(_a) {
        var num = _a.slice(0);
        for (var i = 0; i < num.length; i++) {
            this.total += num[i];
        }
    }
    Summation.prototype.Summation = function () {
        return this.total;
    };
    return Summation;
}());
//# sourceMappingURL=Summation.js.map