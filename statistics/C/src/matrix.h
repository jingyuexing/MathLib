#ifndef _MATRIX_H
#define _MATRIX_H
typedef struct T{
    int row;
    int col;
    double data[10][10];
    struct T *self;
    static struct T (*Indentity)(struct T *matrix);
    static struct T (*Product)(struct T *matrix);
    static struct T (*Hardamard)(struct T *data);
    static struct T (*Tr)(struct T *matrix);
    static struct T (*DownDimensionality)(struct T *matrix);
    static double (*Frobenius)(struct T *matrix);
    static struct T (*Tran)(struct T *matrix);
    static double*(*flat)(struct T *matrix);
    static struct T (*pooling)(struct T *matrix,double *arry);
}Matrix;
#endif
