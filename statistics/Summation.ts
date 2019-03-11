class Summation{
	/**
	 * 求和
	 * @param {Array<number>} ...num [description]
	 */
	total:number;
    constructor([...num]:Array<number>){ 
        for(let i=0;i<num.length;i++){
            this.total+=num[i];
       }
    }
    Summation(){
    	return this.total;
    }
}