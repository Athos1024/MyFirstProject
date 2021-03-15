"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _01_________1 = __importDefault(require("./01 \u4E8C\u53C9\u641C\u7D22\u6811\u7684\u5B9E\u73B0"));
var red_black_tree_models_1 = require("../models/red-black-tree-models");
var RedBlackTree = /** @class */ (function (_super) {
    __extends(RedBlackTree, _super);
    function RedBlackTree() {
        return _super.call(this) || this;
    }
    RedBlackTree.prototype.insert = function (key) {
        //重写insert方法
        if (this.root === null) {
            this.root = new red_black_tree_models_1.ReadBlackTreeNode(key);
            this.root.color = red_black_tree_models_1.BLACK;
        }
        else {
            var newNode = this.insertNode(this.root, key);
            //insertNode需要返回新插入的节点以验证在插入后，红黑树的规则是否得到了满足
            this.fixTreeProperties(newNode);
        }
    };
    RedBlackTree.prototype.insertNode = function (node, key) {
        //和二叉搜索树相比  多了两步
        //一  保留插入节点 对于父子节点的指针
        //二  返回插入的节点
        if (key > node.key) {
            if (node.right === null) {
                node.right = new red_black_tree_models_1.ReadBlackTreeNode(key);
                node.right.parent = node;
                return node.right;
            }
            else {
                return this.insertNode(node.right, key);
            }
        }
        else {
            if (node.left === null) {
                node.left = new red_black_tree_models_1.ReadBlackTreeNode(key);
                node.left.parent = node;
                return node.left;
            }
            else {
                return this.insertNode(node.left, key);
            }
        }
    };
    RedBlackTree.prototype.fixTreeProperties = function (node) {
        while (node && node.parent && node.parent.isRed() && node.color !== red_black_tree_models_1.BLACK) {
            var parent_1 = node.parent; // 拿到 P
            var grandParent = parent_1.parent; //拿到 G
            // 情形 A：父节点是左侧子节点
            if (grandParent && grandParent.left === parent_1) {
                //P = G.left
                var uncle = grandParent.right;
                // 情形 1A：叔节点也是红色——只需要重新填色
                if (uncle && uncle.color === red_black_tree_models_1.RED) {
                    grandParent.color = red_black_tree_models_1.RED;
                    parent_1.color = red_black_tree_models_1.BLACK;
                    uncle.color = red_black_tree_models_1.BLACK;
                    node = grandParent;
                }
                else {
                    // 情形 2A：节点是右侧子节点——先左旋转 再右旋转
                    if (node === parent_1.right) {
                        this.rotationRR(parent_1);
                        node = parent_1;
                        parent_1 = node.parent;
                    }
                    // 情形 3A：节点是左侧子节点——右旋转
                    this.rotationLL(grandParent);
                    //P 节点 与 G节点交换颜色
                    parent_1.color = red_black_tree_models_1.BLACK;
                    grandParent.color = red_black_tree_models_1.RED;
                    //循环的出口
                    node = parent_1;
                }
            }
            else {
                // 情形 B：父节点是右侧子节点
                var uncle = grandParent.left;
                // 情形 1B：叔节点是红色——只需要重新填色
                if (uncle && uncle.color === red_black_tree_models_1.RED) {
                    grandParent.color = red_black_tree_models_1.RED;
                    parent_1.color = red_black_tree_models_1.BLACK;
                    uncle.color = red_black_tree_models_1.BLACK;
                    node = grandParent;
                }
                else {
                    // 情形 2B：节点是左侧子节点——右旋转
                    if (node === parent_1.left) {
                        this.rotationLL(parent_1);
                        node = parent_1;
                        parent_1 = node.parent;
                    }
                    // 情形 3B：节点是右侧子节点——左旋转
                    this.rotationRR(grandParent);
                    parent_1.color = red_black_tree_models_1.BLACK;
                    grandParent.color = red_black_tree_models_1.RED;
                    node = parent_1;
                }
            }
        }
        this.root.color = red_black_tree_models_1.BLACK;
    };
    RedBlackTree.prototype.rotationLL = function (node) {
        //右旋转代码  node 就是 G
        var tmp = node.left; //  p
        node.left = tmp.right; //node.left = B
        if (tmp.right && tmp.right.key) {
            tmp.right.parent = node; // B.parent = G
        }
        tmp.parent = node.parent; // P.parent = G.parent
        if (!node.parent) {
            // 如果没有父亲   根就是 P
            this.root = tmp;
        }
        else {
            // G .left || G.right = p
            if (node === node.parent.left) {
                node.parent.left = tmp;
            }
            else {
                node.parent.right = tmp;
            }
        }
        // P. right = G
        tmp.right = node;
        // G .parent  = P
        node.parent = tmp;
    };
    RedBlackTree.prototype.rotationRR = function (node) {
        //左旋转  node  = P
        var tmp = node.right; // temp = N
        node.right = tmp.left; // P.right = N .left
        if (tmp.left && tmp.left.key) {
            tmp.left.parent = node; //
        }
        tmp.parent = node.parent;
        if (!node.parent) {
            this.root = tmp;
        }
        else {
            if (node === node.parent.left) {
                node.parent.left = tmp;
            }
            else {
                node.parent.right = tmp;
            }
        }
        tmp.left = node;
        node.parent = tmp;
    };
    return RedBlackTree;
}(_01_________1.default));
exports.default = RedBlackTree;
//# sourceMappingURL=03%20%E7%BA%A2%E9%BB%91%E6%A0%91%E5%AE%98%E6%96%B9%E7%89%88.js.map