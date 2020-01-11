# -*- coding: utf-8 -*-
# @Author: Admin
# @Date:   2020-01-10 00:58:26
# @Last Modified by:   Admin
# @Last Modified time: 2020-01-10 01:30:19
def summation(*args):
    total = 0
    tempList = []
    for x in args:
        if isinstance(x,(tuple,list)):
            for i in x:
                tempList.append(i)
        else:
            tempList.append(x)
    for k in tempList:
        total=total+k
    return total

if __name__ == "__main__":
    A = summation([12,5,6,7,8,9,0,12,44,6,77],[6,8,12,99,10])
    print(A)
