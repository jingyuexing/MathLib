class product{
	total:number;
	ary:number[];
	/**
	 * 初始化一个product对象
	 * @param {Array<number>} ...index [数据:数组]
	 */
	constructor([...index]:Array<number>){
		for(let i=0;i<index.length;i++){
			this.total+=index[i];
			this.ary.push(index[i]);
		}
	}
	/**
	 * 返回总和
	 */
	Sum(){
		return this.total;
	}
	/**
	 * 返回数据的乘积
	 */
	product(){
		let total=1;
		for(let n=0;n<this.ary.length;n++){
			total*=this.ary[n];
		}
		return total;
	}
}