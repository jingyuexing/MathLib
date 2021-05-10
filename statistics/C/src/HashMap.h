#ifndef __HASHMAP_H__
#include <stdlib.h>
typedef struct {
    double *key;
}HashMap;
typedef int *key;
HashMap *newHashMap();
int hashCode();
void setKey();
void putValue();
void getValue(key);
int nodeEquals();
HashMap *extenArray();
#endif
