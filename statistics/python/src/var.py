# -*- coding: utf-8 -*-
# @Author: Jingyuexing
# @Date:   2020-05-30 03:45:48
# @Last Modified by:   jingyuexing
# @Last Modified time: 2020-07-19 05:46:11

import Mean
import math


def variance(*arg):
    for i in arg:
        data = i
        mean = Mean.mean(data)
        total = 0
        for i in range(len(data)):
            total = total + math.pow(data[i] - mean, 2)
        total = total / len(data)
    return total


def cov(data):
    return math.sqrt(variance(data))
