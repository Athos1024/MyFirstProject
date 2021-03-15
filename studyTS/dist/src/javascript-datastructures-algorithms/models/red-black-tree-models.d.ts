import { Node } from './binary-search-tree-models';
export declare const RED: any;
export declare const BLACK: any;
export declare class ReadBlackTreeNode<T> extends Node<T> {
    color: symbol;
    parent: ReadBlackTreeNode<T>;
    left: ReadBlackTreeNode<T>;
    right: ReadBlackTreeNode<T>;
    constructor(key: T);
    isRed(): boolean;
}
//# sourceMappingURL=red-black-tree-models.d.ts.map