/*
* @Author: Jingyuexing
* @Date:   2020-12-02 16:33:45
* @Last Modified by:   Jingyuexing
* @Last Modified time: 2020-12-02 17:00:55
*/
#include "queue.h"


queue *init(double element){
    queue *temp = malloc(sizeof(queue));
    return temp;
}
void push(queue q, double element){
    q.queue[q.length++] = element;
    q.rear = &q.queue[q.length];
}

/**
 * 查找链表当中的元素
 * @param  q       链表
 * @param  element 元素
 * @return index   下标
 */
int find(queue q,double element){
    double *node;
    int i = 0;
    while (q.queue[i] != element) {
        node = &q.queue[i];
        i++;
    }
    return i;
}

void shift(queue q, double element){

}
