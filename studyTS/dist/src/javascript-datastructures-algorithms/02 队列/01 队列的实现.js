"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//队列 先进先出(FIFO)
var Queue = /** @class */ (function () {
    function Queue() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0; //追踪第一个元素
    }
    Queue.prototype.enqueue = function () {
        var _this = this;
        var element = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            element[_i] = arguments[_i];
        }
        //向队列尾部添加一个（或多个）新的项。
        element.length === 1
            ? (this.items[this.lowestCount + this.count++] = element[0])
            : element.forEach(function (el) { return (_this.items[_this.lowestCount + _this.count++] = el); });
    };
    Queue.prototype.dequeue = function () {
        //移除队列的第一项（即排在队列最前面的项）并返回被移除的元素
        if (this.isEmpty())
            return undefined;
        var result = this.items[this.lowestCount];
        delete this.items[this.lowestCount++];
        this.count--;
        return result;
    };
    Queue.prototype.isEmpty = function () {
        //判断队列是否为空
        return this.count === 0;
    };
    Queue.prototype.peek = function () {
        //查看队列的头元素
        return this.isEmpty() ? undefined : this.items[this.lowestCount];
    };
    Queue.prototype.size = function () {
        //返回队列长度
        return this.count;
    };
    Queue.prototype.clear = function () {
        //清空队列
        this.items = {};
        this.count = this.lowestCount = 0;
    };
    Queue.prototype.toString = function (separator) {
        var _this = this;
        if (separator === void 0) { separator = ','; }
        //将队列toString
        return this.isEmpty()
            ? ''
            : Object.keys(this.items)
                .reduce(function (sum, el) { return (sum = sum + separator + _this.items[el]); }, '')
                .slice(1);
    };
    return Queue;
}());
exports.default = Queue;
//# sourceMappingURL=01%20%E9%98%9F%E5%88%97%E7%9A%84%E5%AE%9E%E7%8E%B0.js.map