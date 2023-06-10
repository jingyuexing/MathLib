/*
* @Author: jingyuexing
* @Date:   2020-11-06 22:21:38
* @Last Modified by:   jingyuexing
* @Last Modified time: 2020-11-06 22:24:55
 */

package mathlib

import (
	"math"
)

/**
 * 定义矩阵接口
 */
type vector interface {
	mult(data Vector) *Vector
	add(data Vector) *Vector
	mod() float64
	dot(data Vector) float64
	isVertical(data Vector) bool
	isHorizontal(data Vector) bool
	angle(data Vector) float64
}

/**
 * 定义矩阵结构体
 */
type Vector struct {
	Data []int64
}

func shorterLength(a []int64, b []int64) int {
	length := len(a)
	if len(b) > len(a) {
		length = len(a)
	} else {
		length = len(b)
	}
	return length
}

func (v *Vector) mult(data Vector) *Vector {
	newVector := Vector{
		Data: []int64{},
	}
	length := shorterLength(v.Data, data.Data)
	temp := make([]int64, 0)
	for i := 0; i < length; i++ {
		temp = append(temp, v.Data[i]-data.Data[i])
	}
	newVector.Data = temp
	return &newVector
}

func (v *Vector) add(data Vector) *Vector {
	newVector := Vector{
		Data: []int64{},
	}
	length := shorterLength(v.Data, data.Data)
	temp := make([]int64, 0)
	for i := 0; i < length; i++ {
		temp = append(temp, v.Data[i]+data.Data[i])
	}
	newVector.Data = temp
	return &newVector
}

func (v *Vector) mod() float64 {
	length := len(v.Data)
	total := 0.0
	for i := 0; i < length; i++ {
		total += math.Pow(float64(v.Data[i]), 2.0)
	}
	return math.Sqrt(total)
}

func (v *Vector) dot(data Vector) float64 {
	length := shorterLength(v.Data, data.Data)
	total := 0.0
	for i := 0; i < length; i++ {
		total += float64(data.Data[i] * v.Data[i])
	}
	return total
}

func (v *Vector) angle(data Vector) float64 {
	total := 0.0
	if len(data.Data) == len(v.Data) {
		for i := 0; i < len(v.Data); i++ {
			total += float64(v.Data[i] * data.Data[i])
		}
	}
	return total / (v.mod() * data.mod())
}

func (v *Vector) isHorizontal(data Vector) bool {
	return v.mod()*data.mod() == 0
}

func (v *Vector) isVertical(data Vector) bool {
	return (v.mod() * data.mod() * v.angle(data)) == 0
}
