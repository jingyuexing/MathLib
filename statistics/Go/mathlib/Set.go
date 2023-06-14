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