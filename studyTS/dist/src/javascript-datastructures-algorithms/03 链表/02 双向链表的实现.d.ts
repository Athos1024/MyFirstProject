import LinkedList from './01 链表的实现';
import { DoublyNode } from '../models/linked-list-models';
export default class DoublyLikedList<T> extends LinkedList<T> {
    private tail;
    head: DoublyNode<T> | null;
    constructor();
    push(element: T): void;
    insert(element: T, index: number): boolean;
    removeAt(index: number): any;
    clear(): void;
    inverseToString(separator?: string): string;
    getTail(): any;
}
//# sourceMappingURL=02%20%E5%8F%8C%E5%90%91%E9%93%BE%E8%A1%A8%E7%9A%84%E5%AE%9E%E7%8E%B0.d.ts.map