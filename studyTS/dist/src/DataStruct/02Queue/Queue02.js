var Queue02;
(function (Queue02) {
    var Deque = /** @class */ (function () {
        function Deque() {
            this.count = 0;
            this.lowestCount = 0;
            this.items = {};
        }
        Deque.prototype.addFront = function () {
            var _this = this;
            var element = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                element[_i] = arguments[_i];
            }
            if (element.length === 0)
                return;
            if (element.length > 1)
                return element.forEach(function (el) { return _this.addFront(el); });
            var value = element[0];
            if (this.isEmpty())
                return this.addBack(value);
            if (this.lowestCount > 0) {
                this.items[--this.lowestCount] = value;
            }
            else if (this.lowestCount == 0) {
                for (var i = this.count; i > 0; i--) {
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
        Deque.prototype.isEmpty = function () {
            return this.count == 0;
        };
        Deque.prototype.removeFront = function () {
            if (this.isEmpty())
                return undefined;
            var res = this.items[this.lowestCount];
            delete this.items[this.lowestCount++];
            this.count--;
            return res;
        };
        Deque.prototype.peekBack = function () {
            return this.items[this.lowestCount + this.count - 1];
        };
        Deque.prototype.size = function () {
            return this.count;
        };
        Deque.prototype.clear = function () {
            this.items = {};
            this.count = this.lowestCount = 0;
        };
        Deque.prototype.toString = function () {
            return this.isEmpty() ? "" : Object.keys(this.items).reduce(function (sum, item) { return (sum += item); }, "").slice(1);
        };
        return Deque;
    }());
})(Queue02 || (Queue02 = {}));
//# sourceMappingURL=Queue02.js.map