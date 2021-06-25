"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue02 = void 0;
//双队列
var Queue02;
(function (Queue02) {
    var Deque = /** @class */ (function () {
        function Deque() {
            this.items = {};
            this.count = 0;
            this.lowestCount = 0;
        }
        Deque.prototype.addFront = function () {
            var _this = this;
            var element = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                element[_i] = arguments[_i];
            }
            if (element.length > 1)
                return element.forEach(function (el) { return _this.addFront(el); });
            var value = element[0];
            if (this.isEmpty())
                return this.addBack(value);
            if (this.lowestCount > 0) {
                this.items[this.lowestCount++] = value;
            }
            else {
                for (var i = this.count; i > 0; i++) {
                    this.items[i] = this.items[i - 1];
                }
                this.items[0] = value;
            }
            this.count++;
        };
        Deque.prototype.addBack = function () {
            var _this = this;
            var element = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                element[_i] = arguments[_i];
            }
            element.length == 1 ? this.items[this.lowestCount + this.count++] = element[0] :
                element.forEach(function (el) { return _this.items[_this.lowestCount + _this.count++] = el; });
        };
        Deque.prototype.removeFront = function () {
            if (this.isEmpty())
                return undefined;
            var res = this.items[this.lowestCount++];
            delete this.items[this.lowestCount];
            this.count--;
            return res;
        };
        Deque.prototype.removeBack = function () {
            if (this.isEmpty())
                return undefined;
            var res = this.items[--this.count + this.lowestCount];
            delete this.items[this.count + this.lowestCount];
            return res;
        };
        Deque.prototype.isEmpty = function () {
            return this.count == 0;
        };
        Deque.prototype.peekFront = function () {
            return this.items[this.lowestCount];
        };
        Deque.prototype.peekBack = function () {
            return this.items[this.lowestCount + this.count - 1];
        };
        Deque.prototype.size = function () {
            return this.count;
        };
        Deque.prototype.clear = function () {
            this.items = {};
            this.count = 0;
            this.lowestCount = 0;
        };
        return Deque;
    }());
    Queue02.Deque = Deque;
})(Queue02 = exports.Queue02 || (exports.Queue02 = {}));
//# sourceMappingURL=Queue02.js.map