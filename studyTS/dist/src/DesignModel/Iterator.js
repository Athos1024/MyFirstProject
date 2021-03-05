"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Iterator = void 0;
var Iterator;
(function (Iterator) {
    var ConcreteIterator = /** @class */ (function () {
        function ConcreteIterator(collection) {
            this.collection = [];
            this.position = 0;
            this.collection = collection;
        }
        /**
         * 获取下一个元素
         */
        ConcreteIterator.prototype.next = function () {
            var result = this.collection[this.position];
            this.position += 1;
            return result;
        };
        /**
         * 判断是否还有下一个元素
         */
        ConcreteIterator.prototype.hasNext = function () {
            return this.position < this.collection.length;
        };
        return ConcreteIterator;
    }());
    var Numbers = /** @class */ (function () {
        function Numbers(collection) {
            this.collection = [];
            this.collection = collection;
        }
        Numbers.prototype.createIterator = function () {
            return new ConcreteIterator(this.collection);
        };
        return Numbers;
    }());
    var Client = /** @class */ (function () {
        function Client() {
        }
        Client.main = function () {
            var nArray = [7, 29, 8, 15, 2, 14];
            var numbers = new Numbers(nArray);
            var it = numbers.createIterator();
            while (it.hasNext()) {
                console.log(it.next());
            }
        };
        return Client;
    }());
    Client.main();
})(Iterator = exports.Iterator || (exports.Iterator = {}));
//# sourceMappingURL=Iterator.js.map