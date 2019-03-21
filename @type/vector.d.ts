interface Vector{
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
    vertical(dada:Vector|Array<number>):boolean
    /**
     * 求两个向量的余弦,返回值为余弦值
     * [angle 向量夹角]
     * @param  {vector|Array<number>} data [向量或者向量数据]
     * @return {number}                    [结果值]
     */
    angle(data:Vector|Array<number>):number;
}