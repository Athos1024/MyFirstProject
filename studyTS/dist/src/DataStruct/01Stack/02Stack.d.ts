export declare namespace Stack02 {
    class Stack<T> {
        private count;
        private items;
        constructor();
        push(element: T): void;
        size(): number;
        isEmpty(): boolean;
        peek(): T;
        pop(): T;
        clear(): void;
        toString(separator?: string): string;
    }
}
//# sourceMappingURL=02Stack.d.ts.map