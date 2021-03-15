import { Node } from '../models/linked-list-models';
import { defaultEquals } from '../util';
export default class LinkedList<T> {
    protected count: number;
    protected head: Node<T> | null;
    protected equalsFn: typeof defaultEquals;
    constructor();
    push(element: T): void;
    insert(element: T, index: number): boolean;
    getElementAt(index: number): any;
    indexOf(element: T): number;
    removeAt(index: number): any;
    remove(element: T): any;
    isEmpty(): boolean;
    size(): number;
    toString(separator?: string): string;
    getHead(): any;
    clear(): void;
}
//# sourceMappingURL=01%20%E9%93%BE%E8%A1%A8%E7%9A%84%E5%AE%9E%E7%8E%B0.d.ts.map