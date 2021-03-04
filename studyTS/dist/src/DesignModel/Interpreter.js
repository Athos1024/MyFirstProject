"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interpreter = void 0;
var Interpreter;
(function (Interpreter) {
    //实现接口
    var TerminalExpresssion = /** @class */ (function () {
        function TerminalExpresssion(data) {
            this.data = data;
        }
        TerminalExpresssion.prototype.interpret = function (context) {
            if (this.data.search(context) > -1) {
                return true;
            }
            return false;
        };
        return TerminalExpresssion;
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
            this.exp2 = null;
            this.exp1 = exp1;
            this.exp2 = exp2;
        }
        AndExpression.prototype.interpret = function (context) {
            return this.exp1.interpret(context) || this.exp2.interpret(context);
        };
        return AndExpression;
    }());
    var InterperterDemo = /** @class */ (function () {
        function InterperterDemo() {
        }
        InterperterDemo.getMaleExpression = function () {
            var robert = new TerminalExpresssion("小A");
            var john = new TerminalExpresssion("小B");
            return new OrExpression(robert, john);
        };
        InterperterDemo.getMarriedWoman = function () {
            var julie = new TerminalExpresssion("小C");
            var married = new TerminalExpresssion("小D");
            return new AndExpression(julie, married);
        };
        InterperterDemo.mian = function () {
            var isMale = InterperterDemo.getMaleExpression();
            var isMarriedWoman = InterperterDemo.getMarriedWoman();
            console.log('john is male ' + isMale.interpret("5555"));
            console.log('julie is a married women?' + isMarriedWoman.interpret("小C"));
        };
        return InterperterDemo;
    }());
    Interpreter.InterperterDemo = InterperterDemo;
})(Interpreter = exports.Interpreter || (exports.Interpreter = {}));
//# sourceMappingURL=Interpreter.js.map