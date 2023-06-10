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
	Mult(data Vector) *Vector
	Add(data Vector) *Vector
	Mod() float64
	Dot(data Vector) float64
	IsVertical(data Vector) bool
	IsHorizontal(data Vector) bool
	Angle(data Vector) float64
}

/**
 * 定义矩阵结构体
 */
type Vector struct {
	Data []int64
}

func shorterLength(a []int64, b []int64) int {
    length := len(a)
    if len(b) < len(a) {
        length = len(b)
    }
    return length
}

func (v *Vector) Mult(data Vector) *Vector {
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

func (v *Vector) Add(data Vector) *Vector {
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

func (v *Vector) Mod() float64 {
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

func (v *Vector) Angle(data Vector) float64 {
	total := 0.0
	if len(data.Data) == len(v.Data) {
		for i := 0; i < len(v.Data); i++ {
			total += float64(v.Data[i] * data.Data[i])
		}
	}
	return total / (v.Mod() * data.Mod())
}

func (v *Vector) IsHorizontal(data Vector) bool {
	return v.Mod()*data.Mod() == 0
}

func (v *Vector) IsVertical(data Vector) bool {
	return (v.Mod() * data.Mod() * v.Angle(data)) == 0
}
