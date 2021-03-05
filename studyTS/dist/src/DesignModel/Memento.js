"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Memento = void 0;
//备忘录模式
var Memento;
(function (Memento_1) {
    /**
    优点： 1、给用户提供了一种可以恢复状态的机制，可以使用户能够比较方便地回到某个历史的状态。 2、实现了信息的封装，使得用户不需要关心状态的保存细节。
    缺点：消耗资源。如果类的成员变量过多，势必会占用比较大的资源，而且每一次保存都会消耗一定的内存。
     */
    var Memento = /** @class */ (function () {
        function Memento(state) {
            this.state = state;
        }
        Object.defineProperty(Memento.prototype, "getState", {
            get: function () {
                return this.state;
            },
            enumerable: false,
            configurable: true
        });
        return Memento;
    }());
    var Originator = /** @class */ (function () {
        function Originator() {
        }
        Originator.prototype.setState = function (state) {
            this.state = state;
        };
        Originator.prototype.getState = function () {
            return this.state;
        };
        Originator.prototype.saveStateToMemento = function () {
            return new Memento(this.state);
        };
        Originator.prototype.getStateFromMemento = function (memento) {
            this.state = memento.getState;
        };
        return Originator;
    }());
    var CareTaker = /** @class */ (function () {
        function CareTaker() {
            this.mementoList = [];
        }
        CareTaker.prototype.add = function (state) {
            this.mementoList.push(state);
        };
        CareTaker.prototype.get = function (index) {
            return this.mementoList[index];
        };
        return CareTaker;
    }());
    var MementoDemo = /** @class */ (function () {
        function MementoDemo() {
        }
        MementoDemo.main = function () {
            var originator = new Originator();
            var careTaker = new CareTaker();
            originator.setState("state #1");
            originator.setState("state #2");
            careTaker.add(originator.saveStateToMemento());
            originator.setState("state #3");
            careTaker.add(originator.saveStateToMemento());
            originator.setState("state #4");
            console.log('current state', originator.getState());
            originator.getStateFromMemento(careTaker.get(0));
            console.log("first saved state:", originator.getState());
            originator.getStateFromMemento(careTaker.get(1));
            console.log("second savad state:", originator.getState());
        };
        return MementoDemo;
    }());
    Memento_1.MementoDemo = MementoDemo;
})(Memento = exports.Memento || (exports.Memento = {}));
//# sourceMappingURL=Memento.js.map