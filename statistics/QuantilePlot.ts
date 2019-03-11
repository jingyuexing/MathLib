class QuantilePlot{
	/**
	 * 分位数图
	 * @param {Array<number>} ...values [输入值]
	 */
	constructor([...values]:Array<number>){
		let arry:Array<number>=[];
		for(let i of values){
			arry.push((i-0.5)/values.length);
		}
		return arry;
	}
}
export {QuantilePlot};