#ifndef __LLINK_H__
#define __LLINK_H__
#include <stdlib.h>
typedef struct LLNode{
    double element;
    struct LLNode *next;
}LLNode;
LLNode *LLinkNewNode(double element);
LLNode *LLinkSearch(LLNode *root,double item);
void LLinkRemove(LLNode *node);
void LLinkInsert(LLNode *node,double element);
#endif
