/*
* @Author: Jingyuexing
* @Date:   2021-08-07 10:50:14
* @Last Modified by:   Jingyuexing
* @Last Modified time: 2021-08-07 11:28:43
*/

package List;

type Node struct{
    next *Node;
    element interface{}
}

type List struct {
    head   *Node
    pos    *Node
    length int
}

type IList interface{
    init();
    append(item interface{});
    remove(item interface{});
    find(item interface{});
}

func (l *List)init(){
    l.head = nil
    l.pos = nil
    l.length = 0
}

func (l *List)append(item interface{}){
    var newNode = new(Node)
    if l.head == nil {
        l.head = newNode
    }else{
        l.pos.next = newNode
    }
    l.pos = newNode
    l.length++
}

func (l *List)remove(item interface{})Node{
    var findOne = l.find(item)
    findOne = *findOne.next
    return findOne
}
func (l *List)find(item interface{})Node{
    var currNode = new(Node)
    currNode = l.head
    for currNode.element != item && currNode != nil {
        currNode = currNode.next
    }
    return *currNode
}
