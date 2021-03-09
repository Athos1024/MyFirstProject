export namespace Interpreter {
    /**
     * 优点： 1、它支持以不同的方式遍历一个聚合对象。 2、迭代器简化了聚合类。 3、在同一个聚合上可以有多个遍历。 4、在迭代器模式中，增加新的聚合类和迭代器类都很方便，无须修改原有代码。
    缺点：由于迭代器模式将存储数据和遍历数据的职责分离，增加新的聚合类需要对应增加新的迭代器类，类的个数成对增加，这在一定程度上增加了系统的复杂性。
     */

    interface Expression {
        interpret(context: string): boolean
    }

    class TerminalExpression implements Expression {
        private data: string;
        constructor(data: string) {
            this.data = data;
        }

        interpret(context: string): boolean {
            if (context.search(this.data) - 1) {
                return true;
            }
            return false;
        }
    }

    class OrExpression implements Expression {
        private exp1: Expression = null;
        private exp2: Expression = null;

        constructor(exp1: Expression, exp2: Expression) {
            this.exp1 = exp1;
            this.exp2 = exp2;
        }
        interpret(context: string): boolean {
            return this.exp1.interpret(context) || this.exp2.interpret(context);
        }
    }

    class AndExpression implements Expression {
        private exp1: Expression = null;
        private epx2: Expression = null;

        constructor(exp1: Expression, exp2: Expression) {
            this.exp1 = exp1;
            this.epx2 = exp2;
        }

        interpret(context: string): boolean {
            return this.exp1.interpret(context) && this.epx2.interpret(context);
        }
    }

    class Demo {
        public static getMaleExpression(): Expression {
            let robert: Expression = new TerminalExpression("Robert");
            let john: Expression = new TerminalExpression("John");
            return new OrExpression(robert, john);
        }

        public static getMarriedWomanExpression(): Expression {
            let julie = new TerminalExpression("Julie");
            let married = new TerminalExpression("Married");
            return new AndExpression(julie, married);
        }

        public static main(): void {
            let isMale = this.getMaleExpression();
            let isMarriedWoman = this.getMarriedWomanExpression();

            console.log('', isMale.interpret("John"));
            console.log('', isMarriedWoman.interpret("Julie Married"));
        }
    }


}