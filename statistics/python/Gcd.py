# -*- coding: utf-8 -*-
# @Author: Admin
# @Date:   2020-01-10 00:57:24
# @Last Modified by:   Jingyuexing
# @Last Modified time: 2020-01-11 13:59:42
def gcd(p=0,q=0):
    if q==0: return p
    r = p % q
    return gcd(q,r)
