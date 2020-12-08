#ifndef __LINK__
#define __LINK__
#include <stdlib.h>
typedef struct Link{
    struct Link *child;
    struct Link *parent;
    int index;
    double element;
}Node;
Node *find(Node *root,double item);
Node *init(double element);
Node *insert(Node *root,double item);
Node last(Node *root);
#endif
