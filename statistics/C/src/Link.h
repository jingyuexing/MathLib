#ifndef __LINK__
#define __LINK__
#include <stdlib.h>
typedef struct Link{
    struct Link *child;
    struct Link *parent;
    struct Link *postion;
    double element;
}Node;
extern Node *init(double element);
extern Node *insert(Node *root,double item,Node *element);
extern Node *remove(Node *root,double item);
extern Node *append(Node *root,Node *element);
extern Node *find(Node *root,double item);
#endif
