export namespace Queue01 {
    //先进先出
    export class Queue<T>{
        private count: number;
        private lowestCount: number;
        private items: { [key: string]: T };
        constructor() {
            this.count = 0;
            this.items = {};
            this.lowestCount = 0;
        }

        enqueue(...element: Array<T>) {
            element.length == 1 ? (this.items[this.lowestCount + this.count++] = element[0]) :
                element.forEach(el => { return this.items[this.lowestCount + this.count++] = el })
        }

        dequeue() {
            if (this.isEmpty()) return undefined;
            let result = this.items[this.lowestCount];
            delete this.items[this.lowestCount++];
            this.count--
            return result;
        }

        isEmpty() {
            return this.count == 0;
        }

        peek() {
            if (this.isEmpty()) return undefined;
            return this.items[this.lowestCount]
        }

        size() {
            return this.count;
        }

        clear() {
            this.items = {};
            this.count = this.lowestCount = 0;
        }

        toString() {
            if (this.isEmpty()) return ""
            return Object.keys(this.items).reduce((sum, item) => {
                return sum += item;
            }, "").slice(1);
        }


    }


}