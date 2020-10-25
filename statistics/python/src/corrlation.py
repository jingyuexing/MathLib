# -*- coding: utf-8 -*-
# @Author: Jingyuexing
# @Date:   2020-05-30 03:44:39
# @Last Modified by:   jingyuexing
# @Last Modified time: 2020-05-30 04:10:16

import var
import math


def corrlation(dataX:list, dataY:list):
    t = dataX
    for i in dataY:
        t.append(i)
    
    b = math.sqrt(var.variance(dataX) * var.variance(dataY))
    pass
