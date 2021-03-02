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
exports.Builder = void 0;
//建筑这模式
var Builder;
(function (Builder) {
    //包装实现类：包装
    var Wrapper = /** @class */ (function () {
        function Wrapper() {
        }
        Wrapper.prototype.pack = function () {
            return "warpper";
        };
        return Wrapper;
    }());
    //包装实现类：瓶子
    var Bottle = /** @class */ (function () {
        function Bottle() {
        }
        Bottle.prototype.pack = function () {
            return "bottle";
        };
        return Bottle;
    }());
    //食品实现类：抽象汉堡
    var Burger = /** @class */ (function () {
        function Burger() {
        }
        Burger.prototype.packing = function () {
            return new Wrapper();
        };
        return Burger;
    }());
    //食品实现类：抽象饮料
    var ColdDrink = /** @class */ (function () {
        function ColdDrink() {
        }
        ColdDrink.prototype.packing = function () {
            return new Bottle();
        };
        return ColdDrink;
    }());
    //抽象汉堡实现类：蔬菜汉堡
    var VerBurger = /** @class */ (function (_super) {
        __extends(VerBurger, _super);
        function VerBurger() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        VerBurger.prototype.name = function () {
            return "VerBurger";
        };
        VerBurger.prototype.price = function () {
            return 10;
        };
        return VerBurger;
    }(Burger));
    //抽象汉堡实现类：鸡肉汉堡
    var ChickenBurger = /** @class */ (function (_super) {
        __extends(ChickenBurger, _super);
        function ChickenBurger() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ChickenBurger.prototype.name = function () {
            return "chickenBurger";
        };
        ChickenBurger.prototype.price = function () {
            return 20;
        };
        return ChickenBurger;
    }(Burger));
    //饮料实现类：可乐
    var Coke = /** @class */ (function (_super) {
        __extends(Coke, _super);
        function Coke() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Coke.prototype.name = function () {
            return "可乐";
        };
        Coke.prototype.price = function () {
            return 5;
        };
        return Coke;
    }(ColdDrink));
    //饮料实现类：百事
    var Pepsi = /** @class */ (function (_super) {
        __extends(Pepsi, _super);
        function Pepsi() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Pepsi.prototype.name = function () {
            return "百事";
        };
        Pepsi.prototype.price = function () {
            return 5.5;
        };
        return Pepsi;
    }(ColdDrink));
    //套餐
    var Meal = /** @class */ (function () {
        function Meal() {
            this.itemList = [];
        }
        Meal.prototype.addItem = function (item) {
            this.itemList.push(item);
        };
        Meal.prototype.getCost = function () {
            var cost = 0;
            for (var i = 0; i < this.itemList.length; i++) {
                var element = this.itemList[i];
                cost += element.price();
            }
            return cost;
        };
        Meal.prototype.showItem = function () {
            for (var i = 0; i < this.itemList.length; i++) {
                var element = this.itemList[i];
                console.log(element.name());
                console.log(element.packing());
                console.log(element.price());
            }
        };
        return Meal;
    }());
    var MealBuilder = /** @class */ (function () {
        function MealBuilder() {
        }
        MealBuilder.prototype.prepareVegMeal = function () {
            var meal = new Meal();
            meal.addItem(new VerBurger());
            meal.addItem(new Pepsi());
            return meal;
        };
        MealBuilder.prototype.prepareNonVegMeal = function () {
            var meal = new Meal();
            meal.addItem(new ChickenBurger());
            meal.addItem(new Coke());
            return meal;
        };
        return MealBuilder;
    }());
    var BuilderDemo = /** @class */ (function () {
        function BuilderDemo() {
        }
        BuilderDemo.clinet = function () {
            var mB = new MealBuilder();
            var m = mB.prepareNonVegMeal();
            // m.getCost();
            m.showItem();
        };
        return BuilderDemo;
    }());
    Builder.BuilderDemo = BuilderDemo;
})(Builder = exports.Builder || (exports.Builder = {}));
//# sourceMappingURL=Builder.js.map