/*
* @Author: Jingyuexing
* @Date:   2020-12-02 21:07:17
* @Last Modified by:   Admin
* @Last Modified time: 2021-04-06 23:10:55
*/

#include "queue.h"

/**
 * 初始化节点
 * @param  element 元素
 * @param  isRoot  是否是根节点(0 否   1 是)
 * @return         [description]
 */
Node *init(double element,int isRoot){
    Node *newNode = (Node *)malloc(sizeof(Node));
    newNode->element = element;
    newNode->isRoot = isRoot;
    newNode->child = newNode;
    return newNode;
}

/**
 * 查找元素
 * @param  node 链表
 * @param  item 查找项
 * @return      node
 */
Node *find(Node *node,double item){
    while (node->element != item) {
        node = node->child;
    }
    return node;
}

/**
 * 插入节点
 * @param  root    根节点
 * @param  item    选项
 * @param  element 需要插入的元素
 * @return         root
 */
Node *insert(Node *root,double item,double element){
    Node *findOne = find(root,item);
    Node *newNode = init(element,0);
    newNode->child = findOne->child->child;
    findOne->child = newNode;
    return root;
}

/**
 * 移除节点
 * @param  root [description]
 * @param  item [description]
 * @return      [description]
 */
Node *remove(Node *root,double index){
    Node *findOne = find(root,index);
    return findOne;
}

