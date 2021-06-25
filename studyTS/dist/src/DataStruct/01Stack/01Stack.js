"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack01 = void 0;
//栈数据结构 先进后出 
var Stack01;
(function (Stack01) {
    //数组实现
    var Stack = /** @class */ (function () {
        function Stack() {
            this.items = [];
        }
        Stack.prototype.push = function (element) {
            return this.items.push(element);
        };
        Stack.prototype.peek = function () {
            return this.items[this.items.length - 1];
        };
        Stack.prototype.pop = function () {
            return this.items.pop();
        };
        Stack.prototype.size = function () {
            return this.items.length;
        };
        Stack.prototype.clear = function () {
            this.items = [];
        };
        Stack.prototype.isEmpty = function () {
            return this.items.length == 0;
        };
        return Stack;
    }());
    Stack01.Stack = Stack;
    //栈实现二进制
    function decimalToBinary(decNumber) {
        var stack = new Stack01.Stack();
        var binaryString = "";
        while (decNumber) {
            stack.push(decNumber % 2);
            decNumber = Math.floor(decNumber);
        }
        while (!stack.isEmpty()) {
            binaryString += stack.pop();
        }
        return binaryString;
    }
    //栈实现多种进制
    function baseConverter(decNumber, base) {
        if (base === void 0) { base = 2; }
        var remStack = new Stack01.Stack();
        var digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var baseString = "";
        if (!(base > 2 && base <= 36)) {
            return '';
        }
        while (decNumber > 0) {
            remStack.push(decNumber % base);
            decNumber = Math.floor(decNumber / base);
        }
        while (!remStack.isEmpty()) {
            baseString += digits[remStack.pop()];
        }
        return baseString;
    }
})(Stack01 = exports.Stack01 || (exports.Stack01 = {}));
//# sourceMappingURL=01Stack.js.map