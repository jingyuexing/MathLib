# -*- coding: utf-8 -*-
# @Author: Admin
# @Date:   2020-01-10 00:58:05
# @Last Modified by:   Jingyuexing
# @Last Modified time: 2020-01-11 14:21:04
class Rank(object):
    """排序算法"""
    def insert(self,data=[]):
        if isinstance(data,list):
            for i in range(2,len(data)):
                key = data[i]
                j=i-1
                while i>0 and data[j]>key:
                    data[j+1]=data[j]
                    j=j-1
                    data[j+1]=key
        return data
    def bubbleSort(self,data=[]):
        for i in range(1,len(data)):
            for j in range(0,len(data)-i):
                if data[j]>data[j+1]:
                    data[j],data[j+1] = data[j+1],data[j]
        return data
    def quickSort(self,array=[],begin=0,end=0):
        i,j,key= begin,end,array[begin]
        while i<j:
            while i<j and array[j]>=key: j=j-1
            if i < j:
                array[i] = array[j]
                i=i-1
            while i<j and array[i]<key:i=i+1
            if i<j:
                array[j]=array[i]
                j=j-1
        array[i]=key
        self.quickSort(array,begin,i-1)
        self.quickSort(array,i+1,end)
        return array
if __name__ == "__main__":
    pass