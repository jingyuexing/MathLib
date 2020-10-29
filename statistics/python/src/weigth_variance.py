# -*- coding: utf-8 -*-
# @Author: Admin
# @Date:   2020-01-10 01:44:06
# @Last Modified by:   Jingyuexing
# @Last Modified time: 2020-10-29 21:52:16


def weigthVariance(numberData=[], weigth=[]):
    totalWigth, totalNumebr = 0, 0
    if numberData.__len__() == weigth.__len__():
        i = 0
        while i <= len(numberData):
            totalWigth = totalWigth + weigth[i]
            totalNumebr = totalNumebr + numberData[i] * weigth[i]
            i = i + 1
    return totalNumebr / totalWigth
