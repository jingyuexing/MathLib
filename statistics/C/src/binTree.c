/*
* @Author: Jingyuexing
* @Date:   2020-12-02 04:23:42
* @Last Modified by:   Jingyuexing
* @Last Modified time: 2020-12-02 17:19:33
*/

#include "binTree.h"

treeNode *init(double element){
    treeNode *newNode = (treeNode *)malloc(sizeof(treeNode));
    newNode ->left =NULL;
    newNode ->right = NULL;
    newNode ->parent = NULL;
    newNode ->element = element;
    newNode ->root = newNode;
    return newNode;
}

treeNode *search(treeNode* tree,double item){
    treeNode *currNode;
    return currNode;
}
treeNode *BST(double element){
    treeNode *tempCell = init(0.0);
}

void *remove(treeNode *tree,double element){
    treeNode *posNode = search(tree,element);
    posNode->parent->left = posNode->left;
    posNode->parent->right = posNode->right;
    posNode->left->parent = posNode->right->parent = posNode->parent;
    free(posNode);
}
