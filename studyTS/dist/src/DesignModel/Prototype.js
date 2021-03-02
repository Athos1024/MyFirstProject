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
exports.prototype = void 0;
//原型模式
var prototype;
(function (prototype) {
    /**
    优点： 1、性能提高。 2、逃避构造函数的约束。
    缺点： 1、配备克隆方法需要对类的功能进行通盘考虑，这对于全新的类不是很难，但对于已有的类不一定很容易，特别当一个类引用不支持串行化的间接对象，或者引用含有循环结构的时候。 2、必须实现 Cloneable 接口。
     */
    //动物类实现克隆接口
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.clone = function () {
            var animal = new Animal();
            animal._name = this._name;
            animal._id = this._id;
            return animal;
        };
        return Animal;
    }());
    //实现动物类：狗
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(name) {
            var _this = _super.call(this) || this;
            _this._name = name;
            return _this;
        }
        return Dog;
    }(Animal));
    //实现动物类：猫
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat(name) {
            var _this = _super.call(this) || this;
            _this._name = name;
            return _this;
        }
        return Cat;
    }(Animal));
    //动物id
    var AnimalID;
    (function (AnimalID) {
        AnimalID[AnimalID["Cat"] = 1000] = "Cat";
        AnimalID[AnimalID["Dog"] = 1001] = "Dog";
    })(AnimalID || (AnimalID = {}));
    var ProtoType = /** @class */ (function () {
        function ProtoType() {
            this._animalMap = {};
            var dog = new Dog("狗");
            dog._id = AnimalID.Dog;
            var cat = new Cat("猫");
            cat._id = AnimalID.Cat;
            this._animalMap[AnimalID.Dog] = dog;
            this._animalMap[AnimalID.Cat] = cat;
        }
        ProtoType.prototype.getAnimalID = function (id) {
            return this._animalMap[id].clone();
        };
        return ProtoType;
    }());
    var ProtoTypeDemo = /** @class */ (function () {
        function ProtoTypeDemo() {
        }
        ProtoTypeDemo.Cline = function () {
            var p = new ProtoType();
            var cat = p.getAnimalID(AnimalID.Cat);
            console.log(cat._id, cat._name);
        };
        return ProtoTypeDemo;
    }());
    prototype.ProtoTypeDemo = ProtoTypeDemo;
})(prototype = exports.prototype || (exports.prototype = {}));
//# sourceMappingURL=Prototype.js.map