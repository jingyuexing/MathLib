/*
* @Author: Jingyuexing
* @Date:   2020-12-04 11:36:19
* @Last Modified by:   Jingyuexing
* @Last Modified time: 2020-12-04 12:02:16
*/

namespace Mathlib{
    class LinkNode{
        public LinkNode parent;
        public LinkNode child;
        public double element;
        public LinkNode(double element){
            this.element = element;
            this.parent = null;
            this.child = null;
        }
    }
    class Link{
        public LinkNode head;
        public LinkNode position;
        Link(){
            this.position = this.head = new LinkNode(0);
        }
        public void append(double element){
            this.position.child = new LinkNode(element);
            this.position.child.parent = this.position;
        }
        public void insert(double item,double element){
            LinkNode currNode = this.find(item);
            LinkNode newNode = new LinkNode(element);
            newNode.child = currNode.child.child;
            newNode.parent = currNode;
        }
        public LinkNode find(double element){
            LinkNode currNode = null;
            currNode = this.head.child;
            while(currNode!=null && currNode.element != element){
                currNode = currNode.child;
            }
            return currNode;
        }
        public void remove(double item){
            LinkNode currNode = this.find(item);
            currNode.parent = currNode.child;
        }
        public LinkNode frist(){
            return this.head.child;
        }
        public LinkNode last(){
            return this.position;
        }
    }
}
