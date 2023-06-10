/*
* @Author: Admin
* @Date:   2021-05-06 14:27:53
* @Last Modified by:   admin
* @Last Modified time: 2022-04-14 20:48:40
 */
package mathlib

type Node struct {
	prev    *Node
	next    *Node
	element interface{}
}

type Link struct {
	head   *Node
	pos    *Node
	length int
}

type ILink interface {
	append(item interface{})
	remove(item interface{})
	find(item interface{})
	init() Link
}

func (l *Link) init() {
	l.head = nil
	l.pos = nil
	l.length = 0
}

/**
 * [func description]
 * @param  {interface{}} item
 * @return {[type]}   [description]
 */
func (l *Link) append(item interface{}) {
	var newNode = new(Node)
	l.pos = l.head.next
	l.length++
	l.pos = newNode
}
func (l *Link) remove(item interface{}) {
	findOne := l.find(item)
	findOne.element = findOne.next.element
	findOne.next = findOne.next.next
}
func (l *Link) find(item interface{}) Node {
	var currNode = new(Node)
	currNode = l.head.next
	for currNode.element != item && currNode != nil {
		currNode = currNode.next
	}
	return *currNode
}
