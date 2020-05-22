#ifndef _MATRIX_H
#define _MATRIX_H
#include "matrix.h"
typedef struct MatrixType{
    int row;
    int col;
    double data[][];
    Matrix (*Indentity)(void);
    Matrix (*Product)(Matrix matrix);
    Matrix (*Hardamard)(Matrix data);
    Matrix (*Tr)(Matrix matrix);
    Matrix (*DownDimensionality)(Matrix matrix);
    double (*Frobenius)(Matrix matrix);
    Matrix (*Tran)(Matrix matrix);
    double*(*flat)(Matrix matrix)
}Matrix;
#endif