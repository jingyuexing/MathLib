#ifndef _BIN_TREE_
#define _BIN_TREE_
#include <stdlib.h>
struct node;
struct node{
    node *parent; //父级节点
    node *left; //左节点
    node *right; //右节点
    node *root; //根节点
    double element;
};
typedef node treeNode;
treeNode *init(double element);
int empty(treeNode *Node);
treeNode *search();
void *remove();
treeNode *BST(double element);
#endif
