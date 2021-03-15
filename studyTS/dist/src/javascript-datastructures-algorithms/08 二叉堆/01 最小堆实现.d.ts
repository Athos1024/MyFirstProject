export default class MinHeap {
    protected heap: Array<number>;
    constructor();
    protected getLeftIndex(index: number): number;
    protected getRightIndex(index: number): number;
    protected getParentIndex(index: number): number;
    protected swap(arr: any[], a: number, b: number): void;
    protected preTraverseNode(index: number, cb: (value: number) => void): void;
    protected compare(a: number, b: number): boolean;
    protected siftUp(index: number): void;
    protected siftDown(index: number): void;
    insert(value: number): boolean;
    extract(): number;
    findMinimum(): number;
    size(): number;
    isEmpty(): boolean;
    preTraverse(cb: (value: number) => void): void;
}
//# sourceMappingURL=01%20%E6%9C%80%E5%B0%8F%E5%A0%86%E5%AE%9E%E7%8E%B0.d.ts.map