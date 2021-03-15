"use strict";
//栈结构 遵循 LIFO 原则 (last in first out) 后进先出
Object.defineProperty(exports, "__esModule", { value: true });
var Stack = /** @class */ (function () {
    function Stack() {
        //栈的属性
        this.items = [];
    }
    Stack.prototype.push = function (element) {
        //添加一个新元素到栈顶
        return this.items.push(element);
    };
    Stack.prototype.pop = function () {
        //移除栈顶的元素，同时返回被移除的元素
        return this.items.pop();
    };
    Stack.prototype.peek = function () {
        // 返回栈顶的元素，不对栈做任何修改(这个方法不会移除栈顶元素)
        return this.items[this.items.length - 1];
    };
    Stack.prototype.isEmpty = function () {
        //如果栈为空的话将返回 true，否则就返回 false。
        return this.items.length == 0;
    };
    Stack.prototype.size = function () {
        //返回栈里的元素个数
        return this.items.length;
    };
    Stack.prototype.clear = function () {
        // clear 方法用来移除栈里所有的元素，把栈清空。
        this.items = [];
    };
    Stack.prototype.toString = function (separator) {
        if (separator === void 0) { separator = ','; }
        //将栈结构的内容以字符串形式返回
        return this.items.join(separator).toString();
    };
    return Stack;
}());
exports.default = Stack;
//# sourceMappingURL=01%20%E6%A0%88%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%9F%BA%E4%BA%8E%E6%95%B0%E7%BB%84.js.map