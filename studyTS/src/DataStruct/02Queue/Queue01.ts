//队列前进先出
export namespace Queue01 {

    export class Queue<T>{
        private count: number;
        private lowestCount: number;
        private items: { [key: string]: T };
        constructor() {
            this.items = {};
            this.count = 0;
            this.lowestCount = 0;
        }

        enqueue(...element: Array<T>) {
            element.length == 1 ? this.items[this.lowestCount + this.count++] = element[0] :
                element.forEach(el => this.items[this.lowestCount + this.count++] = el);
        }

        dequeue() {
            if (this.isEmpty()) return;
            let res = this.items[this.lowestCount];
            delete this.items[this.lowestCount++];
            return res;
        }

        isEmpty() {
            return this.count == 0;
        }

        size() {
            return this.count;
        }

        clear() {
            this.count = 0;
            this.items = {};
            this.lowestCount = 0;
        }

        peek() {
            return this.isEmpty() ? undefined : this.items[this.lowestCount];
        }


    }
}