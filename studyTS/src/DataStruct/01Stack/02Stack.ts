export namespace Stack02{
    //对象实现
    export class Stack<T>{
        private count:number;
        private items:{[key:string]:T};
        constructor(){
            this.count = 0;
            this.items = {};
        }

        push(element:T){
            this.items[this.count++] = element;
        }

        size(){
            return this.count;
        }

        isEmpty(){
            return this.count == 0;
        }

        peek(){
            if(this.isEmpty()) return undefined;
            return this.items[this.count -1];
        }

        pop(){
            if(this.isEmpty()) return undefined;
            return this.items[--this.count];
        }

        clear(){
            this.items = {};
            this.count = 0;
        }

        toString(separator = ","){
            return Object.keys(this.items).reduce((sum,item)=>{
                return sum += separator + item;
            },"").slice(1)
        }

    }
}