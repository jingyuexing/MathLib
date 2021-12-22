-- @Author: admin
-- @Date:   2021-12-14 13:14:23
-- @Last Modified by:   admin
-- @Last Modified time: 2021-12-23 03:50:55
local Node = {
    element= nil,
    prev = nil,
    next = nil
}

function Node.new(element)
    local node = {element=element}
    setmetatable(node,{__index=Node})
    return node
end

local Link = {
    head = nil,
    pos = nil,
    length = 0
}

function Link.new()
    local link = {}
    setmetatable(link,{__index=Link})
    return link
end

function Link.append(self,element)
    local newNode = Node.new(element)
    if self.head == nil then
        self.head = newNode
        self.pos = self.head
    else
        self.pos.next = newNode
        newNode.prev = self.pos
        self.pos = self.pos.next
    end
    self.length = self.length+1
end

function Link.remove(self,element)
    local findOne = self.find(self,element)
    findOne.prev.next = findOne.next
    findOne.next.prev = findOne.prev
    self.length = self.length - 1
end

function Link.insert(self,target,element)
    local findOne = self.find(self,target)
    local newNode = Node.new(element)
    newNode.next = findOne.next.next
    newNode.prev = findOne
    findOne.next = newNode
    self.length= self.length+1
end

function Link.find(self,element)
    local current = self.head;
    while current.element ~= element and current ~= nil do
        current = current.next
    end
    return current
end

return Link
