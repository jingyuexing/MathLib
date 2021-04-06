/// <reference path="./vector.d.ts" />
declare class Matrix{
    /**
	 * 初始化为一个单位矩阵
	 */
    Indentity():Matrix;
    /**
	 * 元素对应乘积
	 * @param data 矩阵或者向量
	 */
    Hardamard(data:Matrix|Vector):Matrix;
    /**
	 * 矩阵迹运算
	 * @param  {Matrix} matrix [迹运算对象]
	 * @return {number}        [返回总和]
	 */
    Tr(matrix:Matrix):number;
    /**
	 * 将矩阵降维为数组
	 * @param  {Matrix}        matrix [需要降维的矩阵]
	 * @return {Array<number>}        [降维后返回的数组]
	 */
    downDimensionality(matrix:Matrix):Array<number>;
    /**
	 * 求矩阵范数
	 * @param {Matrix} A [description]
	 */
	frobenius(A:Matrix):number;
	/**
	 * 矩阵的转置
	 * [tran description]
	 * @param  {Matrix} A [需被转置的矩阵]
	 * @return {Matrix}   [转置后的结果]
	 */
	tran(A:Matrix):Matrix;
}
