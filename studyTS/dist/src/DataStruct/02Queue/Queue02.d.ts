export declare namespace Queue02 {
    class Deque<T> {
        private count;
        private lowestCount;
        private items;
        constructor();
        addFront(...element: Array<T>): any;
        addBack(...element: Array<T>): void;
        removeFront(): T;
        removeBack(): T;
        isEmpty(): boolean;
        peekFront(): T;
        peekBack(): T;
        size(): number;
        clear(): void;
    }
}
//# sourceMappingURL=Queue02.d.ts.map