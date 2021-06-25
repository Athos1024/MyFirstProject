//栈数据结构 先进后出 
namespace Stack02{

    //对象实现
    export class Stack<T>{
        private items:{[key:string]:T};
        private count:number;

        constructor(){
            this.items = {};
            this.count = 0;
        }

        push(element:T){
            return this.items[this.count++] = element ;
        }

        peek(){
            if(this.isEmpty()) return undefined;
            return this.items[this.count - 1];
        }

        pop(){
            if(this.isEmpty()) return undefined;
            let res = this.items[this.count--];
            delete this.items[this.count];
            return res;
        }

        isEmpty(){
            return this.count == 0;
        }

        size(){
            return this.count;
        }

        clear(){
            this.items = {};
            this.count = 0;
        }
    }

}