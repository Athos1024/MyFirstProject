namespace Queue02{
    
    class Deque<T>{
        private count:number;
        private lowestCount:number;
        private items:{[key:string]:T};

        constructor(){
            this.count = 0;
            this.lowestCount = 0;
            this.items = {};
        }

        addFront(...element:Array<T>):void{
            if(element.length  === 0) return;
            if(element.length > 1)return element.forEach((el)=> this.addFront(el));

            let value = element[0];
            
            if(this.isEmpty()) return this.addBack(value);

            if(this.lowestCount > 0){
                this.items[--this.lowestCount] = value;
            }else if(this.lowestCount == 0){
                for (let i = this.count; i > 0; i--) {
                    this.items[i] = this.items[i - 1];
                }
                this.items[0] = value;
            }
            this.count++;
        }


        addBack(...element:Array<T>):void{
            element.length == 1 ? this.items[this.lowestCount + this.count++] = element[0]:
             element.forEach((el)=> this.items[this.lowestCount　+ this.count++] = el);
        }

        isEmpty(){
            return this.count == 0
        }

        removeFront(){
            if(this.isEmpty()) return undefined;
            let res = this.items[this.lowestCount];
            delete this.items[this.lowestCount++];
            this.count--;
            return res;
        }

        peekBack(){
            return this.items[this.lowestCount + this.count -1];
        }

        size(){
            return this.count;
        }

        clear(){
            this.items ={};
            this.count = this.lowestCount = 0;
        }

        toString(){
            return this.isEmpty() ? "" :Object.keys(this.items).reduce((sum,item) => (sum+= item),"").slice(1);
        }
    }
}