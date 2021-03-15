declare namespace testScript {
    class Deque<T> {
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
}
//# sourceMappingURL=testScript.d.ts.map