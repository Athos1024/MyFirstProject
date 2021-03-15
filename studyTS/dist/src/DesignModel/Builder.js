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
(function (Builder_1) {
    /**
     * 优点： 1、建造者独立，易扩展。 2、便于控制细节风险。
缺点： 1、产品必须有共同点，范围有限制。 2、如内部变化复杂，会有很多的建造类。
     */
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
    Builder_1.BuilderDemo = BuilderDemo;
    //产品角色：包含多个组成部件的复杂对象。
    var Product = /** @class */ (function () {
        function Product() {
        }
        Product.prototype.setPartA = function (partA) {
            this.partA = partA;
        };
        Product.prototype.setPartB = function (partB) {
            this.partB = partB;
        };
        Product.prototype.setPartC = function (partC) {
            this.partC = partC;
        };
        Product.prototype.show = function () {
            //显示产品的特性
            console.log('产品的部件分别为：', this.partA, this.partB, this.partC);
        };
        return Product;
    }());
    //抽象建造者：包含创建产品各个子部件的抽象方法。
    var Builder = /** @class */ (function () {
        function Builder() {
            //创建产品对象
            this.product = new Product();
        }
        //返回产品对象
        Builder.prototype.getResult = function () {
            return this.product;
        };
        return Builder;
    }());
    //具体建造者：实现了抽象建造者接口。
    var ConcreteBuilder = /** @class */ (function (_super) {
        __extends(ConcreteBuilder, _super);
        function ConcreteBuilder() {
            return _super.call(this) || this;
        }
        ConcreteBuilder.prototype.buildPartA = function () {
            this.product.setPartA("partA");
        };
        ConcreteBuilder.prototype.buildPartB = function () {
            this.product.setPartB("partB");
        };
        ConcreteBuilder.prototype.buildPartC = function () {
            this.product.setPartC("partC");
        };
        return ConcreteBuilder;
    }(Builder));
    //具体建造者1：实现了抽象建造者接口。
    var ConcreteBuilder1 = /** @class */ (function (_super) {
        __extends(ConcreteBuilder1, _super);
        function ConcreteBuilder1() {
            return _super.call(this) || this;
        }
        ConcreteBuilder1.prototype.buildPartA = function () {
            this.product.setPartA("partA1");
        };
        ConcreteBuilder1.prototype.buildPartB = function () {
            this.product.setPartB("partB1");
        };
        ConcreteBuilder1.prototype.buildPartC = function () {
            this.product.setPartC("partC1");
        };
        return ConcreteBuilder1;
    }(Builder));
    //指挥者：调用建造者中的方法完成复杂对象的创建。
    var Director = /** @class */ (function () {
        function Director() {
        }
        Director.getProduct = function (builder) {
            builder.buildPartA();
            builder.buildPartB();
            builder.buildPartC();
            return builder.getResult();
        };
        return Director;
    }());
    //测试
    var Client = /** @class */ (function () {
        function Client() {
        }
        Client.main = function () {
            var builder0 = new ConcreteBuilder();
            var builder1 = new ConcreteBuilder1();
            //测试:创建者builder0
            // const product: Product = Director.getProduct(builder0)
            //测试:创建者builder1,调整部件
            var product = Director.getProduct(builder1);
            product.show();
        };
        return Client;
    }());
    Client.main();
})(Builder = exports.Builder || (exports.Builder = {}));
//# sourceMappingURL=Builder.js.map