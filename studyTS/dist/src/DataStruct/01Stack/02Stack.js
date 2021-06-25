//栈数据结构 先进后出 
var Stack02;
(function (Stack02) {
    //对象实现
    var Stack = /** @class */ (function () {
        function Stack() {
            this.items = {};
            this.count = 0;
        }
        Stack.prototype.push = function (element) {
            return this.items[this.count++] = element;
        };
        Stack.prototype.peek = function () {
            if (this.isEmpty())
                return undefined;
            return this.items[this.count - 1];
        };
        Stack.prototype.pop = function () {
            if (this.isEmpty())
                return undefined;
            var res = this.items[this.count--];
            delete this.items[this.count];
            return res;
        };
        Stack.prototype.isEmpty = function () {
            return this.count == 0;
        };
        Stack.prototype.size = function () {
            return this.count;
        };
        Stack.prototype.clear = function () {
            this.items = {};
            this.count = 0;
        };
        return Stack;
    }());
    Stack02.Stack = Stack;
})(Stack02 || (Stack02 = {}));
//# sourceMappingURL=02Stack.js.map