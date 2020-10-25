# -*- coding: utf-8 -*-
# @Author: Admin
# @Date:   2020-01-10 00:57:06
# @Last Modified by:   jingyuexing
# @Last Modified time: 2020-05-30 04:11:27

from Rnak import Rank


def mean(data=[]):
    '''平均值

    [description]

    Keyword Arguments:
        data {list} -- [description] (default: {[]})

    Returns:
        float -- 返回的平均值
    '''
    total = 0
    for i in range(0, len(data)):
        total = total + data[i]
    return total / len(data)
