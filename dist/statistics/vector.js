"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vector = /** @class */ (function () {
    /**
     * 向量
     * @param {Array<number>} ...data [向量数据]
     */
    function Vector(_a) {
        var data = _a.slice(0);
        this.data = data;
    }
    /**
     * 向量的和
     * @param  {vector}        data [求和向量]
     * @return {Array<number>}      [向量数据矩阵]
     */
    Vector.prototype.add = function (data) {
        var tempAry = [];
        if (data instanceof Vector && data.data.length == this.data.length) {
            for (var i = 0; i < data.data.length; i++) {
                tempAry.push(this.data[i] + data.data[i]);
            }
            return tempAry;
        }
    };
    /**
     * 向量的差
     * @param  {vector}        data [向量]
     * @return {Array<Number>}      [返回向量数组]
     */
    Vector.prototype.mult = function (data) {
        var tempAry = [];
        if (data instanceof Vector && data.data.length == this.data.length) {
            for (var i = 0; i < data.data.length; i++) {
                tempAry.push(data.data[i] - this.data[i]);
            }
            return tempAry;
        }
        else {
            throw Error("参数必须是向量实例或两个向量长度需相同");
        }
    };
    /**
     * 对向量求模
     * @param  {Array<number>|Vector} data [求模的数据或向量]
     * @return {number}                    [结果]
     */
    Vector.prototype.mod = function (data) {
        var total = 0;
        if (data instanceof Array || data instanceof Vector) {
            if (data instanceof Array) {
                for (var i = 0; i < data.length; i++) {
                    total += Math.pow(data[i], 2);
                }
                return Math.sqrt(total);
            }
            if (data instanceof Vector) {
                return this.mod(data.data);
            }
            else {
                throw TypeError("参数类型错误,参数必须是向量类或者数组类");
            }
        }
    };
    /**
     * 向量积
     * @param  {number|Array<number>|vector} data [求积的向量或者数组]
     * @return {number}                           [结果值]
     */
    Vector.prototype.product = function (data) {
        var total = 0;
        //倍数向量
        if (typeof data === "number") {
            for (var i = 0; i < this.data.length; i++) {
                this.data[i] *= data;
            }
        }
        //乘积(点积)
        if (data instanceof Array) {
            if (this.data.length == data.length) {
                for (var i = 0; i < data.length; i++) {
                    total += (this.data[i] * data[i]);
                }
                return total;
            }
            else {
                throw TypeError("参数长度不一致!");
            }
        }
        //乘积(点积)
        if (data instanceof Vector) {
            return this.product(data.data);
        }
    };
    /**
     * 判断是否和另一个向量垂直,垂直返回真,不垂直返回假
     * @param  {vector|Array<number>} dada [和向量比较的向量或数据]
     * @return {boolean}                   [结果]
     */
    Vector.prototype.isVertical = function (dada) {
        if (dada instanceof Array) {
            if (this.product(dada) == 0) {
                return true;
            }
        }
        if (dada instanceof Vector) {
            this.isVertical(dada.data);
        }
        return false;
    };
    /**
     * [angle 向量夹角]
     * @param  {vector|Array<number>} data [向量或者向量数据]
     * @return {number}                    [结果值]
     */
    Vector.prototype.angle = function (data) {
        if (data instanceof Array) {
            var total = 0;
            if (data.length == this.data.length) {
                for (var i = 0; i < data.length; i++) {
                    total += (this.data[i] * data[i]);
                }
            }
            return total / (this.mod(data) * this.mod(this.data));
        }
        if (data instanceof Vector) {
            this.angle(data.data);
        }
    };
    return Vector;
}());
exports.Vector = Vector;
//# sourceMappingURL=vector.js.map