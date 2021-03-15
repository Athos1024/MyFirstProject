"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var binary_search_tree_models_1 = require("../models/binary-search-tree-models");
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    /* 私有方法 */
    BinarySearchTree.prototype.insertNode = function (node, key) {
        //插入操作实体函数
        if (key > node.key) {
            //在右边插入
            if (node.right === null) {
                //如果左节点为空 插入 --出口
                node.right = new binary_search_tree_models_1.Node(key);
            }
            else {
                //否则进入递归  --入口
                this.insertNode(node.right, key);
            }
        }
        else {
            //在左边插入同理
            if (node.left === null) {
                node.left = new binary_search_tree_models_1.Node(key);
            }
            else {
                this.insertNode(node.left, key);
            }
        }
    };
    BinarySearchTree.prototype.preOrderTraverseNode = function (node, callback) {
        //先序遍历实体函数
        if (node != null) {
            callback(node.key);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    };
    BinarySearchTree.prototype.inOrderTraverseNode = function (node, callback) {
        //中序遍历实体函数
        if (node != null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback);
        }
    };
    BinarySearchTree.prototype.postOrderTraverseNode = function (node, callback) {
        //后序遍历实体函数
        if (node !== null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    };
    BinarySearchTree.prototype.getMinNode = function (node) {
        //得到最小的节点
        while (node !== null && node.left !== null) {
            node = node.left;
        }
        return node;
    };
    BinarySearchTree.prototype.getMaxNode = function (node) {
        //得到最大的节点
        while (node !== null && node.right !== null) {
            node = node.right;
        }
        return node;
    };
    BinarySearchTree.prototype.searchNode = function (node, key) {
        //根据键值查找节点 递归版
        if (node === null)
            return false;
        if (key > node.key)
            return this.searchNode(node.right, key);
        if (key < node.key)
            return this.searchNode(node.left, key);
        return true;
    };
    BinarySearchTree.prototype.removeNode = function (node, key) {
        if (node === null)
            return null;
        if (key === node.key) {
            //执行删除
            if ((node.left === node.right) === null) {
                //第一种情况 ,节点为叶子节点
                node = null;
                return node;
            }
            else if (node.left === null || node.right === null) {
                //第二种情况,节点只有一个子节点
                node = node.right || node.left;
                return node;
            }
            else {
                //第三种情况 ,节点有两个子节点
                var aux = this.getMinNode(node.right);
                node.key = aux.key;
                node.right = this.removeNode(node.right, aux.key);
                return node;
            }
        }
        else if (key > node.key) {
            //指定的key较大 传入右节点递归
            node.right = this.removeNode(node.right, key);
            return node;
        }
        else if (key < node.key) {
            //指定的key较小 传入左节点递归
            node.left = this.removeNode(node.left, key);
            return node;
        }
    };
    /* 外部方法  */
    BinarySearchTree.prototype.insert = function (key) {
        //向数中插入一个新的键
        if (this.root === null) {
            //如果树为空 直接插入
            this.root = new binary_search_tree_models_1.Node(key);
        }
        else {
            //否则交给 插入函数去处理
            this.insertNode(this.root, key);
        }
    };
    BinarySearchTree.prototype.search = function (key) {
        //在树中查找一个键。如果节点存在，则返回 true；如果不存在，则返回false
        // ----递归版本
        return this.searchNode(this.root, key);
        // ----while循环版本 帮助理解
        // let node = this.root
        // while (node !== null) {
        //   if (key > node.key) {
        //     node = node.right
        //   } else if (key < node.key) {
        //     node = node.left
        //   } else {
        //     return true
        //   }
        // }
        // return false
    };
    BinarySearchTree.prototype.preOrderTraverse = function (callback) {
        //先序遍历
        this.preOrderTraverseNode(this.root, callback);
    };
    BinarySearchTree.prototype.inOrderTraverse = function (callback) {
        //中序遍历
        this.inOrderTraverseNode(this.root, callback);
    };
    BinarySearchTree.prototype.postOrderTraverse = function (callback) {
        //后序遍历
        this.postOrderTraverseNode(this.root, callback);
    };
    BinarySearchTree.prototype.min = function () {
        //返回数中最小的键
        if (this.root === null)
            return null;
        return this.getMinNode(this.root).key;
    };
    BinarySearchTree.prototype.max = function () {
        //返回数中最大的键
        if (this.root === null)
            return null;
        return this.getMaxNode(this.root).key;
    };
    BinarySearchTree.prototype.remove = function (key) {
        //从树中移除某个键
        this.root = this.removeNode(this.root, key);
    };
    return BinarySearchTree;
}());
exports.default = BinarySearchTree;
//# sourceMappingURL=01%20%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E7%9A%84%E5%AE%9E%E7%8E%B0.js.map