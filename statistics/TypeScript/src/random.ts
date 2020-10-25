
/**
 * [randomFloat description]
 */
function randomFloat() {
    return Math.random()*100
}

/**
 * 生成整数型随机数
 * @param {number} max [description]
 * @param {number} min [description]
 */
function randomInt(max:number,min:number) {
    return ~~(Math.random()*10000);
}