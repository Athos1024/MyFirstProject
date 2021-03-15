"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack02 = void 0;
var Stack02;
(function (Stack02) {
    var Stack = /** @class */ (function () {
        function Stack() {
            this.count = 0;
            this.items = {};
        }
        Stack.prototype.push = function (elemnet) {
            this.items[this.count++] = elemnet;
        };
        Stack.prototype.siez = function () {
            return this.count;
        };
        Stack.prototype.isEmpety = function () {
            return this.count == 0;
        };
        Stack.prototype.peek = function () {
            if (this.isEmpety())
                return undefined;
            return this.items[this.count - 1];
        };
        Stack.prototype.pop = function () {
            if (this.isEmpety())
                return undefined;
            var result = this.items[--this.count];
        };
        Stack.prototype.clear = function () {
            this.items = {};
            this.count = 0;
        };
        Stack.prototype.toString = function (separator) {
            var _this = this;
            if (separator === void 0) { separator = ","; }
            if (this.isEmpety())
                return "";
            return Object.keys(this.items)
                .reduce(function (sum, el) { return (sum += separator + _this.items[el]); }, '')
                .slice(1);
        };
        return Stack;
    }());
    var stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    console.log(stack.toString());
})(Stack02 = exports.Stack02 || (exports.Stack02 = {}));
//# sourceMappingURL=02Stacl.js.map