# -*- coding: utf-8 -*-
# @Author: Jingyuexing
# @Date:   2019-07-12 00:24:07
# @Last Modified by:   Jingyuexing
# @Last Modified time: 2020-01-12 17:20:47


class vector:
    """docstring for Vector
    向量
    """
    
    def __init__(self, data=[]):
        if isinstance(data, list):
            self.data = data
        else:
            print("Error:data type is not list")

    def add(self, data):
        '''向量相加

        [description]

        Arguments:
            data {Vector} -- 相加的向量

        Returns:
            list -- 向量和值
        '''
        tempAry = []
        if isinstance(data, Vector) and len(data.data) == len(self.data):
            for i in range(0, len(data.data)):
                tempAry.append(self.data[i] + data.data[i])
        return tempAry

    def mult(self, data):
        """[对向量两个向量进行求差]

        [description]

        Arguments:
            data {[Vector]} -- [相减向量]

        Returns:
            [list] -- [向量和结果值]
        """
        tempAry = []
        if isinstance(data, Vector) and len(data.data) == len(self.data):
            for i in range(0, len(data.data)):
                tempAry.append(data.data[i] - self.data[i])
            return tempAry
        else:
            print("Error:参数必须是向量实例或两个向量长度需相同")

    def mod(self, data):
        '''向量求模

        [description]

        Arguments:
            data {Vecotr} -- 向量

        Returns:
            number -- 模值
        '''
        total = 0
        if isinstance(data, Vector):
            for i in range(0, len(data.data)):
                total = total + data.data[i]**2
            return total**(1 / 2)
        else:
            return TypeError(data + "is not Vector")

    def product(self, data):
        '''向量乘积

        >>>Vector_1 = Vector([2,3,4,5,6,7])
        >>>Vector_2 = Vector([12,5,78,2,12])
        >>>Vector_2.product(Vector_1) return 748:number
        >>>Vector_2.product(8)  return [96, 40, 624, 16, 96, 360]
        Arguments:
            data {number | list | Vector} -- 求点积或者向量乘积

        Returns:
            number|list -- 向量乘积值
        '''
        total = 0
        if isinstance(data, int) or isinstance(data, float):
            for i in range(0, len(self.data)):
                self.data[i] = self.data[i] * data
        if isinstance(data, list):
            if len(self.data) == data.__len__():
                for i in range(0, len(data)):
                    total = total + self.data[i] * data[i]
                return total
            else:
                return TypeError("参数长度不一致!")
        if isinstance(data, Vector):
            return self.product(data.data)

    def isVertical(self, data):
        '''判断是否和另外的向量垂直,垂直返回真,不垂直返回假



        Arguments:
            data { Vector|List<number> } --  和自身比较的向量

        Returns:
            bool --   是否垂直
        '''
        if isinstance(data, list) and self.product(data) == 0:
            return True
        if isinstance(data, Vector):
            self.isVertical(data.data)
        return False

    def map(self):
        return self.data

    def angle(self, data):
        '''向量夹角
        Arguments:
            data {  Vector | list<number>} --   向量或者向量数据

        Returns:
            number -- 结果值
        '''
        if isinstance(data, list):
            total = 0
            if len(data) == len(self.data):
                for i in range(0, len(data)):
                    total = total + self.data[i] * data[i]
            return total / self.mod(data) * self.mod(self.data)
        if isinstance(data, Vector):
            self.angle(data.data)

    def insertData(self, *args):
        for i in args:
            self.data.append(i)
        return self
