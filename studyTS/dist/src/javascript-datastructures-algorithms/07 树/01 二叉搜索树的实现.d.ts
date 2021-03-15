import { Node } from '../models/binary-search-tree-models';
export default class BinarySearchTree {
    protected root: Node<number>;
    constructor();
    protected insertNode(node: Node<number>, key: number): void;
    protected preOrderTraverseNode(node: Node<number>, callback: (key: number) => void): void;
    protected inOrderTraverseNode(node: Node<number>, callback: (key: number) => void): void;
    protected postOrderTraverseNode(node: Node<number>, callback: (key: number) => void): void;
    protected getMinNode(node: Node<number>): any;
    protected getMaxNode(node: Node<number>): any;
    protected searchNode(node: Node<number>, key: number): any;
    protected removeNode(node: Node<number>, key: number): any;
    insert(key: number): void;
    search(key: number): any;
    preOrderTraverse(callback: (key: number) => void): void;
    inOrderTraverse(callback: (key: number) => void): void;
    postOrderTraverse(callback: (key: number) => void): void;
    min(): any;
    max(): any;
    remove(key: number): void;
}
//# sourceMappingURL=01%20%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E7%9A%84%E5%AE%9E%E7%8E%B0.d.ts.map