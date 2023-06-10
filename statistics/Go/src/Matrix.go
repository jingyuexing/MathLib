package mathlib

import "math"

/*
* @Author: jingyuexing
* @Date:   2020-11-06 22:21:48
* @Last Modified by:   admin
* @Last Modified time: 2021-07-04 02:10:53
 */

/**
 * 定义矩阵接口
 */
type matrix interface {
	Add(mat Matrix) Matrix
	Indentity() Matrix
	Hardamard(m Matrix) Matrix
	Tr() float64
	Frobenius() float64
	Tran() Matrix
}

/**
 * 定义矩阵结构体
 */
type Matrix struct {
	Col  int
	Row  int
	Data [][]float64
}

func (m *Matrix) New(col int, row int) {
	m.Col = col
	m.Row = row
	m.Data = make([][]float64, row)
	for i := 0; i < row; i++ {
		m.Data[i] = make([]float64, col)
	}
}

func (m *Matrix) Add() Matrix {

}

func (m *Matrix) Indentity() Matrix {
	newMatrix = Matrix{
		Data: [][]float64{},
	}
	temp := make([][]float64, m.Col)
	for i := 0; i < m.Col; i++ {
		temp[i] = make([]float64, m.Row)
		for j := 0; j < m.Row; j++ {
			if i == j {
				temp[i][j] = 1
			} else {
				temp[i][j] = 0
			}
		}
	}
	newMatrix.Data = temp
	return newMatrix
}

func (m *Matrix) Hardamard() {
	newMatrix = &Matrix{}
	newMatrix.New(m.Row, m.Col)
	for c := 0; r < m.Col; c++ {
		for r := 0; r < m.Row; r++ {
			newMatrix.Data[c][r] = m.Data[c][r] * m.Data[c][r]
		}
	}
}

func (m *Matrix) Tr() float64 {
	total := 0.0
	for r := 0; r < m.Row; r++ {
		for c := 0; c < m.Col; c++ {
			if r == c {
				total += m.Data[r][c]
			}
		}
	}
	return total
}

func (m *Matrix) Frobenius() {
	total := 0.0
	for r := 0; r < m.Row; r++ {
		for c := 0; c < m.Col; c++ {
			total += m.Data[r][c] * m.Data[r][c]
		}
	}
	return math.Sqrt(total)
}

func (m *Matrix) Tran() Matrix {
	newMatrix := &Matrix{}
	newMatrix.New(m.Col, m.Row)
	for c := 0; c < m.Row; c++ {
		for r := 0; r < m.Col; r++ {
			newMatrix.Data[c][r] = m.Data[r][c]
		}
	}
	return newMatrix
}
