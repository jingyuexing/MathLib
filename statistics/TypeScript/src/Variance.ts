import {Mean} from "./Mean";
	/**
	 * 方差的正平方根称为该随机变量的标准差
	 * 方差
	 */
function Variance([...value]:Array<number>){
		var mean:any = Mean([...value]);
		var total:number=0;
		for(let i:number=0;i<value.length-1;i++){
			total+=Math.pow((value[i]-mean),2);
		}
		return total/value.length;
	}
export {Variance}