export namespace Interpreter{

    //表达式接口
    interface Expression{
        interpret(context:string):boolean
    }

    //实现接口
    class TerminalExpresssion implements Expression{

        constructor(data:string){
            this.data = data;
        }

        interpret(context: string): boolean {
            if(this.data.search(context) > -1){
                return true;
            }
            return false;
        }
        private data:string;
    }

    class OrExpression implements Expression{
        private exp1:Expression = null;
        private exp2:Expression = null;

        constructor(exp1:Expression,exp2:Expression){
            this.exp1 = exp1;
            this.exp2 = exp2;
        }

        interpret(context: string): boolean {
            return this.exp1.interpret(context) || this.exp2.interpret(context);
        }
    }

    class AndExpression implements Expression{
        private exp1:Expression = null;
        private exp2:Expression = null;

        constructor(exp1:Expression,exp2:Expression){
            this.exp1 =exp1;
            this.exp2 =exp2;
        }

        interpret(context: string): boolean {
            return  this.exp1.interpret(context) || this.exp2.interpret(context);
        }
    }


    export class InterperterDemo{

        public static getMaleExpression():Expression{
            let robert:Expression = new TerminalExpresssion("小A");
            let john:Expression = new TerminalExpresssion("小B");
            return new OrExpression(robert,john);
        }

        public static getMarriedWoman():Expression{
            let julie:Expression = new TerminalExpresssion("小C");
            let married:Expression = new TerminalExpresssion("小D");

            return new AndExpression(julie,married);
        }

        public static mian():void{
            let isMale = InterperterDemo.getMaleExpression();
            let isMarriedWoman = InterperterDemo.getMarriedWoman();

            console.log('john is male ' + isMale.interpret("5555"));
            console.log('julie is a married women?'+ isMarriedWoman.interpret("小C"));
        }

    }


}