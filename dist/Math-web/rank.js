"use strict";
// 排序算法
var Rank = /** @class */ (function () {
    function Rank() {
    }
    /**
     * 插入排序
     * @param {Array<number>} ...a [需要排序的数据]
     */
    Rank.prototype.insert = function (_a) {
        var a = _a.slice(0);
        var key, j;
        for (var i = 2; i <= a.length; i++) {
            key = a[i];
            j = i - 1;
            while (i > 0 && a[j] > key) {
                a[j + 1] = a[j];
                j = j - 1;
                a[j + 1] = key;
            }
        }
        return a;
    };
    /**
     * 冒泡拍寻
     * @param  {Array<number>} ...a [需要排序的数据]
     * @return {Array<number>}      [排序好的数据]
     */
    Rank.prototype.bubbleSort = function (_a) {
        var a = _a.slice(0);
        var temp = 0;
        for (var i = 0; i < a.length - 1; i++) {
            for (var j = 0; j < a.length - i; j++) {
                if (a[j] > a[j + 1]) {
                    temp = a[j];
                    a[j] = a[j + 1];
                    a[j + 1] = temp;
                }
            }
        }
        return a;
    };
    return Rank;
}());
//# sourceMappingURL=rank.js.map