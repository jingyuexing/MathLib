#ifndef __HASHMAP_H__
#include <stdlib.h>
typedef struct Map{
    void *key;
    void *value;
    long hashValue;
    struct Node *next;
    struct Node *left;
    struct Node *right;
}MapNode;
typedef int *key;
MapNode *newHashMap(void *key,void *value);
void setKey();
void putValue();
void getValue(key);
int nodeEquals();
MapNode *extenArray();
#endif
