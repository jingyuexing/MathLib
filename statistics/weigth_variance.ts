/**
 * 加权平均数
 */
    /**
     * 计算加权平均数
     * @param {Array<number>} numberData 要计算的值
     * @param {Array<number>} weigth 权值
     */
    function weigthVariance([...numberData]: Array < number > , [...weigth]: Array < number > ) {
    	let totalWigth:number=0,totaNumber:number=0;
        if (numberData.length == weigth.length) {
        	for(let i:number =0;i<=numberData.length;i++){
        		totalWigth+=weigth[i];
        		totaNumber+=numberData[i]*weigth[i];
        	}
        }else{
        	throw Error("权重值和数据不匹配!");
        }
        return totaNumber/totalWigth;
    }
export {weigthVariance};