/**
 * [Factorial 阶乘]
 * @param  {number} n [阶乘数]
 * @return {number}   [阶乘值]
 */
function Factorial(n:number):number{
		let total:number=1,k:number=n%1;
		for(let i=1;i<=n;i++){
			total*=i;
		}
		return total;
	}
export {Factorial}