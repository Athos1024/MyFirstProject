/**
优点：装饰类和被装饰类可以独立发展，不会相互耦合，装饰模式是继承的一个替代模式，装饰模式可以动态扩展一个实现类的功能。
缺点：多层装饰比较复杂。
 */
//装饰器
var decorator;
(function (decorator) {
    //武器
    var ArmEquip = /** @class */ (function () {
        function ArmEquip() {
        }
        ArmEquip.prototype.CalculateAttack = function () {
            return 20;
        };
        ArmEquip.prototype.Des = function () {
            return "屠龙刀";
        };
        return ArmEquip;
    }());
    //戒指
    var RingEquip = /** @class */ (function () {
        function RingEquip() {
        }
        RingEquip.prototype.CalculateAttack = function () {
            return 5;
        };
        RingEquip.prototype.Des = function () {
            return "圣戒";
        };
        return RingEquip;
    }());
    //具体装饰类  蓝宝石
    var BlueGemDrcorator = /** @class */ (function () {
        function BlueGemDrcorator(equip) {
            this.equip = equip;
        }
        BlueGemDrcorator.prototype.CalculateAttack = function () {
            return 5 + this.equip.CalculateAttack();
        };
        BlueGemDrcorator.prototype.Des = function () {
            return this.equip.Des() + "+ 蓝宝石";
        };
        return BlueGemDrcorator;
    }());
    //具体装饰类   黄宝石
    var YellowGemDrocorator = /** @class */ (function () {
        function YellowGemDrocorator(equip) {
            this.equip = equip;
        }
        YellowGemDrocorator.prototype.CalculateAttack = function () {
            return 10 + this.equip.CalculateAttack();
        };
        YellowGemDrocorator.prototype.Des = function () {
            return this.equip.Des() + "+ 黄宝石";
        };
        return YellowGemDrocorator;
    }());
    var equip = new YellowGemDrocorator(new BlueGemDrcorator(new ArmEquip()));
    console.log(equip.CalculateAttack());
    console.log(equip.Des());
})(decorator || (decorator = {}));
//# sourceMappingURL=Decorator.js.map