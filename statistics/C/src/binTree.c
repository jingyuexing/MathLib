/*
* @Author: Admin
* @Date:   2021-05-11 05:39:14
* @Last Modified by:   Admin
* @Last Modified time: 2021-05-11 05:58:22
*/
#include "../include/binTree.h"
#include <stdlib.h>

binTreeNode *initNode(){
    binTreeNode *newNode = (binTreeNode *)malloc(sizeof(binTreeNode));
    newNode->left = NULL;
    newNode->right = NULL;
    newNode->parent = NULL;
    newNode->element = 0.000;
    return newNode;
}
binTreeNode *find(BinTree *tree,double item){
    return initNode();
}
void append(BinTree *tree,double item){
}
void del(double item){

}
