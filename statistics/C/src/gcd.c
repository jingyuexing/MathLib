#include "gcd.h"
/**
 * 求最大公约数
 * @param  p [description]
 * @param  q [description]
 * @return   [description]
 */
int gcd(int p,int q){
    if(q==0) return p;
    int r = p % q;
    return gcd(q,r);
}