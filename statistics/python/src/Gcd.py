# -*- coding: utf-8 -*-
# @Author: Admin
# @Date:   2020-01-10 00:57:24
# @Last Modified by:   jingyuexing
# @Last Modified time: 2020-01-11 19:23:44
def gcd(p=0,q=0):
    if q==0: return p
    r = p % q
    return gcd(q,r)
if __name__ == '__main__':
    s=sum([2,3,4,5,6,7,8,9,0,12])
    print(s)