/*
* @Author: Jingyuexing
* @Date:   2020-10-25 21:40:25
* @Last Modified by:   Jingyuexing
*/

#include "Link.h"


Node *init(double element){
    Node *newNode = (Node *)malloc(sizeof(Node));
    (*newNode).child = NULL;
    (*newNode).parent = NULL;
    (*newNode).element = element;
    return newNode;
}

/**
 * 初始化节点
 * @param  element 元素
 * @return         节点
 */
Node *insert(Node *root,double item,double element){
    Node *newNode = init(element);
    Node *findOne = find(root,item);
    newNode->parent = findOne;
    findOne->child = newNode;
    return root;
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
    Node *findOne = find(root,item);
    findOne->parent = findOne->child;
    findOne->child->parent = findOne->parent;
    free(findOne);
    return root;
}

/**
 * 查找节点
 * @param  root 根节点
 * @param  item 需要查找的元素
 * @return      返回查找到的节点
 */
Node *find(Node *root,double item){
    Node *currNode =NULL;
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
