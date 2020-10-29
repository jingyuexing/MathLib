/*
* @Author: Jingyuexing
* @Date:   2020-10-25 21:40:25
* @Last Modified by:   Jingyuexing
* @Last Modified time: 2020-10-25 22:20:39
*/

#include "Link.h"

/**
 * 插入节点
 * @param  element 节点存储的元素
 * @return         一个节点指针
 */
Node *insert(Node element){
    Node *newNode;
    return newNode;
}

/**
 * 移除节点
 * @param  node 需要移除的节点
 * @return Node  完成移除后的节点
 */
Node *remove(double item){
    Node *newNode;
    return newNode;
}

/**
 * 查找节点
 * @param  root 根节点
 * @param  item 需要查找的元素
 * @return      返回查找到的节点
 */
Node *find(Node *root,double item){
    Node *currNode;
    currNode = root;
    while (currNode->element!=item) {
        currNode = currNode->child;
    }
    return currNode;
}

Node findPrevious(Node *root,item){
    Node *node = find(root,item);
    while ((!node->child!=0) && node->child->element!=item) {
        node = node->child;
    }
    return *node;
}
