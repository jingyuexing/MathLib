/*
* @Author: Jingyuexing
* @Date:   2020-10-25 21:40:25
* @Last Modified by:   Jingyuexing
* @Last Modified time: 2020-12-08 15:44:46
*/

#include "Link.h"


/**
 * 初始化节点
 * @param  element 元素
 * @return         节点
 */
Node *init(double element){
    Node *newNode = (Node *)malloc(sizeof(Node));
    newNode->child = NULL;
    newNode->parent =NULL;
    newNode->index = 0;
    newNode->element = element;
    return newNode;
}



/**
 * 插入节点
 * @param  root    根节点
 * @param  element 元素
 * @return         [description]
 */
Node *insert(Node *root,double element){
    Node *newNode = init(element);
    Node *currNode = root->child;
    while (currNode->child !=NULL) {
        currNode = currNode->child;
    }
    (*newNode).index++;
    currNode->child = newNode;
    newNode->parent = currNode;
    return root;
}


/**
 * 移除节点
 * @param  root 根节点
 * @param  item 元素项
 * @return      [description]
 */
Node *remove(Node *root,double item){
    Node *currNode = find(root,item);
    currNode->parent->child = currNode->child;
    free(currNode);
    return root;
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

Node findPrevious(Node *root,double item){
    Node *node = find(root,item);
    while ((!node->child!=0) && node->child->element!=item) {
        node = node->child;
    }
    return *node;
}

/**
 * 最后一个节点
 * @param  root 根节点
 * @return      node
 */
Node last(Node *root){
    Node *currNode;
    currNode = root->child;
    while (currNode != NULL) {
        currNode = currNode->child;
    }
    return *currNode;
}
