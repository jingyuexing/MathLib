# -*- coding: utf-8 -*-
# @Author: Admin
# @Date:   2020-01-10 01:34:45
# @Last Modified by:   jingyuexing
# @Last Modified time: 2020-07-19 05:41:21


def exp(x=0):
    E = 2.718281828459045
    return E**x


def softmax(*values):
    softmaxValue = []
    thisValues = []
    total = 0
    for k in values:
        if isinstance(k, (list, tuple)):
            for m in k:
                thisValues.append(m)
    for i in thisValues:
        total = total + exp(i)
    for n in thisValues:
        softmaxValue.append(exp(n) / total)
    return softmaxValue
