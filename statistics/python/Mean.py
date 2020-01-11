# -*- coding: utf-8 -*-
# @Author: Admin
# @Date:   2020-01-10 00:57:06
# @Last Modified by:   Jingyuexing
# @Last Modified time: 2020-01-11 17:41:06

from Rnak import Rank
def mean(data=[]):
    total = 0
    for i in range(0,len(data)):
        total = total+data[i]
    return total/len(data)