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
exports.decorator = void 0;
/**
优点：装饰类和被装饰类可以独立发展，不会相互耦合，装饰模式是继承的一个替代模式，装饰模式可以动态扩展一个实现类的功能。
缺点：多层装饰比较复杂。
 */
//装饰器
var decorator;
(function (decorator) {
    //形状实现类 矩形
    var Rectangle = /** @class */ (function () {
        function Rectangle() {
        }
        Rectangle.prototype.draw = function () {
            console.log('形状  矩形');
        };
        return Rectangle;
    }());
    //形状实现类 圆形
    var Circle = /** @class */ (function () {
        function Circle() {
        }
        Circle.prototype.draw = function () {
            console.log('形状 圆形');
        };
        return Circle;
    }());
    //抽象装饰器
    var ShapeDecorator = /** @class */ (function () {
        function ShapeDecorator(shape) {
            this.decoratorShape = shape;
        }
        ShapeDecorator.prototype.draw = function () {
            this.decoratorShape.draw();
        };
        return ShapeDecorator;
    }());
    //实现装饰器
    var RedShapeDecorator = /** @class */ (function (_super) {
        __extends(RedShapeDecorator, _super);
        function RedShapeDecorator(shape) {
            return _super.call(this, shape) || this;
        }
        RedShapeDecorator.prototype.draw = function () {
            this.decoratorShape.draw();
            this.setRedBorder(this.decoratorShape);
        };
        RedShapeDecorator.prototype.setRedBorder = function (decorteShape) {
            console.log('border color red');
        };
        return RedShapeDecorator;
    }(ShapeDecorator));
    var DecoratorDemo = /** @class */ (function () {
        function DecoratorDemo() {
        }
        DecoratorDemo.client = function () {
            var circle = new Circle();
            var redCircle = new RedShapeDecorator(new Circle());
            circle.draw();
            console.log('===============');
            redCircle.draw();
        };
        return DecoratorDemo;
    }());
    decorator.DecoratorDemo = DecoratorDemo;
})(decorator = exports.decorator || (exports.decorator = {}));
//# sourceMappingURL=Decorator.js.map