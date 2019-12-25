
/**
 * 求和
 * @param {Array<number>} ...num [description]
 */
function Summation([...num]: Array<number>) {
    var total: number = 0;
    for (let i = 0; i < num.length; i++) {
        total += num[i];
    }
    return total;
}
export { Summation }