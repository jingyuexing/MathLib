# -*- coding: utf-8 -*-
# @Author: Jingyuexing
# @Date:   2020-01-11 17:41:48
# @Last Modified by:   Jingyuexing
# @Last Modified time: 2020-01-11 17:45:54
from Rnak import Rank
def median(data=[]):
    rank = Rank()
    data = rank.bubbleSort(data)
    if len(data)%2 == 0:
        return data[len(data)/2];
    else:
        return (data[int(len(data)/2)]+data[int(len(data)/2)+1])/2
    pass