/*
* @Author: Jingyuexing
* @Date:   2020-10-25 21:40:25
* @Last Modified by:   Jingyuexing
* @Last Modified time: 2020-12-02 04:22:44
*/

#include "link.h"

/**
 * 初始化节点,生成一个空节点
 * @return [description]
 */
Node *init(double element){
    Node *temp = (Node *)malloc(sizeof(Node));
    temp->parent = NULL;  // 初始化父节点为空
    temp->child = NULL;  //初始化子节点为空
    temp->postion = temp; //定位到自身
    temp->element = element; //增加节点元素
    return temp;
}

/**
 * 查找节点
 * @param  item 查找的元素
 * @return      [description]
 */
Node *find(Node *root,double item){
    /**
     * 在这里之所以不直接在root链表上查找是因为不能对整体的链表进行修改
     * 保证原链表不会更改
     * 我们要找的仅仅是一个节点，而非对整体的链表进行修改
     */
    Node *currNode;
    currNode = root;
    while (currNode->element != item) {
        currNode = currNode->child;
    }
    return currNode;
}


/**
 * 删除节点
 * @param  root 根节点
 * @param  item 节点内容
 * @return      根节点
 */
Node *remove(Node *root,double item){
    Node *findNode = find(root,item);
    findNode->parent->child = findNode->child;
    free(findNode);
    return root;
}
/**
 * 插入
 * @param  root    根节点
 * @param  item    插入的目标节点
 * @param  element 需要插入的节点
 * @return         [description]
 */
Node *insert(Node *root,double item,Node *element){
    Node *currNode = find(root, item);
    element->child = currNode->child;
    currNode->child = element;
    element->parent = currNode;
    return root;
}

/**
 * 增加节点
 * @param  root    根节点
 * @param  element 需要添加的节点
 * @return Node    根节点
 */
Node *append(Node *root,Node *element){
    root->postion->child = element;
    element->parent = root->postion;
    root->postion = element;
    return root;
}

