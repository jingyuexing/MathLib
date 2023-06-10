/*
* @Author: jingyuexing
* @Date:   2020-11-06 19:20:32
* @Last Modified by:   Jingyuexing
* @Last Modified time: 2022-11-14 22:08:20
 */

package mathlib

/**
 * @param {float64} input
 * @return {uintptr} length
 */
func length(input []float64) int {
	return len(input)
}

func mean(input []float64) float64 {
	var total = 0.0
	for i := 0; i < len(input); i++ {
		total += input[i]
	}
	// len = length(input)
	return total / float64(len(input))
}

func sum(num []float64) float64 {
	total := 0.0
	for i := 0; i < len(num); i++ {
		total += num[i]
	}
	return total
}

func gcd(p int, q int) int {
	if q == 0 || q == 0 {
		return p
	}
	var r = p % q
	return gcd(q, r)
}

/**
 * [isOdd description]
 * @return {Boolean} [description]
 */
func isEven(p int) bool {
	return p&1 == 1
}

/**
 * return {Boolean}
 */
func isOdd(p int) bool {
	return !isEven(p)
}

/**
 * @param {[]float64} value
 * @return {[]float64} softmax
 */
func softmax(value []float64) []float64 {
	var softmax []float64
	return softmax
}
func covariance()

func PadSlice(slice []int, padding int) []int {
	newLen := len(slice) + padding
	newSlice := make([]int, newLen)
	copy(newSlice, slice)
	return newSlice
}
