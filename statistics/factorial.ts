/**
 * 求n的阶乘
 */
class Factorial{
	constructor(n:number){
		let total:number=1,k:number=n%1;
		/*if(k<1&&k>0){
			for(let m=1;m<=n;m+=0.1**String(k).length-2){
			//广义的求阶乘未实现
				total*=m;
			}
		}*/
		for(let i=1;i<=n;i++){
			total*=i;
		}
		return total;
	}
}
export {Factorial}