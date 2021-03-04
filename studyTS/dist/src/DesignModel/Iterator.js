var Iterator;
(function (Iterator) {
    var ConcreteIterator = /** @class */ (function () {
        function ConcreteIterator(collection) {
            this.conllection = [];
            this.position = 0;
            this.conllection = collection;
        }
        ConcreteIterator.prototype.next = function () {
        };
        ConcreteIterator.prototype.hasNext = function () {
            throw new Error("Method not implemented.");
        };
        return ConcreteIterator;
    }());
})(Iterator || (Iterator = {}));
//# sourceMappingURL=Iterator.js.map