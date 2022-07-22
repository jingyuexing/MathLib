package com.mathlib;

import java.util.ArrayList;
import java.util.List;

class Matrix<T>{
    private List<List<T>> data;
    public int row;
    public int col;
    Matrix(int row,int col){
        this.col = col;
        this.row = row;
        this.data = new ArrayList<>(row);
        for(int i = 0; i< this.col;i++){
            List<T> columnItem = new ArrayList<>(this.row);
            this.data.set(i, columnItem);
        }
    }
    Matrix(int row){
        this.row = row;
        this.col = row;
    }
    Matrix(List<List<T>> data){
    }
    Matrix<T> indentity(){
        Matrix<T> tempMatrix = new Matrix<T>(this.col,this.row);
        
        return tempMatrix;
    }
    Matrix<T> product(Matrix<T> data){
        Matrix<T> tempMatrix = new Matrix<T>(this.row, data.col);

        return tempMatrix;
    }
    Matrix<T> hardamard(Matrix<T> data){
        Matrix<T> tempMatrix = new Matrix<T>(data.row,data.col);

        return tempMatrix;
    }
    T tr(Matrix<T> matrix){
        
        return null;
    }
    void downDimesionality(Matrix<T> matrix){
    }
    T frobenius(Matrix<T> A){
        double num = 0.0;
        return null;
    }
    /**
     * 矩阵转置
     * @return  Matrix      返回转置后的矩阵
     */
    Matrix<T> tran(){
        Matrix<T> NMatrix = new Matrix<T>(this.col,this.row);
        return NMatrix;
    }
    void flat(){

    }
}
