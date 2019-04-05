"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vector_1 = require("./vector");
/**
 * 实现矩阵的加减以及逆运算
 */
var Matrix = /** @class */ (function () {
    //初始化二维矩阵
    /**
     * 初始化矩阵
     * @param {number} row [行数]
     * @param {number} col [列数]
     */
    function Matrix(row, col) {
        this.row = row; //行
        this.col = col; //列
        this.data = Array(this.row);
        for (var i = 0; i < this.row; i++) {
            this.data[i] = new Array(this.col);
        }
    }
    /**
     * 初始化为一个单位矩阵
     */
    Matrix.prototype.Indentity = function () {
        for (var i = 0; i < this.col; i++) {
            for (var j = 0; j < this.row; j++) {
                if (i == j) {
                    this.data[i][j] = 1;
                }
                else {
                    this.data[i][j] = 0;
                }
            }
        }
        return this;
    };
    /**
     * 矩阵乘法
     * @param  {Matrix} matrix [相乘矩阵]
     * @return {Matrix}        [生成的新矩阵]
     */
    Matrix.prototype.product = function (matrix) {
        var tempMatrix = new Matrix(this.row, matrix.col);
        if (matrix instanceof Matrix) {
            if (this.col == matrix.row) {
                for (var i = 0; i < this.row; i++) {
                    for (var j = 0; j < matrix.col; j++) {
                        tempMatrix.data[i][j] = 0;
                        for (var k = 0; k < this.col; k++) {
                            tempMatrix.data[i][j] += this.data[i][k] * matrix.data[k][j];
                        }
                    }
                }
                return (this, tempMatrix);
            }
        }
    };
    /**
     * 元素对应乘积
     * @param data 矩阵或者向量
     */
    Matrix.prototype.Hardamard = function (data) {
        if (data instanceof Matrix) {
            var tempMatrix = new Matrix(data.row, data.col);
            for (var i = 0; i < data.col; i++) {
                for (var j = 0; j < data.row; j++) {
                    tempMatrix[i][j] = this.data[i][j] * data.data[i][j];
                }
            }
            return (this, tempMatrix);
        }
        if (data instanceof vector_1.Vector) {
            var tempV = new Array(data.data.length);
            if (data.data.length == this.data.length) {
                for (var i = 0; i < data.data.length; i++) {
                    for (var j = 0; j < this.row; j++) {
                        tempV[i] = data.data[i] * this.data[i][j];
                    }
                }
            }
            return (this, tempV);
        }
    };
    /**
     * 矩阵迹运算
     * @param  {Matrix} matrix [迹运算对象]
     * @return {number}        [返回总和]
     */
    Matrix.prototype.Tr = function (matrix) {
        var total = 0;
        for (var i = 0; i < matrix.col; i++) {
            for (var j = 0; j < matrix.row; j++) {
                if (i == j) {
                    total += matrix[i][j];
                }
            }
        }
        return (this, total);
    };
    /**
     * 将矩阵降维为数组
     * @param  {Matrix}        matrix [需要降维的矩阵]
     * @return {Array<number>}        [降维后返回的数组]
     */
    Matrix.prototype.downDimensionality = function (matrix) {
        var tempAry = [];
        if (matrix instanceof Matrix) {
            for (var i = 0; i < matrix.col; i++) {
                for (var j = 0; j < matrix.row; j++) {
                    tempAry.push(matrix[i][j]);
                }
            }
        }
        return (this, tempAry);
    };
    /**
     * 求矩阵范数
     * @param {Matrix} A [description]
     */
    Matrix.prototype.frobenius = function (A) {
        var tempNums = 0;
        for (var i = 0; i < A.row; i++) {
            for (var j = 0; j < A.col; j++) {
                tempNums += Math.pow(A.data[i][j], 2);
            }
        }
        return (this, Math.pow(tempNums, (1 / 2)));
    };
    /**
     * 矩阵的转置
     * [tran description]
     * @param  {Matrix} A [需被转置的矩阵]
     * @return {Matrix}   [转置后的结果]
     */
    Matrix.prototype.tran = function (A) {
        var NMatrix = new Matrix(A.col, A.row);
        for (var i = 0; i < A.row; i++) {
            for (var j = 0; j < A.col; j++) {
                NMatrix.data[j][i] = A.data[i][j];
            }
        }
        return (this, NMatrix);
    };
    return Matrix;
}());
exports.Matrix = Matrix;
//# sourceMappingURL=Matrix.js.map