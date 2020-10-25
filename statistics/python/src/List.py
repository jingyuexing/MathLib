# -*- coding: utf-8 -*-
# @Author: Admin
# @Date:   2020-09-18 01:33:20
# @Last Modified by:   Admin
# @Last Modified time: 2020-09-18 02:08:01


class Node:
    parent = None
    child = None
    element = None
    """docstring for Node"""

    def __init__(self, item):
        self.element = item


class List:
    """docstring for List"""
    head = None
    length = 0
    posion = None
    def __init__(self):
        self.length = 0
        self.posion = self.head = Node("root")

    def find(self, item):
        """查找节点

        [description]

        Arguments:
            item {dynamic} -- 需要查找的元素存储的内容

        Returns:
            Node -- 返回查找到的节点
        """
        currNode = self.head
        while(currNode.element != item):
            currNode = currNode.child
        return currNode

    def findPrevious(self, item):
        """[summary]

        [description]

        Arguments:
            item {dynamic} -- [description]

        Returns:
            dynamic -- [description]
        """
        node = self.find(item)
        while(not(node.child != None) and (node.child.element != item)):
            node = node.child
        return self

    def insert(self, ele, item=None):
        """在列表中插入元素

        [description]

        Arguments:
            ele {dynamic} -- 需要插入的元素
            item {dynamic} -- 目标节点 在目标节点的后面插入值为ele的新节点

        Returns:
            List -- 列表
        """
        if(item==None):
            currNode = self.posion
        else:
            currNode = self.find(item)
        newNode = Node(ele)
        newNode.parent = currNode   #新的节点其父节点是
        self.posion = currNode.child = newNode
        self.length = self.length+1
        return self

    def remove(self, item):
        """移除节点

        [description]

        Arguments:
            item {dynamic} -- 需要移除的节点

        Returns:
            List -- 完成操作后的列表
        """
        prevNode = self.findPrevious(item)
        if(not (prevNode.child == None)):
            prevNode.child = prevNode.child.child
            self.length = self.length -1
        return self


if __name__ == '__main__':
    l = List()
    l.insert("Hello word").insert("Fuck").insert("Nice")
    print(l)
