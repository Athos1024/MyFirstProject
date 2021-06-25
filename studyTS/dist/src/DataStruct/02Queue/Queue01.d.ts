export declare namespace Queue01 {
    class Queue<T> {
        private count;
        private lowestCount;
        private items;
        constructor();
        enqueue(...element: Array<T>): void;
        dequeue(): T;
        isEmpty(): boolean;
        size(): number;
        clear(): void;
        peek(): T;
    }
}
//# sourceMappingURL=Queue01.d.ts.map