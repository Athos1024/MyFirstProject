"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MinHeap = /** @class */ (function () {
    function MinHeap() {
        this.heap = [];
    }
    /* 私有方法 */
    MinHeap.prototype.getLeftIndex = function (index) {
        //访问左子节点
        return 2 * index + 1;
    };
    MinHeap.prototype.getRightIndex = function (index) {
        //访问右子节点
        return 2 * index + 2;
    };
    MinHeap.prototype.getParentIndex = function (index) {
        //访问父节点
        return Math.floor((index - 1) / 2);
    };
    MinHeap.prototype.swap = function (arr, a, b) {
        var _a;
        // 交换 数组两个元素的位置
        ;
        _a = [arr[b], arr[a]], arr[a] = _a[0], arr[b] = _a[1];
    };
    MinHeap.prototype.preTraverseNode = function (index, cb) {
        //先序遍历实体函数
        if (this.heap[index] !== undefined) {
            cb(this.heap[index]);
            this.preTraverseNode(this.getLeftIndex(index), cb);
            this.preTraverseNode(this.getRightIndex(index), cb);
        }
    };
    MinHeap.prototype.compare = function (a, b) {
        //一定要做一层封装
        return a >= b;
    };
    MinHeap.prototype.siftUp = function (index) {
        //将要将这个值和它的父节点进行交换，直到父节点小于这个插入的值
        var parent = this.getParentIndex(index);
        while (index > 0 && this.compare(this.heap[parent], this.heap[index])) {
            this.swap(this.heap, index, parent);
            index = parent;
            parent = this.getParentIndex(index);
        }
    };
    MinHeap.prototype.siftDown = function (index) {
        //向下冒泡
        var left = this.getLeftIndex(index);
        var right = this.getRightIndex(index);
        if (this.compare(this.heap[index], this.heap[left]) &&
            this.compare(this.heap[index], this.heap[right])) {
            if (!this.compare(this.heap[right], this.heap[left])) {
                this.swap(this.heap, right, index);
                this.siftDown(right);
            }
            else {
                this.swap(this.heap, left, index);
                this.siftDown(left);
            }
        }
        else if (this.compare(this.heap[index], this.heap[left])) {
            this.swap(this.heap, left, index);
            this.siftDown(left);
        }
        else if (this.compare(this.heap[index], this.heap[right])) {
            this.swap(this.heap, right, index);
            this.siftDown(right);
        }
    };
    /* 允许子类访问的方法 */
    MinHeap.prototype.insert = function (value) {
        // 这个方法向堆中插入一个新的值。如果插入成功，它返回 true，否则返回 false。
        if (!isNaN(value)) {
            this.heap.push(value);
            //进行上移操作处理
            this.siftUp(this.heap.length - 1);
            return true;
        }
        return false;
    };
    MinHeap.prototype.extract = function () {
        //这个方法移除最小值（最小堆）或最大值（最大堆），并返回这个值。
        if (this.isEmpty())
            return undefined;
        if (this.size() === 1)
            return this.heap.shift();
        var removedValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.siftDown(0);
        return removedValue;
    };
    MinHeap.prototype.findMinimum = function () {
        //这个方法返回最小值（最小堆）或最大值（最大堆）且不会移除这个值。
        return this.isEmpty() ? undefined : this.heap[0];
    };
    MinHeap.prototype.size = function () {
        return this.heap.length;
    };
    MinHeap.prototype.isEmpty = function () {
        return this.size() === 0;
    };
    MinHeap.prototype.preTraverse = function (cb) {
        //先序遍历
        this.preTraverseNode(0, cb);
    };
    return MinHeap;
}());
exports.default = MinHeap;
//# sourceMappingURL=01%20%E6%9C%80%E5%B0%8F%E5%A0%86%E5%AE%9E%E7%8E%B0.js.map