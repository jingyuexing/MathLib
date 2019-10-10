"use strict";
exports.__esModule = true;
// 排序算法
var Rank = /** @class */ (function () {
    function Rank() {
    }
    /**
     * 插入排序
     * @param {Array<number>} ...a [需要排序的数据]
     */
    Rank.insert = function (_a) {
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
     * 冒泡排序
     * @param  {Array<number>} ...a [需要排序的数据]
     * @return {Array<number>}      [排序好的数据]
     */
    Rank.bubbleSort = function (_a) {
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
    Rank.SelectSort = function () {
    };
    Rank.quickSort = function (_a, begin, end) {
        var arry = _a.slice(0);
        var i = begin, j = end, key = arry[begin];
        while (i < j) {
            while (i < j && arry[j] >= key)
                j--;
            if (i < j) {
                arry[i] = arry[j];
                i++;
            }
            while (i < j && arry[i] < key)
                i++;
            if (i < j) {
                arry[j] = arry[i];
                j--;
            }
        }
        arry[i] = key;
        this.quickSort(arry, begin, i - 1);
        this.quickSort(arry, i + 1, end);
        return arry;
    };
    return Rank;
}());
exports.Rank = Rank;
