# Tmath
在`calculus`中有微积分为微积分实现方法,目前还未进行实现 在`statistics`中包含统计学相关的算法,如协方差，方差，求中位数,平均值,分位数图计算
- ----`index`：当前库的主要导出文件
- ----`Variance`：方差实现方法
- ----`weigth-variance`:加权平均数实现方法
- ----`QuantilePlot`:分位数图
- ----`Covariance`：协方差
- ----`Gaussiandistributio`：高斯正态分布(未实现)
- ----`Bayes`：贝叶斯概率计算（未实现）
- ----`Mean`：平均值
- ----`Media`:中位数
- ----`Matrix`:矩阵类,实现矩阵的计算,诸如相加,相减,矩阵的逆,矩阵转置
- ----`rank`：排序的实现(未完全实现)
- ----`StandardDeviation`:标准差
- ----`vector`:向量的运算
- ----`Permutations`：阶乘
- ----`expetation`：期望值
- ----`sigmoid`:激活函数
- ----`angule`:角度和弧度转换

----
用法:
```js
//比如求一组数据的方差
let ary = [2,3,6,8,9,12,15,22,33,14,21,16];
console.log(new Variance(ary));//此方法将会返回求得的方法
//若需要求标准差
console.log(Math.sqrt(new Variance(ary)));

```


---
关于这个数学库如果有意见可以和我一起修改[我的github仓库](https://github.com/jingyuexing/MathLib)
