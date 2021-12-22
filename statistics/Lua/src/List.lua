-- @Author: admin
-- @Date:   2021-12-12 09:31:48
-- @Last Modified by:   admin
-- @Last Modified time: 2021-12-23 03:51:12



local List = {
    head=nil,
    pos=nil,
    length=0
}
local NULL = {}
local Node = {
    element= nil,
    next = NULL
}
function Node.new(element)
    local node = {
    }
    setmetatable(node,{__index=Node})
    node.element = element
    node.next = NULL
    return node
end


function List.new()
    local self = {}
    setmetatable(self,{__index=List})
    return self
end

function List.append(self,element)
    local Node = Node.new(element)
    if self.head ~= nil then
        self.pos.next = Node
        self.pos = self.pos.next
    else
        self.head = {}
        self.pos = {}
        self.head = Node
        self.pos = self.head
    end
    self.length = self.length+1
end

function List.find(self,element)
    local current = self.head
    while current.element ~= element do
        current = current.next
    end
    return current
end

function List.remove(self,element)
    local targetNode = self.find(self,element)
    targetNode.element = targetNode.next.element
    local nextNode = targetNode.next
    targetNode.next = nextNode.next
    nextNode=nil
    return self
end

return List
