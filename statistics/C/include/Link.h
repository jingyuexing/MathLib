#ifndef __LINK__
#define __LINK__
#include <stdlib.h>
typedef struct Link{
    struct Link *child;
    struct Link *parent;
    int index;
    double element;
}Node;

Node *init(double element);
Node *insert(Node *root,double item,double element);
Node *remove(Node *root,double item);
Node *find(Node *root,double item);
#endif
