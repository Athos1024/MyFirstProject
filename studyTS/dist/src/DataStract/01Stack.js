var Stack;
(function (Stack_1) {
    //先进后出
    var Stack = /** @class */ (function () {
        function Stack() {
            this.item = [];
        }
        Stack.prototype.push = function (element) {
            //添加一个新的元素
            return this.item.push(element);
        };
        Stack.prototype.pop = function () {
            //移除最顶的元素，同时返回被删除的元素
            return this.item.pop();
        };
        Stack.prototype.peek = function () {
            return this.item[this.item.length - 1];
        };
        Stack.prototype.isEmpty = function () {
            return this.item.length == 0;
        };
        Stack.prototype.size = function () {
            return this.item.length;
        };
        Stack.prototype.clear = function () {
            this.item = [];
        };
        Stack.prototype.toString = function () {
            return this.item.join(",");
        };
        return Stack;
    }());
    var stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    console.log(stack.size());
    console.log(stack.pop());
    console.log(stack.toString());
})(Stack || (Stack = {}));
//# sourceMappingURL=01Stack.js.map