#ifndef __QUEUE_H__
#define __QUEUE_H__
#include <stdlib.h>
typedef struct _s{
    struct _s *child;
    int isRoot;
    int index;
    double element;
}Node;
Node *init(double element,int isRoot);
Node *insert(Node *root,double item,double element);
Node *remove(Node *root,double item);
Node *insert(Node *root,double element);
#endif
