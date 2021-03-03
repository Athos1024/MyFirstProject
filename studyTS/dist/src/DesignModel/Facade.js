"use strict";
/**
优点： 1、减少系统相互依赖。 2、提高灵活性。 3、提高了安全性。
缺点：不符合开闭原则，如果要改东西很麻烦，继承重写都不合适。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Facade = void 0;
//外观模式
var Facade;
(function (Facade) {
    var Rectangle = /** @class */ (function () {
        function Rectangle() {
        }
        Rectangle.prototype.draw = function () {
            console.log('画矩形');
        };
        return Rectangle;
    }());
    var Square = /** @class */ (function () {
        function Square() {
        }
        Square.prototype.draw = function () {
            console.log('画方形');
        };
        return Square;
    }());
    var ShapeMaker = /** @class */ (function () {
        function ShapeMaker() {
            this.rect = new Rectangle();
            this.square = new Square();
        }
        ShapeMaker.prototype.drawRect = function () {
            this.rect.draw();
        };
        ShapeMaker.prototype.drawSquare = function () {
            this.square.draw();
        };
        return ShapeMaker;
    }());
    var FacadeDemo = /** @class */ (function () {
        function FacadeDemo() {
        }
        FacadeDemo.Client = function () {
            var maker = new ShapeMaker();
            maker.drawRect();
        };
        return FacadeDemo;
    }());
    Facade.FacadeDemo = FacadeDemo;
})(Facade = exports.Facade || (exports.Facade = {}));
//# sourceMappingURL=Facade.js.map