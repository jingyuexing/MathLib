interface IVector{
    /**
     * 向量模
     * @return {number} [description]
     */
    mod():number;
    /**
     * 向量加法
     * @return {IVector} [description]
     */
    add(vector:IVector):IVector;
    /**
     * 向量减法
     * @param  {IVector} vector  another vector
     * @return {IVector}        [description]
     */
    sub(vector:IVector):IVector;
    /**
     * 向量夹角
     * @param {IVector} vector another vector
     * @return {number} [description]
     */
    angle(vector:IVector):number;
    /**
     * 向量点乘
     * @param  {IVector} vector 相乘向量
     * @return {number}         [description]
     */
    dotProduct(vector:IVector):number;
    /**
     * 向量叉乘
     * @param  {IVector} vector 相乘向量
     * @return {IVector}        [description]
     */
    product(vector:IVector):IVector;
    /**
     * 判断自身和向量 vector 向量是否是平行
     * @param  {IVector} vector [description]
     * @return {boolean}        [description]
     */
    isHorizontal(vector:IVector):boolean;
    /**
     * 判断自身和向量 vector 向量是否是垂直
     * @param  {IVector} vector  another vector
     * @return {boolean}        [description]
     */
    isVertical(vector:IVector):boolean;
}

interface IMatrix{
    /**
     * 矩阵加法
     * @param  {IVector} matrix  another matrix
     * @return {IMatrix} [description]
     */
    add(matrix:IMatrix):IMatrix;
    /**
     * 矩阵减法
     * @param  {IVector} matrix  another matrix
     * @return {IMatrix} [description]
     */
    sub(matrix:IMatrix):IMatrix;
    /**
     * 将自身初始化为单位矩阵
     * @return {IMatrix} [description]
     */
    indentity():IMatrix;
    /**
     * 矩阵乘法
     * @param  {IVector} matrix  another matrix
     * @return {IMatrix} [description]
     */
    product(matrix:IMatrix):IMatrix;
    /**
     * 矩阵转置
     * @return {IMatrix} [description]
     */
    transform():IMatrix;
}
interface IRank{
    /**
     * 插入排序
     *
     * @param   {number[]}  data  [data description]
     *
     * @return  {number[]}          [return description]
     */
    insertSort(data:number[]):number[];
    /**
     * 冒泡排序
     * @param  {number[]} data [description]
     * @return {number[]}      [description]
     */
    bubbleSort(data:number[]):number[];
    /**
     * 快排
     * @param  {number[]} data [description]
     * @return {number[]}      [description]
     */
    quickSort(data:number[]):number[];
    /**
     * 选择排序
     * @param  {number[]} data [description]
     * @return {number[]}      [description]
     */
    SelectSort(data:number[]):number[];
    /**
     * 归并排序
     * @param  {number[]} data [description]
     * @return {number[]}      [description]
     */
    mergeSort(data:number[]):number[];
}
interface INode{}

/**
 * List 是双向链表或单向链表 环形链表的统一接口
 */
interface IList{
    insert():INode;
    find():INode;
    remove():INode;
    findPrevious():INode;
    last():INode;
}

interface IStack {
    /**
     * 入栈
     * @param  {number} item 入栈元素
     * @return {number}      元素下标
     */
    push(item:number):number;
    /**
     * [pop description]
     * @param  {number} item [description]
     * @return {number}      [description]
     */
    pop(item:number):number;
    /**
     * [indexOf description]
     * @param  {number} index [description]
     * @return {any}          [description]
     */
    indexOf(index:number):any;

}

interface ITree extends IList {}

let m:IStack;
