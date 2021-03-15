"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mySet = /** @class */ (function () {
    function mySet() {
        this.items = {};
    }
    mySet.prototype.add = function (element) {
        //向集合添加一个新元素
        if (this.has(element))
            return false;
        this.items[element + ''] = element;
        return true;
    };
    mySet.prototype.delete = function (element) {
        // 从集合移除一个元素
        if (!this.has(element))
            return false;
        delete this.items[element + ''];
        return true;
    };
    mySet.prototype.has = function (element) {
        //如果元素在集合中，返回 true，否则返回 false。
        return Object.prototype.hasOwnProperty.call(this.items, element + '');
    };
    mySet.prototype.clear = function () {
        //移除集合中的所有元素。
        this.items = {};
    };
    mySet.prototype.size = function () {
        //返回集合所包含元素的数量。它与数组的 length 属性类似。
        return Object.keys(this.items).length;
    };
    mySet.prototype.values = function () {
        //返回一个包含集合中所有值（元素）的数组。
        return Object.values(this.items);
    };
    mySet.prototype.getUnion = function (otherSet) {
        //求并集
        var union = new mySet();
        this.values().forEach(function (el) { return union.add(el); });
        otherSet.values().forEach(function (el) { return union.add(el); });
        return union;
    };
    mySet.prototype.getIntersection = function (otherSet) {
        var _a;
        //求交集
        var intersection = new mySet();
        var smallerSet = this.values();
        var biggerSet = otherSet.values();
        //做优化处理 每次只迭代长度最少的集合
        if (smallerSet.length > biggerSet.length) {
            ;
            _a = [biggerSet, smallerSet], smallerSet = _a[0], biggerSet = _a[1];
        }
        smallerSet.forEach(function (el) {
            if (biggerSet.includes(el)) {
                intersection.add(el);
            }
        });
        return intersection;
    };
    mySet.prototype.getDifference = function (otherSet) {
        //求差集
        var difference = new mySet();
        this.values().forEach(function (el) {
            if (!otherSet.has(el)) {
                difference.add(el);
            }
        });
        return difference;
    };
    mySet.prototype.isSubsetOf = function (otherSet) {
        //判断子集
        if (this.size() > otherSet.size())
            return false;
        return this.values().every(function (el) { return otherSet.has(el); });
    };
    return mySet;
}());
exports.default = mySet;
//# sourceMappingURL=01%20%E9%9B%86%E5%90%88%E7%9A%84%E5%AE%9E%E7%8E%B0.js.map