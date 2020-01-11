# -*- coding: utf-8 -*-
# @Author: Admin
# @Date:   2020-01-10 02:04:02
# @Last Modified by:   Admin
# @Last Modified time: 2020-01-10 02:05:26

def sigmoid(value):
    E = 2.718281828459045
    return 1/(1+E** -value)

if __name__ == "__main__":
    print(sigmoid(10))
    print(sigmoid(14))