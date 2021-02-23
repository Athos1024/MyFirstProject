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
/**
优点： 1、算法可以自由切换。 2、避免使用多重条件判断。 3、扩展性良好。
缺点： 1、策略类会增多。 2、所有策略类都需要对外暴露。
 */
//策略模式
var Strategy;
(function (Strategy) {
    var AttackJYSG = /** @class */ (function () {
        function AttackJYSG() {
        }
        AttackJYSG.prototype.attack = function () {
            console.log('九阳神功');
        };
        return AttackJYSG;
    }());
    var DefendTBS = /** @class */ (function () {
        function DefendTBS() {
        }
        DefendTBS.prototype.defend = function () {
            console.log('贴布衫');
        };
        return DefendTBS;
    }());
    var DisplayYZ = /** @class */ (function () {
        function DisplayYZ() {
        }
        DisplayYZ.prototype.display = function () {
            console.log('样子');
        };
        return DisplayYZ;
    }());
    var RunYWD = /** @class */ (function () {
        function RunYWD() {
        }
        RunYWD.prototype.run = function () {
            console.log('烟雾弹');
        };
        return RunYWD;
    }());
    var Role = /** @class */ (function () {
        function Role() {
        }
        Role.prototype.setDefendBehavior = function (defendBehavior) {
            this.defendBehavior = defendBehavior;
            return this;
        };
        Role.prototype.setAttackBehavior = function (attackBehavior) {
            this.attackBehavior = attackBehavior;
            return this;
        };
        Role.prototype.setDisplayBehavior = function (displayBeHavior) {
            this.displayBeHavior = displayBeHavior;
            return this;
        };
        Role.prototype.setRunBehavior = function (runBehavior) {
            this.runBehavior = runBehavior;
            return this;
        };
        Role.prototype.defend = function () {
            this.defendBehavior.defend();
        };
        Role.prototype.attack = function () {
            this.attackBehavior.attack();
        };
        Role.prototype.display = function () {
            this.displayBeHavior.display();
        };
        Role.prototype.run = function () {
            this.runBehavior.run();
        };
        return Role;
    }());
    var RoleA = /** @class */ (function (_super) {
        __extends(RoleA, _super);
        function RoleA(name) {
            var _this = _super.call(this) || this;
            _this.name = name;
            return _this;
        }
        return RoleA;
    }(Role));
    var roleA = new RoleA("A");
    roleA.setAttackBehavior(new AttackJYSG())
        .setDefendBehavior(new DefendTBS())
        .setDisplayBehavior(new DisplayYZ())
        .setRunBehavior(new RunYWD());
    roleA.attack();
    roleA.defend();
    roleA.display();
    roleA.run();
})(Strategy || (Strategy = {}));
//# sourceMappingURL=Strategy.js.map