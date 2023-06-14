package mathlib

type Set map[string]bool


func (s Set) Add(items ...string){
	for _,v := range items {
		s[v] = true
	}
}

func (s Set) Contains(item string) bool {
    _, ok := s[item]
    return ok
}

func (s Set) Remove(items ...string){
	for _,item := range items {
		delete(s,item)
	}
}

func (s Set) Length() int{
	return len(s)
}

func (s Set) IsEmpty() bool {
	return s.Length() == 0
}

func (s Set) Union(other ...Set) Set {
	union := make(Set)
	for k, v := range s {
		union[k] = v
	}
	for _, otherSet := range other {
		for k, v := range otherSet {
			union[k] = v
		}
	}
	return union
}

func (s Set) Intersection(others ...Set) Set {
	intersection := make(Set)
	for k := range s {
		for _, otherSet := range others {
			if otherSet.Contains(k) {
				intersection[k] = true
			}
		}
	}
	return intersection
}
