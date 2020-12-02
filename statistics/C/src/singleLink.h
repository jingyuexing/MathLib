#ifndef __SINGLE_LINK__
#define __SINGLE_LINK__
#include <stdlib.h>
#include <stdio.h>
typedef struct{
    struct singleNode *next;
    double element;
}linkNode;
/**
 * 初始化一个空的节点
 * @param  element 元素
 * @return         [description]
 */
extern linkNode *init(double element);
/**
 * 在链表当中选择指定元素的节点
 * @param  root    根节点
 * @param  element 元素
 * @return         [description]
 */
extern linkNode *find(linkNode *root,double element);
/**
 * 链表是否是为空
 * @param  Node 链表
 * @return      [description]
 */
extern int empty(linkNode *list);
/**
 * 移除节点
 * @param list    [description]
 * @param element [description]
 */
extern void remove(linkNode *list,double element);
/**
 * 判断链表是否是最后一个
 * @param  node [description]
 * @return      [description]
 */
extern int isLast(linkNode *node);
/**
 * 删除链表
 * @param list 需要被删除的链表
 */
extern void deleteList(linkNode *list);
/**
 * 在指定节点后插入节点
 * @param list        链表
 * @param element     链表元素
 * @param postionNode 定位节点
 */
extern void insert(linkNode *list, double element,linkNode *postionNode);
/**
 * 添加节点
 * @param  root    [description]
 * @param  element [description]
 * @return         [description]
 */
extern linkNode *append(linkNode *root,double element);
#endif
