/**
 * [Factorial 阶乘]
 * @param  {number} n [阶乘数]
 * @return {number}   [阶乘值]
 */
function Factorial(n){
    let total=1,k=n%1;
    for(let i=1;i<=n;i++){
        total*=i;
    }
    return total;
}
console.log(Factorial(10))