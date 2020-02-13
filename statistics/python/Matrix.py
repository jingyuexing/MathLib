# -*- coding: utf-8 -*-
# @Author: Jingyuexing
# @Date:   2019-07-11 23:56:22
# @Last Modified by:   Jingyuexing
# @Last Modified time: 2020-01-13 09:11:30
import Vector


class Matrix:
    """docstring for  Matrix
    row 行数
    col 列数
    data 矩阵数据
    """

    def __init__(self, row=0, col=0, data=[]):
        if isinstance(row, (list, tuple)):
            self.row = len(row)
            self.col = len(row[0])
            self.data = row
            self.shape = (self.row, self.col)
        else:
            self.row = row
            self.col = col
            self.data = []
            for x in range(0, self.row):
                self.data.append([])
                for i in range(0, self.col):
                    self.data[x].append([])
            self.shape = (self.row, self.col)

    def indentity(self):
        '''初始化为单位矩阵

        [description]

        Returns:
            [type] -- [description]
        '''
        for i in range(0, self.col):
            for j in range(0, self.row):
                if i == j:
                    self.data[i][j] = 1
                else:
                    self.data[i][j] = 0
        return self

    def product(self, Mb):
        """矩阵相乘

        其他矩阵和其自身相乘

        Arguments:
            Mb {Matrix} -- 相乘的矩阵

        Returns:
            Matrix -- 相乘后的矩阵
        """
        if isinstance(Mb, Matrix) and self.col == Mb.row:
            i = 0
            tempMatrix = Matrix(self.row, Mb.col)
            while(i < self.row):
                j = 0
                while j < Mb.col:
                    tempMatrix.data[i][j] = 0
                    n = 0
                    while n < self.col:
                        tempMatrix.data[i][j] = tempMatrix.data[i][
                            j] + (self.data[i][n] * Mb.data[n][j])
                        n = n + 1
                    j = j + 1
                i = i + 1
        return tempMatrix

    def hardamard(self, data):
        '''[summary]

        [description]

        Arguments:
            data {[type]} -- [description]

        Returns:
            | -- [description]
        '''
        if isinstance(data, Matrix):
            tempMatrix = Matrix(data.row, data.col)
            for i in range(0, data.col):
                for j in range(data.row):
                    tempMatrix.data[i][j] = self.data[i][j] * data.data[i][j]
            return tempMatrix
        if isinstance(data, Vector):
            tempVector = []
            if len(data.data) == len(self.data):
                for i in range(0, len(data.data)):
                    for j in range(0, len(self.row)):
                        tempVector = data.data[i] * self.data[i][j]
            return tempVector

    def tr(self, Ma):
        '''[summary]

        矩阵迹运算

        Arguments:
            Ma {Matrix} -- 需要迹运算的矩阵

        Returns:
            number  -- 迹运算结果值
        '''
        if isinstance(Ma, Matrix):
            total = 0
            for i in range(0, Ma.col):
                for j in range(0, Ma.row):
                    if i == j:
                        total = total + Ma.data[i][j]
            return total

    def frobenius(self, A):
        '''[summary]

        矩阵范数

        Arguments:
            A {Matrix} -- 需要求范数的矩阵

        Returns:
            number -- 范数值
        '''
        tempNums = 0
        if isinstance(A, Matrix):
            for i in range(0, A.row):
                for j in range(0, A.col):
                    tempNums = tempNums + A.data[i][j]**2
            return tempNums**0.5

    def tran(self, A):
        """矩阵转置
            A 需要被转置的矩阵
        """
        if isinstance(A, Matrix):
            NMatrix = Matrix(A.col, A.row)
            for i in range(0, A.row):
                for j in range(0, A.col):
                    NMatrix.data[j][i] = A.data[i][j]
            return NMatrix

    def map(self):
        '''[summary]

        [description]

        Returns:
            list -- 返回数组
        '''
        tempArray = []
        for x in range(0, self.row):
            for i in range(0, self.col):
                tempArray.append(self.data[x][i])
        return tempArray

    def insertData(self, *args):
        '''[summary]

        为矩阵插入数据

        Arguments:
            *args {Number} -- 数据
        '''
        n = 0
        for i in range(0, self.row):
            for j in range(0, self.col):
                if n >= len(args):
                    if isinstance(ele,(list,tuple)):
                        for x in args[n]:
                            self.data[i][j] = x
                    self.data[i][j] = args[n]
                    n = n + 1
        return self

    def pooling(self, value):
        '''矩阵池化
        ```md
        矩阵池化是将一个大的矩阵划分成小的矩阵，然后选取小的矩阵当中的最大数形成新的矩阵
        ```
        [description]

        Arguments:
            value {int} -- 一个整型数据

        Returns:
            Matrix -- 返回池化后的矩阵
        '''
        if isinstance(value, Matrix):
            h, w = value.shape
            tempList = []
            tempMatrix = Matrix(value.row,value.col)
            for i in range(h):
                for j in range(w):
                    for n in range(0,h):
                       s=self.data[i+n][j:j+w]
                       if len(s[0]) == h:tempMatrix.insertData(s)
        elif isinstance(value,(tuple,list)):
            tempMatrix = Matrix(value)
            self.pooling(tempMatrix)
        return tempMatrix

    def flat(self):
        return self.map()
if __name__ == "__main__":
    Cover = Matrix([[1,2,3],[4,5,6],[7,8,9]])
    Cover.pooling([[1,2,3],[4,5,6]])