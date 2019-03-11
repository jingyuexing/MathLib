/*
* @Author: jingyuexing
* @Date:   2018-12-02 08:53:32
* @Last Modified by:   Jingyuexing
* @Last Modified time: 2019-02-26 14:13:48
*/

    function factorial(n) {
        var total = 1, k = n % 1;
        /*if (k < 1 && k > 0) {
            for (var m = 1; m <= n; m += Math.pow(0.1, String(k).length) - 2) {
                total *= m;
            }
        }*/
        for (var i = 1; i <= n; i++) {
            total *= i;
        }
        return total;
    }