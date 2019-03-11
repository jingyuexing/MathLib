"use strict";
var product = /** @class */ (function () {
    /**
     * 初始化一个product对象
     * @param {Array<number>} ...index [数据:数组]
     */
    function product(_a) {
        var index = _a.slice(0);
        for (var i = 0; i < index.length; i++) {
            this.total += index[i];
            this.ary.push(index[i]);
        }
    }
    /**
     * 返回总和
     */
    product.prototype.Sum = function () {
        return this.total;
    };
    /**
     * 返回数据的乘积
     */
    product.prototype.product = function () {
        var total = 1;
        for (var n = 0; n < this.ary.length; n++) {
            total *= this.ary[n];
        }
        return total;
    };
    return product;
}());
//# sourceMappingURL=product.js.map