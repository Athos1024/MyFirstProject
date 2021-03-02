"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factory = void 0;
//工厂模式
/**
工厂模式
优点： 1、一个调用者想创建一个对象，只要知道其名称就可以了。 2、扩展性高，如果想增加一个产品，只要扩展一个工厂类就可以。 3、屏蔽产品的具体实现，调用者只关心产品的接口。
缺点：每次增加一个产品时，都需要增加一个具体类和对象实现工厂，使得系统中类的个数成倍增加，在一定程度上增加了系统的复杂度，同时也增加了系统具体类的依赖。这并不是什么好事。
抽象工厂
优点：当一个产品族中的多个对象被设计成一起工作时，它能保证客户端始终只使用同一个产品族中的对象。
缺点：产品族扩展非常困难，要增加一个系列的某一产品，既要在抽象的 Creator 里加代码，又要在具体的里面加代码。
*/
var Factory;
(function (Factory) {
    //简单工厂
    var a;
    (function (a) {
        /**
        优点： 1、一个调用者想创建一个对象，只要知道其名称就可以了。 2、扩展性高，如果想增加一个产品，只要扩展一个工厂类就可以。 3、屏蔽产品的具体实现，调用者只关心产品的接口。
        缺点：每次增加一个产品时，都需要增加一个具体类和对象实现工厂，使得系统中类的个数成倍增加，在一定程度上增加了系统的复杂度，同时也增加了系统具体类的依赖。这并不是什么好事。
          *
          */
        //产品具体实现类：矩形
        var Rectangle = /** @class */ (function () {
            function Rectangle() {
            }
            Rectangle.prototype.draw = function () {
                console.log('画一个矩形');
            };
            return Rectangle;
        }());
        //产品具体实现类：方形
        var Square = /** @class */ (function () {
            function Square() {
            }
            Square.prototype.draw = function () {
                console.log('画一个方形');
            };
            return Square;
        }());
        //形状工厂
        var ShapeFactory = /** @class */ (function () {
            function ShapeFactory() {
            }
            ShapeFactory.prototype.getShape = function (shapeType) {
                var shape = null;
                if (shapeType == "rectangle") {
                    shape = new Rectangle();
                }
                else if (shapeType == "square") {
                    shape = new Square();
                }
                return shape;
            };
            return ShapeFactory;
        }());
        var FactoryDemo = /** @class */ (function () {
            function FactoryDemo() {
            }
            FactoryDemo.cline = function () {
                var factory = new ShapeFactory();
                var s = factory.getShape("rectangle");
                s.draw();
                s = factory.getShape("square");
                s.draw();
            };
            return FactoryDemo;
        }());
        a.FactoryDemo = FactoryDemo;
    })(a = Factory.a || (Factory.a = {}));
    //抽象工厂
    var b;
    (function (b) {
        //产品实现类:矩形
        var Rectangle = /** @class */ (function () {
            function Rectangle() {
            }
            Rectangle.prototype.draw = function () {
                console.log('画一个矩形');
            };
            return Rectangle;
        }());
        var Square = /** @class */ (function () {
            function Square() {
            }
            Square.prototype.draw = function () {
                console.log('画一个方形');
            };
            return Square;
        }());
        //产品实现类：红色
        var Red = /** @class */ (function () {
            function Red() {
            }
            Red.prototype.fill = function () {
                console.log('涂满红色');
            };
            return Red;
        }());
        //产品实现类：蓝色
        var Bule = /** @class */ (function () {
            function Bule() {
            }
            Bule.prototype.fill = function () {
                console.log('涂满蓝色');
            };
            return Bule;
        }());
        //为color和shape对象抽类来获取工厂
        var AbstractShape = /** @class */ (function () {
            function AbstractShape() {
            }
            return AbstractShape;
        }());
        //创建一个shape工厂
        var ShapeFactory = /** @class */ (function (_super) {
            __extends(ShapeFactory, _super);
            function ShapeFactory() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ShapeFactory.prototype.getColor = function () {
                return null;
            };
            ShapeFactory.prototype.getShape = function (shapeType) {
                if (shapeType == "square") {
                    return new Square();
                }
                else if (shapeType == "rectangle") {
                    return new Rectangle();
                }
                return null;
            };
            return ShapeFactory;
        }(AbstractShape));
        //创建一个color工厂        
        var ColorFactory = /** @class */ (function (_super) {
            __extends(ColorFactory, _super);
            function ColorFactory() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ColorFactory.prototype.getColor = function (color) {
                if (color == "red") {
                    return new Red();
                }
                else if (color == "buld") {
                    return new Bule();
                }
            };
            ColorFactory.prototype.getShape = function (shape) {
                return null;
            };
            return ColorFactory;
        }(AbstractShape));
        //工厂创建器，来获取工厂
        var FactoryProducer = /** @class */ (function () {
            function FactoryProducer() {
            }
            FactoryProducer.getFactory = function (choice) {
                if (choice == "shape") {
                    return new ShapeFactory();
                }
                else if (choice == "color") {
                    return new ColorFactory();
                }
                return null;
            };
            return FactoryProducer;
        }());
        var FactoryDemo = /** @class */ (function () {
            function FactoryDemo() {
            }
            FactoryDemo.client = function () {
                var sFactory = FactoryProducer.getFactory("shape");
                var s = sFactory.getShape("square");
                s.draw();
            };
            return FactoryDemo;
        }());
        b.FactoryDemo = FactoryDemo;
    })(b = Factory.b || (Factory.b = {}));
})(Factory = exports.Factory || (exports.Factory = {}));
//# sourceMappingURL=Factory.js.map