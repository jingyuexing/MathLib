# -*- coding: utf-8 -*-
# @Author: Admin
# @Date:   2020-01-10 00:58:26
# @Last Modified by:   Jingyuexing
# @Last Modified time: 2021-02-10 13:45:37


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
if __name__ == '__main__':
    s = summation([12,34,56,78,90,0])
    print(s)
