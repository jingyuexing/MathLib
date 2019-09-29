"use strict";
/**
 * 三角函数
 */
function trigonometric(x, y) {
    var r = Math.sqrt(x * x) + Math.sqrt(y * y);
    var sin, //正弦函数
    cos, //余弦函数
    tan, //正切函数
    cot, //
    sec, csc;
    return {};
}
var tri = /** @class */ (function () {
    function tri(x, y) {
        this.x = x;
        this.y = y;
        this.r = Math.sqrt(x * x) + Math.sqrt(y * y);
    }
    tri.prototype.sin = function () {
        return this.y / this.r;
    };
    tri.prototype.cos = function () {
        return this.x / this.r;
    };
    tri.prototype.tan = function () {
        return this.y / this.x;
    };
    tri.prototype.cot = function () {
        return this.x / this.y;
    };
    tri.prototype.sec = function () {
        return this.r / this.x;
    };
    tri.prototype.csc = function () {
        return this.r / this.y;
    };
    tri.prototype.pointXY = function (x, y) {
        var new_x = x - this.x;
        var new_y = y - this.y;
        var new_r = Math.sqrt(new_x * new_x) + Math.sqrt(new_y * new_y);
        return { x: new_x, y: new_y, r: new_r };
    };
    return tri;
}());
//# sourceMappingURL=trigonometric.js.map