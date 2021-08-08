/*
* @Author: Admin
* @Date:   2021-03-28 00:25:58
* @Last Modified by:   admin
* @Last Modified time: 2021-06-21 16:32:24
*/
#include "../include/HashMap.h"
#include <inttypes.h>
HashNode *newHashNode(void *key,void *value){
    HashNode *map = (HashNode *)malloc(sizeof(HashNode));
    map->next = NULL;
    map->right = NULL;
    map->left = NULL;
    return map;
}

int router(HashNode hashNode,void *table){
    return (sizeof(table) -1)& hashNode.hashValue;
}

unsigned int hashCode(const char *string){
    unsigned int full = 0xffffffff;
    int i = 0;
    while (string[i] != '\0') {
        uint8_t byte = string[i];
        full = full ^ byte;
        for (uint8_t j = 8; j > 0; --j)
        {
            full = (full >> 1) ^ (0xEDB88320 & (-(full & 1)));
        }

        i++;
    }
    return full ^ 0xffffffff;
}
int hash(HashNode node){
    unsigned int h;
    return (node.key == NULL)?0:(h = hashCode(node.key))^(h>>16);
}

int tableSize(int length){
    int n = length;
    n |= n>>1;
    n |= n>>2;
    n |= n>>4;
    n |= n>>8;
    n |= n>>16;
    return n;
}
