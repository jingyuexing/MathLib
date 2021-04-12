<?php

/**
 * @Author: Admin
 * @Date:   2021-04-12 22:26:01
 * @Last Modified by:   Admin
 * @Last Modified time: 2021-04-12 22:31:49
 *
 */
    interface ILink{
        function search($element);
        function remove($node);
        function append($node);
        function update($item,$element);
    }

?>
