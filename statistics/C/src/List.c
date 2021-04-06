/*
* @Author: Jingyuexing
* @Date:   2020-12-09 19:19:21
* @Last Modified by:   Jingyuexing
* @Last Modified time: 2020-12-09 20:21:46
*/
#include "List.h"

ListNode *init(double element){
    ListNode *newNode = (ListNode *)malloc(sizeof(ListNode));
    newNode->next = NULL;
    newNode->element = element;
    return newNode;
}

void remove(){

}
void insert(List l,int index,double element){

}
void append(List l,double element){
    l.postion->next = init(element);
    l.postion = l.postion->next;
};
int isEmpty(List l){
    return l.head->next == NULL;
}

/**
 * 创建一个List
 * @param  element [description]
 * @return         [description]
 */
List newList(double element){
    auto List *newList = (List *)malloc(sizeof(List));
    (*newList).head = init(0x000);
    (*newList).head->next = init(element);
    (*newList).self = &newList;
    (*newList).head = NULL;
    return *newList;
}
void deleteList(List l){
    free(&l);
}
ListNode *indexOf(List l,int index){
    ListNode *target = NULL;
    target = l.head->next;
    while (target!=NULL && target->index != index) {
        target = target->next;
    }
    return target;
}

int main(int argc, char const *argv[])
{
    List myList;
    myList.head = init(0x000);
    ListNode *currNode;
    currNode = myList.head->next;
    int i =0;
    while (currNode != NULL) {
        currNode->index = i;
        i++;
    }
    return 0;
}
