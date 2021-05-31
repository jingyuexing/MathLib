#ifndef __MATHLIB_BRTREE_H__
#define __MATHLIB_BRTREE_H__
typedef enum NodeType{
    RED,
    BLACK
}NodeType;
typedef struct Node{
    NodeType type;
    struct Node *Red;
    struct Node *Black;
    double element;
}Node;
void append(Node *tree, double element);
#endif
