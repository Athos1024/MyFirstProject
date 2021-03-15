export declare namespace Queue01 {
    class Queue<T> {
        private count;
        private lowestCount;
        private items;
        constructor();
        enqueue(...element: Array<T>): void;
        dequeue(): T;
        isEmpty(): boolean;
        peek(): T;
        size(): number;
        clear(): void;
        toString(): string;
    }
}
//# sourceMappingURL=Queue01.d.ts.map