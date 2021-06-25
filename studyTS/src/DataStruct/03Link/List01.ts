namespace List01 {
    class Node<T>{
        public element: T;
        public next: Node<T>;
        constructor(e) {
            this.element = e;
            this.next = null;
        }
    }

    class List<T>{
        private count: number;
        private head: Node<T>;
        constructor() {
            this.count = 0;
            this.head = null;
        }

        push(element: T) {
            let node = new Node<T>(element);
            if (this.count == 0) {
                this.head = node;
            } else {
                let current = this.head;
                while (current.next) {
                    current = current.next;
                }
                current.next = node;
            }
            this.count++;
        }

        insert(element: T, index: number) {
            if (index < 0 || index > this.count) return null;
            let current = this.head;
            let node = new Node<T>(element)
            if(index == 0){
                this.head = node;
                this.head.next = current;
            }else{
                let previous = this.getElement(index - 1);
                current = previous.next;
                previous.next = node;
                node.next = current;
            }
            this.count++;
        }

        getElement(index:number){
            if(index < 0|| index >= this.count) return undefined;
            let currnet = this.head;
            for (let i = 0; i < index; i++) {
                currnet = currnet.next;
            }
            return currnet;
        }

        indexOf(element:T){
            let res = 0;
            let temp =false;
            let current = this.head;
            while(current.next){
                if(current.element == element){
                    temp =true;
                    break;
                }
                res++;
                current =current.next;
            }
            return temp ? res : - 1;
        }

        removeAt(index:number){
            if(index < 0 || index > this.count) return undefined;
            
            if(index == 0){
                
            }

        }

    }

}