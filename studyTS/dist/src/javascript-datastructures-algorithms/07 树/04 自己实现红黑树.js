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
            //只有情况三 情况四 情况五 进入循环
            var parent_1 = node.parent; // 拿到 P
            var grandParent = parent_1.parent; //拿到 G
            //  P 在 G 的左边
            if (grandParent && grandParent.left === parent_1) {
                var uncle = grandParent.right; //拿到 U
                if (uncle && uncle.color === red_black_tree_models_1.RED) {
                    // 情况 三   => P 与 U 都是红色 => 变色
                    grandParent.color = red_black_tree_models_1.RED;
                    parent_1.color = red_black_tree_models_1.BLACK;
                    uncle.color = red_black_tree_models_1.BLACK;
                    //循环的出口
                    node = grandParent;
                }
                else {
                    if (node === parent_1.right) {
                        //情况五  => N 在 P的右侧  => 先左旋转
                        this.rotationRR(parent_1);
                        // 再将整个节点当作 新插入节点 的 走 右旋转
                        node = parent_1;
                        parent_1 = node.parent;
                    }
                    //情况四 => N 在 P的左侧 =>右旋转
                    this.rotationLL(grandParent);
                    //P 节点 与 G节点交换颜色
                    parent_1.color = red_black_tree_models_1.BLACK;
                    grandParent.color = red_black_tree_models_1.RED;
                    //循环的出口
                    node = parent_1;
                }
            }
            else {
                // P 在 G 的右边 与上面同理
                var uncle = grandParent.left;
                if (uncle && uncle.color === red_black_tree_models_1.RED) {
                    grandParent.color = red_black_tree_models_1.RED;
                    parent_1.color = red_black_tree_models_1.BLACK;
                    uncle.color = red_black_tree_models_1.BLACK;
                    node = grandParent;
                }
                else {
                    if (node === parent_1.left) {
                        this.rotationLL(parent_1);
                        node = parent_1;
                        parent_1 = node.parent;
                    }
                    this.rotationRR(grandParent);
                    parent_1.color = red_black_tree_models_1.BLACK;
                    grandParent.color = red_black_tree_models_1.RED;
                    node = parent_1;
                }
            }
        }
        //始终保持 root 颜色为黑色
        this.root.color = red_black_tree_models_1.BLACK;
    };
    RedBlackTree.prototype.rotationLL = function (node) {
        //向右旋转 , 这里的代码结合 右旋转的图来看
        var G = node; //传进来的是新节点的祖父节点
        var P = node.left; //找到新节点的父节点
        //第一步 :建立 G 与 B 的联系
        G.left = P.right;
        if (P.right !== null) {
            P.right.parent = G;
        }
        //第二步 ：将 P 和 G 置换
        P.parent = G.parent;
        if (!G.parent) {
            //如果G 没有父亲
            this.root = P;
        }
        else {
            if ((G.parent.left = G)) {
                G.parent.left = P;
            }
            else {
                G.parent.right = P;
            }
        }
        //第三步 : 建立 P 与 G 的联系
        P.right = G;
        G.parent = P;
    };
    RedBlackTree.prototype.rotationRR = function (node) {
        //左旋转 ,与右旋转相反,你可以自己画个图来读
        var G = node;
        var P = node.right;
        //第一步 建立G 与B 的链接
        G.right = P.left;
        if (P.left !== null) {
            P.left.parent = G;
        }
        //第二步 置换 P 与 G
        P.parent = G.parent;
        if (!G.parent) {
            //如果G 没有父亲
            this.root = P;
        }
        else {
            if ((G.parent.left = G)) {
                G.parent.left = P;
            }
            else {
                G.parent.right = P;
            }
        }
        //第三步 建立 P 与 G 的连接
        P.left = G;
        G.parent = P;
    };
    return RedBlackTree;
}(_01_________1.default));
exports.default = RedBlackTree;
//# sourceMappingURL=04%20%E8%87%AA%E5%B7%B1%E5%AE%9E%E7%8E%B0%E7%BA%A2%E9%BB%91%E6%A0%91.js.map