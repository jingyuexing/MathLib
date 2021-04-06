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
declare interface Vector{
    /**
	 * [向量和]
	 * @param  {Vector}        data [需要求和向量]
	 * @return {Array<number>}      [求和后结果]
	 */
    add(data:Vector):Array<number>;
    /**
     * [向量差]
     * @param  {Vector}        data [向量]
     * @return {Array<Number>}      [求差结果]
     */
    mult(data:Vector):Array<Number>;
    /**
     * [向量求模]
     * @param  {Array<number>|Vector} data [需要求模的数据或矩阵]
     * @return {number}                    [模的值]
     */
    mod(data:Array<number>|Vector):number;
    /**
     * 该方法允许输入数字，向量对象和数组
     * 数字与向量相乘结果为向量，两个向量相乘结果为数值
     * [向量积]
     * @param  {number|Array<number>|Vector} data [求积的矩阵或者数据]
     * @return {number}                           [结果值]
     */
    product(data:number|Array<number>|Vector):number|Array<number>;
    /**
     * 判断是否和另一个向量垂直,垂直返回真,不垂直返回假
     * @param  {vector|Array<number>} dada [和向量比较的向量或数据]
     * @return {boolean}                   [结果]
     */
    isVertical(dada:Vector|Array<number>):boolean
    /**
     * 求两个向量的余弦,返回值为余弦值
     * [angle 向量夹角]
     * @param  {vector|Array<number>} data [向量或者向量数据]
     * @return {number}                    [结果值]
     */
    angle(data:Vector|Array<number>):number;
}

/**
 * 求取两数组胡协方差
 *
 * @param   {Array<number>}  [...value_a]:Array<number>  第一个数组
 * @param   {Array<number>}  [...value_b]:Array<number>  第二个数组
 *
 * @return  {number}                              求得的协方差值
 */
declare function Covariance([...value_a]:Array<number>,[...value_b]:Array<number>):Array<number>;

/**
 * [expetation 期望值]
 * @param  {Array<number>} ...x [样本空间]
 * @param  {Array<number>} ...y [值域]
 * @return {number}             [期望值]
 */
declare function expetation([...x]:Array<number>,[...y]:Array<number>):number;


/**
 * @param {Array<number>} ...input [需要求平均值的数据]
 * @return {number}     平均值
 */
declare function Mean([...input]:Array<number>):number;

/**
 * 分位数图
 * @param {Array<number>} ...values [输入值]
 */
declare function QuantilePlot([...values]: Array<number>): Array<number>;

/**
 * 中位数
 *
 * @param   {Array}  number  需要取中位数的数组
 *
 * @return  {number}         取得的中位数
 */
declare function Median(number:Array<number>):number
