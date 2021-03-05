"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.state = void 0;
//状态模式
var state;
(function (state_1) {
    /**
    优点： 1、封装了转换规则。 2、枚举可能的状态，在枚举状态之前需要确定状态种类。 3、将所有与某个状态有关的行为放到一个类中，并且可以方便地增加新的状态，只需要改变对象状态即可改变对象的行为。 4、允许状态转换逻辑与状态对象合成一体，而不是某一个巨大的条件语句块。 5、可以让多个环境对象共享一个状态对象，从而减少系统中对象的个数。
    缺点： 1、状态模式的使用必然会增加系统类和对象的个数。 2、状态模式的结构与实现都较为复杂，如果使用不当将导致程序结构和代码的混乱。 3、状态模式对"开闭原则"的支持并不太好，对于可以切换状态的状态模式，增加新的状态类需要修改那些负责状态转换的源代码，否则无法切换到新增状态，而且修改某个状态类的行为也需修改对应类的源代码。
     */
    var ConcreteStateA = /** @class */ (function () {
        function ConcreteStateA() {
        }
        ConcreteStateA.prototype.handle = function (context) {
            console.log("handle method of concreteStateA AAAAAAAAAAAAAAAAAAA!");
            context.State = new ConcreteStateB();
        };
        return ConcreteStateA;
    }());
    var ConcreteStateB = /** @class */ (function () {
        function ConcreteStateB() {
        }
        ConcreteStateB.prototype.handle = function (context) {
            console.log('handle method of concreteStateB BBBBBBBBBBBBBBBBBBBB!');
            context.State = new ConcreteStateA();
        };
        return ConcreteStateB;
    }());
    var Context = /** @class */ (function () {
        function Context(state) {
            this.state = state;
        }
        Object.defineProperty(Context.prototype, "State", {
            get: function () {
                return this.state;
            },
            set: function (state) {
                this.state = state;
            },
            enumerable: false,
            configurable: true
        });
        Context.prototype.request = function () {
            console.log('request is being called');
            this.state.handle(this);
        };
        return Context;
    }());
    var StateDemo = /** @class */ (function () {
        function StateDemo() {
        }
        StateDemo.main = function () {
            var context = new Context(new ConcreteStateA());
            context.request();
            context.request();
            context.request();
        };
        return StateDemo;
    }());
    state_1.StateDemo = StateDemo;
})(state = exports.state || (exports.state = {}));
//# sourceMappingURL=State.js.map