/**
 *
 */
var verctor = /** @class */ (function () {
    function verctor(x, y, z) {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.x = x;
        this.y = y;
        this.z = z;
    }
    return verctor;
}());
///////////////////////////////////////////////////
var vector = /** @class */ (function () {
    function vector(x, y, z) {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.x = x;
        this.y = y;
        this.z = z;
    }
    vector.prototype.add = function (p) {
        return [this.x + p.x, this.y + p.y, this.z + p.z];
    };
    /**
     * @param {verctor}
     * @returns boolean
     * 判断另外一个向量和此向量是否互为负向量
     */
    vector.prototype.opposite = function (a) {
        var temp = [];
        temp = this.add(a);
        if (temp[0] == 0 && temp[1] == 0 && temp[2] == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * 向量夹角
     */
    /**
     * @param  {verctor}
     * @param  {verctor}
     * @return {number}
     */
    vector.prototype.angle = function (a, b) {
        return 0;
    };
    /**
     *向量夹角计算
     * @param a {Array<number>}
     * @param b {Array<number>}
     * @return {number}
     */
    vector.prototype.aryAngle = function (a, b) {
        var p = 0, m = 0, k = 0, temp = 0;
        p = this.aryProduct(a, b);
        m = this.Arymod(a);
        k = this.Arymod(b);
        temp = p / m * k;
        return temp;
    };
    /**n倍向量
     * @param  {number=0}
     * @param  {verctor}
     * @return {Array<number>}
     */
    vector.prototype.multiple = function (n, p) {
        if (n === void 0) { n = 0; }
        return [n * p.x, n * p.y, n * p.z];
    };
    /**
     * @param {verctor}
     * @param {verctor}
     * 向量点积
     */
    /**
     * @param  {verctor}
     * @param  {verctor}
     * @return {number}
     */
    vector.prototype.product = function (a, b) {
        return 0;
    };
    /**
     * 求向量的点积
     * @param  {Array<number>}
     * @param  {Array<number>}
     * @return {number}
     */
    vector.prototype.aryProduct = function (a, b) {
        var data = 0;
        if (a.length != b.length) {
            throw Error("两个数组长度不一样");
        }
        else {
            for (var i in a) {
                data += a[i] * b[i];
            }
        }
        return data;
    };
    /**求向量的模
     * @param  {Array<number>}
     * @return {number}
     */
    vector.prototype.Arymod = function (a) {
        var num = 0;
        if (a.length == 1 && a[a.length] == undefined) {
            throw Error("参数必须不为空数组");
        }
        else {
            for (var i = 0; i < a.length; i++) {
                num += Math.pow(a[i], 2);
            }
            return Math.sqrt(num);
        }
    };
    /**
     * 求中点坐标
     * @param  {Array<number>}
     * @param  {Array<number>}
     * @return {Array<number>}
     */
    vector.prototype.aryMidPoint = function (a, b) {
        var ary = [];
        if (a.length == b.length) {
            for (var i = 0; i < a.length; i++) {
                ary[i] = (a[i] + b[i]) / 2;
            }
            return ary;
        }
        else {
            throw Error("数组长度不一致");
        }
    };
    /**
     * 判断是否为空
     * @param  {Array<any>}
     * @return {boolean}
     */
    vector.prototype.ISEmpty = function (Ary) {
        var b = false;
        for (var i = 0; Ary.length; i++) {
            if (Ary[i]) {
                b = false;
                break;
            }
            else {
                b = true;
                continue;
            }
        }
        return b;
    };
    return vector;
}());
