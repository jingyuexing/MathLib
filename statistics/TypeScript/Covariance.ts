/**
 * 协方差
 */
import {Mean} from "./Mean";
/**
 * 求取两数组胡协方差
 *
 * @param   {Array<number>}  [...value_a]:Array<number>  第一个数组
 * @param   {Array<number>}  [...value_b]:Array<number>  第二个数组
 *
 * @return  {number}                              求得的协方差值
 */
function Covariance([...value_a]:Array<number>,[...value_b]:Array<number>){
		if(value_a.length==value_b.length){
			let mean:any = Mean([...value_a]);
			let mean_b:any = Mean([...value_b]);
			let total:number=0;
			for(let i=0;i<=value_a.length;i++){
				total+=(value_a[i]-mean)*(value_b[i]-mean_b);
			} 
			return total/value_a.length;
		}else{
			throw Error("两个集合不均等!");
		}
	}
export {Covariance as Cov};