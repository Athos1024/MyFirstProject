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
exports.Bridge = void 0;
//桥接模式
var Bridge;
(function (Bridge_1) {
    // 1）适配器：改变已有的两个接口，让他们相容。
    // 2）桥接模式：分离抽象化和实现，使两者的接口可以不同，目的是分离。
    //实现功能接口：画红圆
    var RedCircle = /** @class */ (function () {
        function RedCircle() {
        }
        RedCircle.prototype.drawCircle = function (radius, x, y) {
            console.log("\u753B\u7EA2\u5706x\uFF1A" + x + "y:" + y);
        };
        return RedCircle;
    }());
    //实现功能接口：画绿圆
    var GreenCircle = /** @class */ (function () {
        function GreenCircle() {
        }
        GreenCircle.prototype.drawCircle = function (radius, x, y) {
            console.log("\u753B\u7EFF\u5706x:" + x + "y:" + y);
        };
        return GreenCircle;
    }());
    //形状抽象类
    var Shape = /** @class */ (function () {
        function Shape(drawAPI) {
            this.drawAPI = drawAPI;
        }
        return Shape;
    }());
    //实现形状抽象类：圆
    var Circle = /** @class */ (function (_super) {
        __extends(Circle, _super);
        function Circle(x, y, r, drawAPI) {
            var _this = _super.call(this, drawAPI) || this;
            _this.x = x;
            _this.y = y;
            _this.r = r;
            return _this;
        }
        Circle.prototype.draw = function () {
            this.drawAPI.drawCircle(this.r, this.x, this.y);
        };
        return Circle;
    }(Shape));
    var Bridge = /** @class */ (function () {
        function Bridge() {
        }
        Bridge.Client = function () {
            var s = new GreenCircle();
            var circle = new Circle(10, 20, 30, s);
            circle.draw();
        };
        return Bridge;
    }());
    Bridge_1.Bridge = Bridge;
    var Yellow = /** @class */ (function () {
        function Yellow() {
        }
        Yellow.prototype.getColor = function () {
            return "yellow";
        };
        return Yellow;
    }());
    var Green = /** @class */ (function () {
        function Green() {
        }
        Green.prototype.getColor = function () {
            return "greed";
        };
        return Green;
    }());
    var Bag = /** @class */ (function () {
        function Bag() {
        }
        Bag.prototype.setColor = function (color) {
            this.color = color;
        };
        return Bag;
    }());
    var HandBag = /** @class */ (function (_super) {
        __extends(HandBag, _super);
        function HandBag() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HandBag.prototype.getName = function () {
            return this.color.getColor() + "handbag";
        };
        return HandBag;
    }(Bag));
    var bag = new HandBag();
    bag.setColor(new Green());
    console.log(bag.getName());
    bag.setColor(new Yellow());
    console.log(bag.getName());
})(Bridge = exports.Bridge || (exports.Bridge = {}));
//# sourceMappingURL=Bridge.js.map