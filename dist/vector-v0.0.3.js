"use strict";
// exports.__esModule = true;
var vector = /** @class */ (function () {
    function vector(_a) {
        var data = _a.slice(0);
        this.data = data;
    }
    vector.prototype={
        add:function (data) {
            var tempAry = [];
            if (data instanceof vector && data.data.length == this.data.length) {
                for (var i = 0; i < data.data.length; i++) {
                    tempAry.push(this.data[i] + data.data[i]);
                }
                return tempAry;
            }
        },
         //差
        mult:function (data) {
            var tempAry = [];
            if (data instanceof vector && data.data.length == this.data.length) {
                for (var i = 0; i < data.data.length; i++) {
                    tempAry.push(data.data[i] - this.data[i]);
                }
                return tempAry;
            }
            else {
                throw Error("参数必须是向量实例或两个向量长度需相同");
            }
        },
        // 求模
        mod:function (data) {
            var total = 0;
            if (data instanceof Array || data instanceof vector) {
                if (data instanceof Array) {
                    for (var i = 0; i < data.length; i++) {
                        total += Math.pow(data[i], 2);
                    }
                    return Math.sqrt(total);
                }
                if (data instanceof vector) {
                    return this.mod(data.data);
                }
                else {
                    throw TypeError("参数类型错误,参数必须是向量类或者数组类");
                }
            }
        },
        product:function (data) {
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
            if (data instanceof vector) {
                return this.product(data.data);
            }
        },
        vertical:function (dada) {
            if (dada instanceof Array) {
                if (this.product(dada) == 0) {
                    return true;
                }
            }
            if (dada instanceof vector) {
                this.vertical(dada.data);
            }
            return false;
        },
        angle:function (data) {
            if (data instanceof Array) {
                var total = 0;
                if (data.length == this.data.length) {
                    for (var i = 0; i < data.length; i++) {
                        total += (this.data[i] * data[i]);
                    }
                }
                return total / (this.mod(data) * this.mod(this.data));
            }
            if (data instanceof vector) {
                this.angle(data.data);
            }
        }
    }
    return vector;
}());
// exports.vector = vector;
