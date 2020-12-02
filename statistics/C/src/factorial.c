#include "factorial.h"
/**
 * [Factorial 阶乘]
 * @param  n [description]
 * @return   [description]
 */
long int Factorial(int n){
    long int total=1;
    for(int i=1;i<=n;i++){
        total*=i;
    }
    return total;
}
