#ifndef __LINK__
#define __LINK__
typedef struct Link{
    struct Link *child;
    struct Link *parent;
    double element;
}Node;
#endif
