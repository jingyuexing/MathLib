<?php

/**
 * @Author: Admin
 * @Date:   2021-04-12 22:32:07
 * @Last Modified by:   Admin
 * @Last Modified time: 2021-04-12 22:44:38
 */
require "ILink.php";
class Node{
    var $next;
    var $content;
}
class Link implements ILink{
    var $head;
    var $pos;
    function Link(){
        $this->head = new Node();
        $this->head->next = null;
        $this->head->content = null;
        $this->pos = $this->head;
    }
    function search($element){
        $currNode = $this->head;
        while($currNode->content != $element){
            $currNode = $currNode->next;
        }
        return $currNode;
    }
    function remove($node=new Node()){
        $node->content = $node->next->content;
        $node->next->next;

    }
    function append($node=new Node()){
        $this->head->next = $node;
    }
    function update($item,$element){
        $currNode = $this->search($item);
        $currNode->content = $element;
    }
}
