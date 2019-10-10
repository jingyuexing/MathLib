#include <math.h>
#define E 2.718281828459045
double sigmoid(double x){
    return 1/(1+pow(E,-x));
}