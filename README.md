# MathLib
在`[statistics](./statistics)`中有微积分为微积分实现方法,目前还未进行实现 在`statistics`中包含统计学相关的算法,如协方差，方差，求中位数,平均值,分位数图计算
### statistics
- ----`index`：当前库的主要导出文件
- ----`Variance`：方差实现方法
- ----`weigth_variance`:加权平均数实现方法
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
- ----`gcd`:求最大公约数
- ----`Factorial`:求n的阶乘

---
增加链式调用,Matrix类以及Vector类

----
用法:
* ***Variance***
此方法求取数据的方差,返回的是方差值,若需要标准差,只需要将该方法返回值开方即可
```js
//Variance([...value]:Array<number>);
console.log(Variance([2,3,5,7,8,9,12,40,66,92,103,88]));//NaN,unknow Error
```
* ***weigth_variance***
此方法返回加权平均值
函数第一个参数数组为数据,第二个数组参数为权重值
```js
//weigthVariance([...numberData]: Array < number > , [...weigth]: Array < number > )
console.log(weigthVariance([2,3,5,8,9,12,44],[1,1,1,2,3,2,1]))
```

---
关于这个数学库如果有意见可以和我[一起修改我的github仓库](https://github.com/jingyuexing/MathLib)
