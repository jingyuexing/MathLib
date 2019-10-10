#include "sigmoid.h"
/**
 * [sigmoid description]
 * @param  x 输入数
 * @return   0-1之间的数
 */
double sigmoid(double x){
    return 1/(1+pow(E,-x));
}