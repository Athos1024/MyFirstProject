"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adapter = void 0;
/**
优点： 1、可以让任何两个没有关联的类一起运行。 2、提高了类的复用。 3、增加了类的透明度。 4、灵活性好。

缺点： 1、过多地使用适配器，会让系统非常零乱，不易整体进行把握。比如，明明看到调用的是
 A 接口，其实内部被适配成了 B 接口的实现，一个系统如果太多出现这种情况，无异于一场灾难。
 因此如果不是很有必要，可以不使用适配器，而是直接对系统进行重构。 2.由于 JAVA 至多继承一个类，
 所以至多只能适配一个适配者类，而且目标类必须是抽象类。
 */
//适配器模式
var Adapter;
(function (Adapter) {
    //充电
    var Mobile = /** @class */ (function () {
        function Mobile() {
        }
        Mobile.prototype.inputPower = function (power) {
            var provideV5Power = power.provideV5Power();
            console.log('我需要5V电压充电' + provideV5Power);
        };
        return Mobile;
    }());
    //家用220V电压
    var V220Power = /** @class */ (function () {
        function V220Power() {
        }
        V220Power.prototype.provideV220Power = function () {
            console.log('提供一个220V电压');
            return 220;
        };
        return V220Power;
    }());
    //适配器，把220V电压变成5V
    var V5PowerAdapter = /** @class */ (function () {
        function V5PowerAdapter(V220Power) {
            this.V220Power = V220Power;
        }
        V5PowerAdapter.prototype.provideV5Power = function () {
            var power = this.V220Power.provideV220Power();
            //power经过各种操作-->5
            console.log('适配器：我悄悄的适配了电压');
            return 5;
        };
        return V5PowerAdapter;
    }());
    var mobile = new Mobile();
    var v5Power = new V5PowerAdapter(new V220Power());
    mobile.inputPower(v5Power);
})(Adapter = exports.Adapter || (exports.Adapter = {}));
//# sourceMappingURL=Adapter.js.map