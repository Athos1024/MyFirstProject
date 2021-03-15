"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue01 = void 0;
var Queue01;
(function (Queue01) {
    //先进先出
    var Queue = /** @class */ (function () {
        function Queue() {
            this.count = 0;
            this.items = {};
            this.lowestCount = 0;
        }
        Queue.prototype.enqueue = function () {
            var _this = this;
            var element = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                element[_i] = arguments[_i];
            }
            element.length == 1 ? (this.items[this.lowestCount + this.count++] = element[0]) :
                element.forEach(function (el) { return _this.items[_this.lowestCount + _this.count++] = el; });
        };
        Queue.prototype.dequeue = function () {
            if (this.isEmpty())
                return undefined;
            var result = this.items[this.lowestCount];
            delete this.items[this.lowestCount++];
            this.count--;
            return result;
        };
        Queue.prototype.isEmpty = function () {
            return this.count == 0;
        };
        Queue.prototype.peek = function () {
            if (this.isEmpty())
                return undefined;
            return this.items[this.lowestCount];
        };
        Queue.prototype.size = function () {
            return this.count;
        };
        Queue.prototype.clear = function () {
            this.items = {};
            this.count = this.lowestCount = 0;
        };
        Queue.prototype.toString = function () {
            if (this.isEmpty())
                return "";
            return Object.keys(this.items).reduce(function (sum, item) {
                return sum += item;
            }, "").slice(1);
        };
        return Queue;
    }());
    Queue01.Queue = Queue;
})(Queue01 = exports.Queue01 || (exports.Queue01 = {}));
//# sourceMappingURL=Queue01.js.map