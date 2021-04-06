#ifndef __LIST_H__
#define __LIST_H__
#include <stdlib.h>
typedef struct Node{
    struct Node *next;
    int index;
    double element;
}ListNode;
struct list{
    struct list *self;
    ListNode *postion;
    ListNode *head;
    struct list *(*init)(double element);
    ListNode *(*indexOf)(int index);
    // int (* )();
    void (*insert)();
    void (*remove)(int index);
    ListNode *(*find)(double item);
};
typedef struct list List;
/**
 * 删除列表节点
 * @param l     需要操作的列表
 * @param index 下标
 */
void remove(List l,int index);
/**
 * 向列表当中插入元素
 * @param l       目标列表
 * @param index   下表
 * @param element 元素
 */
void insert(List l,int index,double element);

/**
 * 列表是否为空
 * @param  l 需要判断的列表
 * @return   0 or 1
 */
int isEmpty(List l);
/**
 * 删除列表
 * @param l 目标列表
 */
void deleteList(List l);
/**
 * 查找列表当中下表为index的节点
 * @param  l     列表
 * @param  index 下标
 * @return       节点
 */
ListNode *indexOf(List l,int index);
/**
 * 遍历查找
 * @param  item 元素内容
 * @return      节点
 */
ListNode *find(double item);
/**
 * 初始化
 * @param  element 元素
 * @return         初始化后的节点
 */
ListNode *init(double element);
/**
 * 添加元素,默认添加到末尾
 * @param l       目标列表
 * @param element 元素
 */
void append(List l,double element);
#endif
