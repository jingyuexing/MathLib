
/**
 * 快速幂
 * 其核心思想是将n转化为几个2次幂的和而后进行对乘机求和
 * @param {number} a 底数
 * @param {number} n 指数
 */
function binExp(a:number,n:number){
    var k:number = 1;
    while(n){
        if((n&1)==1){
            k *=a;
        }
        a *= a;
        n = n>>1;
    }
    return k;
}