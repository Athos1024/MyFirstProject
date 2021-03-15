export declare class Node<T> {
    element: T;
    next: Node<T> | null;
    constructor(element: T);
}
export declare class DoublyNode<T> extends Node<T> {
    prev: DoublyNode<T>;
    next: DoublyNode<T> | null;
    constructor(element: T);
}
//# sourceMappingURL=linked-list-models.d.ts.map