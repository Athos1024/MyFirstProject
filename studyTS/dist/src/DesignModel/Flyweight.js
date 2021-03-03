"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flyweight = void 0;
//享元模式
var Flyweight;
(function (Flyweight) {
    // 优点：大大减少对象的创建，降低系统的内存，使效率提高。
    // 缺点：提高了系统的复杂度，需要分离出外部状态和内部状态，而且外部状态具有固有化的性质，不应该随着内部状态的变化而变化，否则会造成系统的混乱。
    //创建一个实现类
    var Circle = /** @class */ (function () {
        function Circle(color) {
            this.color = color;
        }
        Object.defineProperty(Circle.prototype, "x", {
            set: function (x) {
                this._x = x;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Circle.prototype, "y", {
            set: function (y) {
                this._y = y;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Circle.prototype, "r", {
            set: function (r) {
                this._r = r;
            },
            enumerable: false,
            configurable: true
        });
        Circle.prototype.draw = function () {
            console.log("\u753B\u5706colro:" + this.color + " x: " + this._x + " y:" + this._y + ",r:" + this._r);
        };
        return Circle;
    }());
    var ShapeFactory = /** @class */ (function () {
        function ShapeFactory() {
        }
        ShapeFactory.getCircle = function (color) {
            var circle = this.shapeMap[color];
            if (circle == null) {
                circle = new Circle(color);
                ShapeFactory.shapeMap[color] = circle;
            }
            return circle;
        };
        ShapeFactory.shapeMap = {};
        return ShapeFactory;
    }());
    var FlyweightDemo = /** @class */ (function () {
        function FlyweightDemo() {
        }
        FlyweightDemo.main = function () {
            for (var i = 0; i < 20; i++) {
                var circle = ShapeFactory.getCircle(this.getRandomColor());
                circle.x = FlyweightDemo.getRandomX();
                circle.y = FlyweightDemo.getRandomY();
                circle.r = 100;
                circle.draw();
            }
        };
        FlyweightDemo.getRandomColor = function () {
            return FlyweightDemo.color[Math.floor(Math.random() * this.color.length)];
        };
        FlyweightDemo.getRandomX = function () {
            return Math.floor(Math.random() * 100);
        };
        FlyweightDemo.getRandomY = function () {
            return Math.floor(Math.random() * 100);
        };
        FlyweightDemo.color = ["Red", "Green", "Blue", "White", "Black"];
        return FlyweightDemo;
    }());
    Flyweight.FlyweightDemo = FlyweightDemo;
})(Flyweight = exports.Flyweight || (exports.Flyweight = {}));
//# sourceMappingURL=Flyweight.js.map