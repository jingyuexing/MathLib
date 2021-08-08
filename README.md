# MathLib
在calculus中有微积分为微积分实现方法,目前还未进行实现 在`statistics`中包含统计学相关的算法,如协方差，方差，求中位数,平均值,分位数图计算
### statistics
- ----`index`：[当前库的主要导出文件](statistics/TypeScript/src/index.ts)
- ----`Variance`：[方差实现方法](statistics/TypeScript/src/Variance.ts) [python](statistics/python/src/var.py)
- ----`weigth_variance`:[加权平均数实现方法](statistics/TypeScript/src/weigth_variance.ts)
- ----`QuantilePlot`:[分位数图](statistics/TypeScript/src/src/QuantilePlot.ts)
- ----`Covariance`：[协方差](statistics/TypeScript/src/Covariance.ts)
- ----`Mean`：[平均值](statistics/TypeScript/src/Mean.ts) [py](statistics/python/src/Mean.py)
- ----`harmonic`：[调和数](statistics/TypeScript/src/harmonic.ts)
- ----`LeastSquare`：[二乘法](statistics/TypeScript/src/LeastSquare.ts)
- ----`Media`:[中位数](statistics/TypeScript/src/Median.ts) [py](statistics/python/src/Median.py)
- ----`Matrix`:[矩阵类](statistics/TypeScript/src/Matrix.ts) [C](statistics/C/src/matrix.c) [py](statistics/python/src/Matrix.py) [haxe](statistics/Haxe/src/mathlib/Matrix.hx),实现矩阵的计算,诸如相加,相减,矩阵的逆,矩阵转置
- ----`rank`：[排序](statistics/TypeScript/src/rank.ts) [py](statistics/python/src/Rank.py) 的实现(未完全实现)
- ----`StandardDeviation`:[标准差](statistics/TypeScript/src/Standard_Deviation.ts)
- ----`vector`:[向量](statistics/TypeScript/src/vector.ts)的运算 [py](statistics/python/src/Vector.py)
- ----`Permutations`：[阶乘](statistics/TypeScript/src/Permutations.ts)
- ----`expetation`：[期望值](statistics/TypeScript/src/expetation.ts)
- ----`sigmoid`:[激活函数](statistics/TypeScript/src/sigmoid.ts) [py](statistics/python/src/sigmoid.py)
- ----`angule`:[角度和弧度转换](statistics/TypeScript/src/angule.ts)
- ----`gcd`:[求最大公约数](statistics/TypeScript/src/gcd.ts)
- ----`Factorial`:[求n的阶乘](statistics/TypeScript/src/Factorial.ts)
- ----`softmax`:[softmax](statistics/TypeScript/src/softmax.ts) [py](statistics/python/src/softmax.py)

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

### todolist
- ☐ 完成Matrix算法的 C 实现
- ☐ 完成Matrix算法的 CPP 实现
- ☐ 完成Matrix算法的 CS 实现
- ☐ 完成Matrix算法的 JS 实现
- ☐ 完成Matrix算法的 GO 实现
- ☐ 完成Matrix算法的 Haxe 实现
- ☐ 完成Matrix算法的 Java 实现
- ☐ 完成Matrix算法的 Python 实现
- ☐ 完成link链表的 CPP 的实现
- ☐ 完成link链表的 JS 的实现
- ☐ 完成link链表的 Haxe 的实现
- ☐ 完成link链表的 Java 的实现
- ☐ 完成link链表的 Python 的实现
- ☐ 完成Vector向量 C 的实现
- ☐ 完成Vector向量 CPP 的实现
- ☐ 完成Vector向量 CS 的实现
- ☐ 完成Vector向量 JS 的实现
- ☐ 完成Vector向量 Go 的实现
- ☐ 完成Vector向量 Haxe 的实现
- ☐ 完成Vector向量 Java 的实现
- ☐ 完成Rank排序 C 的算法的实现
- ☐ 完成Rank排序 CPP 的算法的实现
- ☐ 完成Rank排序 JS 的算法的实现
- ☐ 完成Rank排序 Go 的算法的实现
- ☐ 完成Rank排序 Haxe 的算法的实现
- ☐ 完成Rank排序 Java 的算法的实现
- ☐ 完成Sgmoid算法的 C 实现
- ☐ 完成Sgmoid算法的 CPP 实现
- ☐ 完成Sgmoid算法的 JS 实现
- ☐ 完成Sgmoid算法的 TS 实现
- ☐ 完成Sgmoid算法的 Go 实现
- ☐ 完成Sgmoid算法的 Haxe 实现
- ☐ 完成Sgmoid算法的 Java 实现
- ☐ 完成Softmax算法的 C 实现
- ☐ 完成Softmax算法的 CPP 实现
- ☐ 完成Softmax算法的 JS 实现
- ☐ 完成Softmax算法的 GO 实现
- ☐ 完成Softmax算法的 Haxe 实现
- ☐ 完成Softmax算法的 Java 实现
- ☐ 完成Rank排序各类语言算法的实现
- ☐ 完成Sgmoid算法的各类语言实现
- ☐ 完成Vector各类语言的实现
- ☐ 完成link链表的各类语言的实现
- ☐ 完成Matrix算法的各类语言实现

＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿
Archive:
- ✔ 完成List链表的 Go 的实现 @done (21-08-07 11:31)
- ✔ 完成link链表的 Go 的实现 @done (21-08-07 11:29)
- ✔ 完成link链表的 C 的实现 @done (20-12-08 20:38)
- ✔ 完成Sgmoid算法的 CS 实现 @done (20-12-04 12:12)
- ✔ 完成link链表的 CS 的实现 @done (20-12-04 12:03)
- ✔ 完成Softmax算法的 CS 实现 @done (20-12-04 11:17)
- ✔ 完成Sgmoid算法的 CS 实现 @done (20-12-04 11:16)
- ✔ 完成Vector向量 Python 的实现 @done (20-12-03 14:41)
- ✔ 完成Softmax算法的 Python 实现 @done (20-12-03 14:41)
- ✔ 完成Softmax算法的 TS 实现 @done (20-12-03 14:28)
- ✔ 完成link链表的 TS 的实现 @done (20-12-03 14:27)
- ✔ 完成Vector向量 TS 的实现 @done (20-12-03 14:27)
- ✔ 完成Rank排序 TS 的算法的实现 @done (20-12-03 14:27)
- ✔ 完成Rank排序 Python 的算法的实现 @done (20-12-03 14:27)
- ✔ 完成Matrix算法的 TS 实现 @done (20-12-03 14:27)
- ✔ 完成Sgmoid算法的 Python 实现 @done (20-12-03 14:26)

---
关于这个数学库如果有意见可以和我[一起修改我的github仓库](https://github.com/jingyuexing/MathLib)
你也可以到[gitee码云](https://gitee.com/jingyuexing/MathLib)查询这个库的镜像

