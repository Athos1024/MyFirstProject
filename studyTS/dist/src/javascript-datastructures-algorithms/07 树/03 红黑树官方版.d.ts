import BST from './01 二叉搜索树的实现';
import { ReadBlackTreeNode as Node } from '../models/red-black-tree-models';
export default class RedBlackTree extends BST {
    root: Node<number>;
    constructor();
    insert(key: number): void;
    insertNode(node: Node<number>, key: number): any;
    private fixTreeProperties;
    private rotationLL;
    private rotationRR;
}
//# sourceMappingURL=03%20%E7%BA%A2%E9%BB%91%E6%A0%91%E5%AE%98%E6%96%B9%E7%89%88.d.ts.map