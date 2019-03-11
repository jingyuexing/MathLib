/**
 * 求阶乘
 * @param  {number} n 阶乘数值
 * @return {number}   阶乘
 */
function factorial(n:number):number{
	let total:number=1;
	for(let i:number=1;i<=n;i++){
		total*=i;
	}
	return total;
}
/**
 * 排列组合
 */
class Permu{
	constructor(m:number,n:number){
		return factorial(n)/factorial(m)*factorial(n-m);
	}
}
export {Permu}