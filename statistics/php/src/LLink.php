<?php

/**
 * @Author: Admin
 * @Date:   2021-04-12 23:34:50
 * @Last Modified by:   Admin
 * @Last Modified time: 2021-04-12 23:49:37
 */
require "ILink.php";
class Node{
    var $next;
    var $content;
    var $parent;
}
class LLink implements ILink{
    var $head;
    var $pos;
    function LLink(){
        $this->pos = $this->head = new Node();
    }
    function search($element){
        $currNode = $this->head;
        while($currNode->content!=$element){
            $currNode = $currNode->next;
        }
        return $currNode;
    }
    function remove($node=new Node()){
        $node->parent = $node->next;
        unset($node);
    }
    function append($node = new Node()){
        $this->pos->next = $node;
        $this->pos = $node;
    }
    function update($item,$element){
        $currNode = $this->search($item);
        $currNode->content = $element;
    }
}
?>
