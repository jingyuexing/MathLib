/**
 * [expetation 期望值]
 * @param  {Array<number>} ...x [样本空间]
 * @param  {Array<number>} ...y [值域]
 * @return {number}             [期望值]
 */
function expetation([...x],[...y]){
	let sum=0;
	if(x.length==y.length){
		for(let i =0;i<y.length;i++){
			sum += x[i]*y[i];
		}
	}
	return sum;
}