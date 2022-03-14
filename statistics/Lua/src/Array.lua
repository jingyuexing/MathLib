-- @Author: admin
-- @Date:   2022-03-14 15:19:53
-- @Last Modified by:   admin
-- @Last Modified time: 2022-03-14 15:29:12

local Array = {
    array={},
    length = 0
}
function Array:push(value)
    self.array = table.insert(self.array,self.length,value);
    self.length = #self.array
end

function Array:pop()
    table.remove(self.array,self.length)
    self.length = self.length - 1
end


return Array
