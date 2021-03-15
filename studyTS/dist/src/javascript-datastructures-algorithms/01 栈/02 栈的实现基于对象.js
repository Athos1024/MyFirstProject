"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        return this.count === 0;
    };
    Stack.prototype.peek = function () {
        if (this.isEmpty())
            return undefined;
        return this.items[this.count - 1];
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty())
            return undefined;
        var result = this.items[--this.count];
        delete this.items[this.count];
        return result;
    };
    Stack.prototype.clear = function () {
        this.items = {};
        this.count = 0;
    };
    Stack.prototype.toString = function (separator) {
        var _this = this;
        if (separator === void 0) { separator = ','; }
        if (this.isEmpty())
            return '';
        return Object.keys(this.items)
            .reduce(function (sum, el) { return (sum = sum + separator + _this.items[el]); }, '')
            .slice(1);
    };
    return Stack;
}());
exports.default = Stack;
//# sourceMappingURL=02%20%E6%A0%88%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%9F%BA%E4%BA%8E%E5%AF%B9%E8%B1%A1.js.map