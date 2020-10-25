
/**
 * 计算熵
 * @param {number} argument 概率
 */
export function H() {
    var total:number=0;
    for(let i =0;i<arguments.length;i++){
        total += -arguments[i]*Math.log2(arguments[i]);
    }
    return total;
}

