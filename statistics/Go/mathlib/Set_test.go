package mathlib_test

import (
	"testing"

	"jingyuexing.io/mathlib"
)

func TestSet(t *testing.T) {
	var s mathlib.Set

	s.Add("12","45","67","89")

	if !s.Contains("12") {
		t.Error("this should be has 12")
	}
}