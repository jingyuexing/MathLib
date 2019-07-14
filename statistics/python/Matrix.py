# -*- coding: utf-8 -*-
# @Author: Jingyuexing
# @Date:   2019-07-11 23:56:22
# @Last Modified by:   Jingyuexing
# @Last Modified time: 2019-07-14 10:16:01
from Vector import *
class  Matrix:
    """docstring for  Matrix
    row 行数
    col 列数
    data 矩阵数据
    """
    def __init__(self, row,col,data=[]):
        self.row = row
        self.col = col
        self.data = []
        for x in range(0,self.row):
            self.data.append([])
        for m in self.data:
            for n in range(0,self.col):
                m.append(None)

    def indentity(self):
        '''初始化为单位矩阵
        
        [description]
        
        Returns:
            [type] -- [description]
        '''
        for i in range(0,self.col):
            for j in range(0,self.row):
                if i == j:
                    self.data[i][j] = 1
                else:
                    self.data[i][j] = 0
        return self
    def product(self):
        pass
    def hardamard(self,data):
        '''[summary]
        
        [description]
        
        Arguments:
            data {[type]} -- [description]
        
        Returns:
            | -- [description]
        '''
        if isinstance(data,Matrix):
            tempMatrix = Matrix(data.row,data.col)
            for i in range(0,data.col):
                for j in range(data.row):
                    tempMatrix.data[i][j] = self.data[i][j]*data.data[i][j]
            return tempMatrix
        if isinstance(data,Vector):
            tempVector = []
            if len(data.data)==len(self.data):
                for i in range(0,len(data.data)):
                    for j in range(0,len(self.row)):
                        tempVector = data.data[i]*self.data[i][j]
            return tempVector

    def tr(self,Ma):
        '''[summary]
        
        矩阵迹运算
        
        Arguments:
            Ma {Matrix} -- 需要迹运算的矩阵
        
        Returns:
            number  -- 迹运算结果值
        '''
        if isinstance(Ma,Matrix):
            total = 0
            for i in range(0,Ma.col):
                for j in range(0,Ma.row):
                    if i == j:
                        total = total+Ma.data[i][j]
            return total

    def frobenius(self,A):
        '''[summary]
        
        矩阵范数
        
        Arguments:
            A {Matrix} -- 需要求范数的矩阵
        
        Returns:
            number -- 范数值
        '''
        tempNums = 0
        if isinstance(A,Matrix):
            for i in range(0,A.row):
                for j in range(0,A.col):
                    tempNums = tempNums+ A.data[i][j]**2
            return tempNums**0.5
    
    def tran(self,A):
        """矩阵转置
            A 需要被转置的矩阵
        """
        if isinstance(A,Matrix):
            NMatrix = Matrix(A.col,A.row)
            for i in range(0,A.row):
                for j in range(0,A.col):
                    NMatrix.data[j][i] = A.data[i][j]
            return NMatrix
    def map(self):
        '''[summary]
        
        [description]
        
        Returns:
            list -- 返回数组
        '''
        tempArray=[]
        for x in range(0,self.row):
            for i in range(0,self.col):
                tempArray.append(self.data[x][i])
        return tempArray
    def insertData(self,*args):
        '''[summary]
        
        为矩阵插入数据
        
        Arguments:
            *args {Number} -- 数据
        '''
        n=0
        for i in range(0,self.row):
            for j in range(0,self.col):
                if n >= len(args):
                    break
                self.data[i][j] = args[n]
                n=n+1
        return self
Ma = Matrix(3,7).insertData(2,3,4,5,6,7,8,9,0,10,6,9,17,34,56,7,8,90,12,34,56)
vector = Vector([1,12,34,56,78,90,11,34,56,78,9]).insertData(1,2,34)
print(vector.data)
print(Ma.data)
