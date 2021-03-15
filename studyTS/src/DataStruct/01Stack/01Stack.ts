namespace Stack01{
    //后进先出
    //数组实现
    class Stack<T>{
        private items:Array<T>;
        constructor(){
            this.items = [];
        }

        push(element:T){
            this.items.push(element);
        }

        pop():T{
            return this.items.pop();
        }

        peek():T{
            return this.items[this.items.length -1];
        }

        isEmpty():boolean{
            return this.items.length == 0;
        }

        size():number{
            return this.items.length;
        }
        clear(){
            this.items = [];
        }

        toString(separator = ","){
            return this.items.join(separator);
        }
    }
}