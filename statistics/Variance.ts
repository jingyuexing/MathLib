import {Mean} from "./Mean";
class Variance{
	/**
	 * 方差的正平方根称为该随机变量的标准差
	 * 方差
	 */
	constructor([...value]:Array<number>){
		let mean:any = Mean([...value]);
		let total:number=0;
		for(let i=0;i<=value.length;i++){
			total+=(value[i]-mean)**2;
		}
		return total/value.length;
	}
}
export {Variance}