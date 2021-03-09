"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interpreter = void 0;
var Interpreter;
(function (Interpreter) {
    /**
     * 优点： 1、它支持以不同的方式遍历一个聚合对象。 2、迭代器简化了聚合类。 3、在同一个聚合上可以有多个遍历。 4、在迭代器模式中，增加新的聚合类和迭代器类都很方便，无须修改原有代码。
    缺点：由于迭代器模式将存储数据和遍历数据的职责分离，增加新的聚合类需要对应增加新的迭代器类，类的个数成对增加，这在一定程度上增加了系统的复杂性。
     */
    var TerminalExpression = /** @class */ (function () {
        function TerminalExpression(data) {
            this.data = data;
        }
        TerminalExpression.prototype.interpret = function (context) {
            if (context.search(this.data) - 1) {
                return true;
            }
            return false;
        };
        return TerminalExpression;
    }());
    var OrExpression = /** @class */ (function () {
        function OrExpression(exp1, exp2) {
            this.exp1 = null;
            this.exp2 = null;
            this.exp1 = exp1;
            this.exp2 = exp2;
        }
        OrExpression.prototype.interpret = function (context) {
            return this.exp1.interpret(context) || this.exp2.interpret(context);
        };
        return OrExpression;
    }());
    var AndExpression = /** @class */ (function () {
        function AndExpression(exp1, exp2) {
            this.exp1 = null;
            this.epx2 = null;
            this.exp1 = exp1;
            this.epx2 = exp2;
        }
        AndExpression.prototype.interpret = function (context) {
            return this.exp1.interpret(context) && this.epx2.interpret(context);
        };
        return AndExpression;
    }());
    var Demo = /** @class */ (function () {
        function Demo() {
        }
        Demo.getMaleExpression = function () {
            var robert = new TerminalExpression("Robert");
            var john = new TerminalExpression("John");
            return new OrExpression(robert, john);
        };
        Demo.getMarriedWomanExpression = function () {
            var julie = new TerminalExpression("Julie");
            var married = new TerminalExpression("Married");
            return new AndExpression(julie, married);
        };
        Demo.main = function () {
            var isMale = this.getMaleExpression();
            var isMarriedWoman = this.getMarriedWomanExpression();
            console.log('', isMale.interpret("John"));
            console.log('', isMarriedWoman.interpret("Julie Married"));
        };
        return Demo;
    }());
})(Interpreter = exports.Interpreter || (exports.Interpreter = {}));
//# sourceMappingURL=Interpreter.js.map