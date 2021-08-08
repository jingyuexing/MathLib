#ifndef __LLINK_H__
#define __LLINK_H__
#include <stdlib.h>
typedef struct LLNode{
    double element;
    struct LLNode *next;
}LLNode;
typedef struct Link{
    LLNode *head;
    LLNode *pos;
    struct Link *(*New)();
    struct LLNode *(*LLinkNewNode)(double element);
    void (*LLinkRemove)(struct Link *self,double item);
    void (*LLinkInsert)(LLNode *node,double item,double element);
    struct LLNode *(*LLinkSearch)(struct Link *self,double item);
}Link;
#endif
