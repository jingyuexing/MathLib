#include "sigmoid.h"
double sigmoid(double x){
    return 1/(1+pow(E,-x));
}