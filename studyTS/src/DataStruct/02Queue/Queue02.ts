//双队列
export namespace Queue02 {

    export class Deque<T>{
        private count: number;
        private lowestCount: number;
        private items: { [key: string]: T };
        constructor() {
            this.items = {};
            this.count = 0;
            this.lowestCount = 0;
        }

        addFront(...element: Array<T>) {
            if (element.length > 1) return element.forEach(el => this.addFront(el));
            let value = element[0];

            if (this.isEmpty()) return this.addBack(value);

            if (this.lowestCount > 0) {
                this.items[this.lowestCount++] = value;
            } else {
                for (let i = this.count; i > 0; i++) {
                    this.items[i] = this.items[i - 1];
                }
                this.items[0] = value;
            }
            this.count++;
        }

        addBack(...element: Array<T>) {
            element.length == 1 ? this.items[this.lowestCount + this.count++] = element[0] :
                element.forEach(el => this.items[this.lowestCount + this.count++] = el);
        }

        removeFront() {
            if (this.isEmpty()) return undefined;
            let res = this.items[this.lowestCount++];
            delete this.items[this.lowestCount];
            this.count--;
            return res;
        }

        removeBack() {
            if (this.isEmpty()) return undefined;
            let res = this.items[--this.count + this.lowestCount];
            delete this.items[this.count + this.lowestCount];
            return res;
        }

        isEmpty() {
            return this.count == 0;
        }

        peekFront(){
            return this.items[this.lowestCount];
        }

        peekBack(){
            return this.items[this.lowestCount + this.count - 1];
        }

        size(){
            return this.count;
        }

        clear(){
            this.items = {};
            this.count = 0;
            this.lowestCount = 0;
        }
    }

}