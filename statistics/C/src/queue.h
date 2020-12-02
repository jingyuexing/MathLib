#ifndef __QUEUE_H__
#define __QUEUE_H__
#include <stdlib.h>
typedef struct{
    double queue[100];
    double *front,*rear;
    int length;
}queue;
void push(queue q,double element);
void shift(queue q,double element);
queue *init(double element);
#endif
