
//栈数据结构 先进后出 
export namespace Stack01 {
    //数组实现
    export class Stack<T>{
        private items: Array<T>
        constructor() {
            this.items = [];
        }

        push(element: T) {
            return this.items.push(element);
        }

        peek() {
            return this.items[this.items.length - 1];
        }

        pop() {
            return this.items.pop();
        }

        size() {
            return this.items.length;
        }

        clear() {
            this.items = [];
        }

        isEmpty() {
            return this.items.length == 0;
        }
    }

    //栈实现二进制
    function decimalToBinary(decNumber:number){
        let stack:Stack01.Stack<number> = new　Stack01.Stack();
        let binaryString = "";
        while(decNumber){
            stack.push(decNumber%2);
            decNumber = Math.floor(decNumber);
        }
        while(!stack.isEmpty()){
            binaryString += stack.pop();
        }
        return binaryString;
    }       
    
    //栈实现多种进制
    function baseConverter(decNumber:number,base:number = 2){
        const remStack = new Stack01.Stack<number>();
        const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                        
        let baseString = "";

        if(!(base > 2 && base <= 36)){
            return ''
        }
        while(decNumber > 0){
            remStack.push(decNumber % base)
            decNumber =Math.floor(decNumber / base);
        }

        while(!remStack.isEmpty()){
            baseString += digits[remStack.pop()];
        }
        return baseString;
    }

}

