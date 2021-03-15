"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mediator = void 0;
var Mediator;
(function (Mediator_1) {
    // 优点： 1、降低了类的复杂度，将一对多转化成了一对一。 2、各个类之间的解耦。 3、符合迪米特原则。
    // 缺点：中介者会庞大，变得复杂难以维护
    //创建中介者
    var ChatRoom = /** @class */ (function () {
        function ChatRoom() {
        }
        ChatRoom.showMessage = function (user, msg) {
            console.log(new Date().toString() + " [" + user.Name + "]:", msg);
        };
        return ChatRoom;
    }());
    //用户类
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        Object.defineProperty(User.prototype, "Name", {
            get: function () {
                return this.name;
            },
            set: function (name) {
                this.name = name;
            },
            enumerable: false,
            configurable: true
        });
        User.prototype.sendMessage = function (msg) {
            ChatRoom.showMessage(this, msg);
        };
        return User;
    }());
    var Mediator = /** @class */ (function () {
        function Mediator() {
        }
        Mediator.main = function () {
            var user1 = new User("小A");
            var user2 = new User("小c");
            user1.sendMessage("hello");
            user2.sendMessage("world");
        };
        return Mediator;
    }());
    Mediator_1.Mediator = Mediator;
})(Mediator = exports.Mediator || (exports.Mediator = {}));
//# sourceMappingURL=Mediator.js.map