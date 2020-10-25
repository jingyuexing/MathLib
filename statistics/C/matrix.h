#ifndef _MATRIX_H
#define _MATRIX_H
typedef struct T{
    int row;
    int col;
    struct T *this;
    double data[10][10];
    struct T (*Indentity)(struct T *matrix);
    struct T (*Product)(struct T *matrix);
    struct T (*Hardamard)(struct T *data);
    struct T (*Tr)(struct T *matrix);
    struct T (*DownDimensionality)(struct T *matrix);
    double (*Frobenius)(struct T *matrix);
    struct T (*Tran)(struct T *matrix);
    double*(*flat)(struct T *matrix);
    struct T (*pooling)(struct T *matrix,double *arry);
}Matrix;
#endif
