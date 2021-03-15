"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack02 = void 0;
var Stack02;
(function (Stack02) {
    //对象实现
    var Stack = /** @class */ (function () {
        function Stack() {
            this.count = 0;
            this.items = {};
        }
        Stack.prototype.push = function (element) {
            this.items[this.count++] = element;
        };
        Stack.prototype.size = function () {
            return this.count;
        };
        Stack.prototype.isEmpty = function () {
            return this.count == 0;
        };
        Stack.prototype.peek = function () {
            if (this.isEmpty())
                return undefined;
            return this.items[this.count - 1];
        };
        Stack.prototype.pop = function () {
            if (this.isEmpty())
                return undefined;
            return this.items[--this.count];
        };
        Stack.prototype.clear = function () {
            this.items = {};
            this.count = 0;
        };
        Stack.prototype.toString = function (separator) {
            if (separator === void 0) { separator = ","; }
            return Object.keys(this.items).reduce(function (sum, item) {
                return sum += separator + item;
            }, "").slice(1);
        };
        return Stack;
    }());
    Stack02.Stack = Stack;
})(Stack02 = exports.Stack02 || (exports.Stack02 = {}));
//# sourceMappingURL=02Stack.js.map