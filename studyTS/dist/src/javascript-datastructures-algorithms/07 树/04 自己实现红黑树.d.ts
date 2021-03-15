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
//# sourceMappingURL=04%20%E8%87%AA%E5%B7%B1%E5%AE%9E%E7%8E%B0%E7%BA%A2%E9%BB%91%E6%A0%91.d.ts.map