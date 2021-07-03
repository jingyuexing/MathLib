/*
* @Author: Admin
* @Date:   2021-04-06 22:29:32
* @Last Modified by:   admin
* @Last Modified time: 2021-06-05 17:15:58
*/

/**
 * 此链表为单向链表
 */


#include "LLink.h"

LLNode *LLinkNewNode(double element){
    LLNode *newNode = malloc(sizeof(LLNode));
    newNode->element= element;
    newNode->next = NULL;
    return newNode;
}

/**
 * 单向链表的查找
 * @param  root 根节点
 * @param  item 需要查询的元素项
 * @return      查询到的节点
 */
LLNode *LLinkSearch(LLNode *root,double item){
    LLNode *currNode = root;
    while (currNode->element != item) {
        currNode = currNode->next;
    }
    return currNode;
}
/**
 * 删除单向链表当中的节点
 * @param node 需要删除的节点
 */
void LLinkRemove(LLNode *node){
    LLNode *pos;
    node->element = node->next->element;
    pos = node->next;
    node->next = node->next->next;
    free(pos);
}

/**
 * 向单向链表当中的制定位置插入一个元素
 * @param node    节点
 * @param element 元素
 */
void LLinkInsert(LLNode *node,double element){
    LLNode newNode = *(LLinkNewNode(element));
    newNode.next = node->next;
    node->next = &newNode;
}
/**
 * [LLinkConver description]
 * @param root [description]
 */
void LLinkConver(LLNode *root){
    LLNode *currNode = root;
    while (currNode != NULL) {
    }
}
