/**
 * [Harmonic 调和数]
 * @param  {number} n [description]
 * @return {number}   [description]
 */
function Harmonic(n:number):number{
	var total=0;
	for(let i:number=1;i<=n;i++){
		total+=(1/i);
	}
	return total;
}
export {Harmonic};