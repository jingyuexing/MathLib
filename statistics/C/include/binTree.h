#ifndef __MATHLIB_BINTREE_H__
#define __MATHLIB_BINTREE_H__
typedef struct binTreeNode{
    struct binTreeNode *left;
    struct binTreeNode *right;
    struct binTreeNode *parent;
    double element;
}binTreeNode;

typedef struct BinTree{
    binTreeNode *root;
    int depth;
}BinTree;

binTreeNode *find(BinTree *tree, double item);
void del(double item);
void update(binTreeNode *node,double value);
BinTree *craete();
void append(BinTree *tree,double element);
#endif
