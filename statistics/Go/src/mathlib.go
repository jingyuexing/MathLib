/*
* @Author: jingyuexing
* @Date:   2020-11-06 19:20:32
* @Last Modified by:   Admin
* @Last Modified time: 2021-05-06 23:59:56
*/

package mathlib

import (
    "unsafe"
)

/**
 * @param {float64} input
 * @return {uintptr} length
 */
func length(input []float64)uintptr{
    return unsafe.Sizeof(input)/unsafe.Sizeof(input[0])
}

func mean(input []float64)float64 {
    var total = 0.0
    for i := 0; i < length(input); i++ {
        total += input[i];
    }
    return total/length(input)
}

func sum(num []float64)float64 {
    total := 0.0
    for i := 0; i < length(num); i++ {
        total += num[i]
    }
    return total
}


func gcd(p int,q int)int {
    if q == 0 || q == nil{
        return p
    }
    var r = p % q
    return gcd(q,r)
}

/**
 * @param {[]float64} value
 * @return {[]float64} softmax
 */
func softmax(value []float64)[]float64 {
}
func covariance()
