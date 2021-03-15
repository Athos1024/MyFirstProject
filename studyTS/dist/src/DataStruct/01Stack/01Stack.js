var Stack01;
(function (Stack01) {
    //后进先出
    //数组实现
    var Stack = /** @class */ (function () {
        function Stack() {
            this.items = [];
        }
        Stack.prototype.push = function (element) {
            this.items.push(element);
        };
        Stack.prototype.pop = function () {
            return this.items.pop();
        };
        Stack.prototype.peek = function () {
            return this.items[this.items.length - 1];
        };
        Stack.prototype.isEmpty = function () {
            return this.items.length == 0;
        };
        Stack.prototype.size = function () {
            return this.items.length;
        };
        Stack.prototype.clear = function () {
            this.items = [];
        };
        Stack.prototype.toString = function (separator) {
            if (separator === void 0) { separator = ","; }
            return this.items.join(separator);
        };
        return Stack;
    }());
})(Stack01 || (Stack01 = {}));
//# sourceMappingURL=01Stack.js.map