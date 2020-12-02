#include <stdio.h>

/**
 * 快速幂
 * 其核心思想是将n转化为几个2次幂的和而后进行对乘机求和
 * @param   int     a  底数
 * @param   int     n  指数
 *
 * @return  double     运算结果
 */
double binExp(long double a,int n){
  double k = 1.0;
  a = a;
  while (n){
    if((n&1)==1){
      k *= a;
    }
    a *= a;
    n = n>>1;
  }
  return k;
}
int main(int argc, char const *argv[]){
  printf("%lf",binExp(2,44));
  return 0;
}
