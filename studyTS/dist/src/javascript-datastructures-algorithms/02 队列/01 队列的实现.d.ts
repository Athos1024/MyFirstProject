export default class Queue<T> {
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
    toString(separator?: string): string;
}
//# sourceMappingURL=01%20%E9%98%9F%E5%88%97%E7%9A%84%E5%AE%9E%E7%8E%B0.d.ts.map