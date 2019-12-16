#ifndef _MATRIX_H
#define _MATRIX_H
typedef struct{
    int col;
    int row;
    double matrix;
    Matrix __THIS__;
    double (*indentity)(Matrix *matrix);//
    double (*product)(Matrix *other_matrix);
    double (*hardamard)();
    double (*frobenius)();
    double (*tran)();
    double (*map)();
    double (*insertData)(double);
}Matrix;
#endif