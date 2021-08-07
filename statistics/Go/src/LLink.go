/*
* @Author: Admin
* @Date:   2021-05-06 14:28:02
* @Last Modified by:   admin
* @Last Modified time: 2021-07-04 01:36:37
 */
package mathlib

type Node struct {
	prev    *Node
	next    *Node
	element interface{}
}

type LLink struct {
	head    *Node
	postion *Node
	length  int
}

type ILLink interface {
	add(item interface{})
	remove(item interface{})
	find(item interface{})
}

/**
 * [func description]
 * @param  {[type]} l *LLink)init(  [description]
 * @return {[type]}   [description]
 */
func (l *LLink) init() {
	l.head = nil
	l.postion = l.head
	l.length = 0
}

func (l *LLink) add(item interface{}) {
	newNode := new(Node)
	newNode.prev = l.postion
	newNode.element = item
	newNode.next = nil
	l.length++
	l.postion = newNode
}

func (l *LLink) remove(item interface{}) {
	findOne := l.find(item)
	findOne.prev = findOne.next.next
}

func (l *LLink) find(item interface{}) Node {
	currNode := new(Node)
	currNode = l.head
	for currNode.element != item && currNode != nil {
		currNode = currNode.next
	}
	return *currNode
}
