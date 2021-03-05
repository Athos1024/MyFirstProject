var Visitor;
(function (Visitor) {
    var ConcreteElementA = /** @class */ (function () {
        function ConcreteElementA(name, num) {
            this.name = name;
            this.num = num;
        }
        Object.defineProperty(ConcreteElementA.prototype, "Name", {
            get: function () {
                return this.name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ConcreteElementA.prototype, "Money", {
            get: function () {
                return this.num + "万元";
            },
            enumerable: false,
            configurable: true
        });
        ConcreteElementA.prototype.accept = function () {
        };
        return ConcreteElementA;
    }());
    var ConcreteElementB = /** @class */ (function () {
        function ConcreteElementB(name, num) {
            this.name = name;
            this.num = num;
        }
        Object.defineProperty(ConcreteElementB.prototype, "Name", {
            get: function () {
                return this.name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ConcreteElementB.prototype, "Money", {
            get: function () {
                return this.num + "万元";
            },
            enumerable: false,
            configurable: true
        });
        ConcreteElementB.prototype.accept = function () {
        };
        return ConcreteElementB;
    }());
})(Visitor || (Visitor = {}));
//# sourceMappingURL=Visitor.js.map