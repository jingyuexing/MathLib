/*
* @Author: Jingyuexing
* @Date:   2020-10-25 21:40:25
* @Last Modified by:   jingyuexing
*/

#include "Link.h"


/**
 * 初始化元素
 * @param  element 元素
 * @return         新的节点
 * @privie
 */
Node *init(double element){
    Node *newNode = (Node *)malloc(sizeof(Node));
    (*newNode).child = NULL;
    (*newNode).parent = NULL;
    (*newNode).element = element;
    return newNode;
}

/**
 * 插入节点
 * @param  root    根节点
 * @param  item    根节点中的元素
 * @param  element 元素
 * @return         根节点
 */
Node *insert(Node *root,double item,double element){
    Node *newNode = init(element);
    Node *findOne = find(root,item);
    newNode->parent = findOne;
    findOne->child = newNode;
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

/**
 * [findPrevious description]
 * @param  root [description]
 * @param  item [description]
 * @return      [description]
 */
Node *findPrevious(Node *root,double item){
    Node *node = find(root,item);
    while (!(node->child==0) && node->child->element!=item) {
        node = node->child;
    }
    return node;
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
