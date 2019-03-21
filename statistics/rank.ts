// 排序算法
class Rank{
	/**
	 * 插入排序
	 * @param {Array<number>} ...a [需要排序的数据]
	 */
	insert([...a]:Array<number>):Array<number>{
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
	 * 冒泡拍寻
	 * @param  {Array<number>} ...a [需要排序的数据]
	 * @return {Array<number>}      [排序好的数据]
	 */
	bubbleSort([...a]:Array<number>):Array<number>{
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
	
}
default export {Rank};