export declare namespace Interpreter {
    interface Expression {
        interpret(context: string): boolean;
    }
    export class InterperterDemo {
        static getMaleExpression(): Expression;
        static getMarriedWoman(): Expression;
        static mian(): void;
    }
    export {};
}
//# sourceMappingURL=Interpreter.d.ts.map