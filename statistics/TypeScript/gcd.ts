/**
 * gcd 最大公约数
 * @param  {number} p [description]
 * @param  {number} q [description]
 * @return {number}   [description]
 */
function gcd(p:number,q:number):number {
	if(q===0) return p;
	let r =p % q;
	return gcd(q,r);
}
export {gcd};