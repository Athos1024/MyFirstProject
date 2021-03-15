export default class Deque<T> {
    private count;
    private lowestCount;
    private items;
    constructor();
    addFront(...element: Array<T>): void;
    addBack(...element: Array<T>): void;
    removeFront(): T;
    removeBack(): T;
    peekFront(): T;
    peekBack(): T;
    isEmpty(): boolean;
    size(): number;
    clear(): void;
    toString(separator?: string): string;
}
//# sourceMappingURL=02%20%E5%8F%8C%E7%AB%AF%E9%98%9F%E5%88%97%E5%AE%9E%E7%8E%B0.d.ts.map