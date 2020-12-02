/*
* @Author: Jingyuexing
* @Date:   2020-12-02 04:27:58
* @Last Modified by:   Jingyuexing
* @Last Modified time: 2020-12-02 16:32:34
*/
#include "singleLink.h"

linkNode *POSTION;
linkNode *init(double element){
    linkNode *root;
    root = (linkNode *)malloc(sizeof(linkNode));
    root->next =NULL;
    POSTION = root;
    return root;
}

linkNode *find(linkNode *root,double element){
    linkNode *currNode;
    currNode = root->next;
    while (currNode !=NULL  && currNode->element != element) {
        currNode = currNode->next;
    }
    return currNode;
}

/**
 * 自动添加到末位
 * @param  root    [description]
 * @param  element [description]
 * @return         [description]
 */
linkNode *append(linkNode *root,double element){
    return root;
}

/**
 * 判断此链表是否为空链表
 * @param  Node 链表
 * @return      [description]
 */
int empty(linkNode *Node){
    return Node->next == NULL;
}

/**
 * 判断链表节点是否是尾节点
 * @param  list 链表
 * @param  node 节点
 * @return
 */
int isLast(linkNode *node){
    return node->next == NULL;
}

/**
 * 移除节点
 * @param list    链表
 * @param element 删除的元素
 */
void remove(linkNode *list,double element){
    linkNode *tempCell, *node = find(list,element);
    if(!isLast(node)){
        tempCell = node->next;
        node->next = tempCell->next;
        free(tempCell);
    }
}

void insert(linkNode *list, double element,linkNode *postionNode){
    linkNode *tempCell = init(element);
    if(tempCell == NULL){
        printf("Out of space!!");
    }
    tempCell ->next = postionNode->next;
    postionNode->next = tempCell;
}

void deleteList(linkNode *list){
    linkNode *currNode;
    currNode = list->next;
    while (currNode != NULL) {
        free(currNode);
        currNode = currNode->next;
    }
}
