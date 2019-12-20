declare interface Rank{
	/**
	 * [insert 插入排序]
	 * @param  {Array<number>} ...a [需要排序的数据]
	 * @return {Array<number>}      [排序后的数据]
	 */
	insert([...a]:Array<number>):Array<number>;
	/**
	 * [bubbleSort 冒泡排序]
	 * @param  {Array<number>} ...a [需要排序的数据]
	 * @return {Array<number>}      [排序后的数据]
	 */
	bubbleSort([...a]:Array<number>):Array<number>;
}