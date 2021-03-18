/**
 * 平均值
 */
    /**
     * 初始化一个数列
     * @param {Array<number>} ...input [需要求平均值的数据]
     */
function Mean([...input]:Array<number>){
    return input.reduce((x,y)=>(x+y)/input.length);
}
export {Mean}
