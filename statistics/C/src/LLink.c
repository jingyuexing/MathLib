/*
* @Author: Admin
* @Date:   2021-04-06 22:29:32
* @Last Modified by:   Jingyuexing
* @Last Modified time: 2021-08-08 17:53:30
*/

/**
 * 此链表为单向链表
 */


#include "LLink.h"
#include <stdlib.h>

#ifndef _L_FUN
#define _L_FUN
LLNode *LLinkNewNode(double element);
LLNode *LLinkSearch(Link *self,double item);
void LLinkRemove(Link *self,double item);
void LLinkInsert(Link *self,double item,double element);
#endif

LLNode *LLinkNewNode(double element){
    LLNode *newNode = (LLNode *)malloc(sizeof(LLNode));
    newNode->element= element;
    newNode->next = NULL;
    return newNode;
}

Link *New(){
    Link *newLink = (Link*)malloc(sizeof(Link));
    newLink->pos = NULL;
    newLink->head = NULL;
    newLink->LLinkInsert = LLinkInsert;
    newLink->LLinkNewNode = LLinkNewNode;
    newLink->LLinkRemove = LLinkRemove;
    newLink->LLinkSearch = LLinkSearch;
    newLink->New = New;
    return newLink;
}

// 面对对象设计


void append(Link *self,double item){
    LLNode *newNode = self->LLinkNewNode(item);
    if(self->head != NULL){
        self->pos->next = newNode;
    }else{
        self->head = newNode;
    }
    self->pos = newNode;
}

/**
 * 单向链表的查找
 * @param  root 根节点
 * @param  item 需要查询的元素项
 * @return      查询到的节点
 */
LLNode *LLinkSearch(Link *self,double item){
    LLNode *currNode = self->head;
    while (currNode->element != item) {
        currNode = currNode->next;
    }
    return currNode;
}
/**
 * 删除单向链表当中的节点
 * @param node 需要删除的节点
 */
void LLinkRemove(Link *self,double item){
    LLNode *findOne = self->LLinkSearch(self,item);
    LLNode *posNext = findOne->next;
    findOne->element = posNext->element;
    findOne->next = findOne->next->next;
    free(posNext);
}

/**
 * 向单向链表当中的制定位置插入一个元素
 * @param node    节点
 * @param element 元素
 */
void LLinkInsert(Link *self,double item,double element){
    LLNode findOne = *(self->LLinkSearch(self,item));
    LLNode newNode = *(self->LLinkNewNode(element));
    newNode.next = findOne.next->next;
    findOne.next = &newNode;
}
