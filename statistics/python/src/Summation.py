# -*- coding: utf-8 -*-
# @Author: Admin
# @Date:   2020-01-10 00:58:26
# @Last Modified by:   jingyuexing
# @Last Modified time: 2020-07-19 05:44:01


def summation(*args):
    total = 0
    tempList = []
    for x in args:
        if isinstance(x, (tuple, list)):
            for i in x:
                tempList.append(i)
        else:
            tempList.append(x)
    for k in tempList:
        total = total + k
    return total
