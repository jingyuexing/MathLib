/**
 * 中位数
 */
import {Rank} from "./rank"
/**
 * 取整
 * @param  {x} x [输入数]
 * @return {~~x}   [返回数字]
 */
function int(x:number):number{
	return ~~x;
}
/**
 * 中位数
 *
 * @param   {Array}  number  需要取中位数的数组
 *
 * @return  {number}         取得的中位数
 */
function Median(number:Array<number>):number{
	var number = Rank.insert(number);
	if(number.length%2==0){
			/**
			 * 当数组长度为偶数，中位数为
			 */
			return number[number.length/2];
	}else{
			/**
			 * 数组长度为奇数,返回
			 * @param {[number]} number[number.length/2]+number[number.length/2+1 [description]
			 */
			return (number[int(number.length/2)]+number[int(number.length/2)+1])/2;
	}
}
export {Median};