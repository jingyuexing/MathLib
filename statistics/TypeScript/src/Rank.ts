// 排序算法
class Rank{
	/**
	 * 插入排序
	 * @param {Array<number>} ...a [需要排序的数据]
	 */
	static insert([...a]:Array<number>):Array<number>{
		var key:number,j:number;
		for(var i:number=2;i <= a.length;i++){
			key = a[i];
			j = i-1;
			while(i>0 && a[j]>key){
				a[j+1]=a[j];
				j=j-1;
				a[j+1]=key;
			}
		}
		return a;
	}
	/**
	 * 冒泡排序
	 * @param  {Array<number>} ...a [需要排序的数据]
	 * @return {Array<number>}      [排序好的数据]
	 */
	static bubbleSort([...a]:Array<number>):Array<number>{
		let temp:number=0;
		for(let i=0;i<a.length-1;i++){
			for(let j=0;j<a.length-i;j++){
				if(a[j]>a[j+1]){
					temp=a[j];
					a[j] = a[j+1];
					a[j+1] = temp;
				}
			}
		}
		return a;
	}

	static SelectSort(){

	}
	static quickSort([...arry]:Array<number>,begin:number,end:number):Array<number>{
		var i=begin,j=end,key=arry[begin];
		while(i<j){
			while(i<j&&arry[j]>=key) j--;
			if (i<j) {
				arry[i]=arry[j];
				i++;
			}
			while(i<j&&arry[i]<key) i++;
			if(i<j){
				arry[j]=arry[i];
				j--;
			}
		}
		arry[i]=key;
		Rank.quickSort(arry,begin,i-1);
		Rank.quickSort(arry,i+1,end);
		return arry;
	}
}
export {Rank};
