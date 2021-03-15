"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _01_________1 = __importDefault(require("./01 \u4E8C\u53C9\u641C\u7D22\u6811\u7684\u5B9E\u73B0"));
describe('二叉搜索树测试', function () {
    var bst = new _01_________1.default();
    bst.insert(11);
    bst.insert(7);
    bst.insert(5);
    bst.insert(9);
    bst.insert(3);
    bst.insert(6);
    bst.insert(8);
    bst.insert(10);
    bst.insert(15);
    bst.insert(13);
    bst.insert(20);
    bst.insert(12);
    bst.insert(14);
    bst.insert(18);
    bst.insert(25);
    test('先序遍历测试', function () {
        var sum = 0;
        var str = '';
        bst.preOrderTraverse(function (key) {
            sum = sum + key;
            str = str + ',' + key;
        });
        expect(sum).toBe(176);
        expect(str.slice(1)).toBe('11,7,5,3,6,9,8,10,15,13,12,14,20,18,25');
    });
    test('中序遍历测试', function () {
        var sum = 0;
        var str = '';
        bst.inOrderTraverse(function (key) {
            sum = sum + key;
            str = str + ',' + key;
        });
        expect(sum).toBe(176);
        expect(str.slice(1)).toBe('3,5,6,7,8,9,10,11,12,13,14,15,18,20,25');
    });
    test('后序遍历测试', function () {
        var sum = 0;
        var str = '';
        bst.postOrderTraverse(function (key) {
            sum = sum + key;
            str = str + ',' + key;
        });
        expect(sum).toBe(176);
        expect(str.slice(1)).toBe('3,6,5,8,10,9,7,12,14,13,18,25,20,15,11');
    });
    test('得到最小值测试', function () {
        expect(bst.min()).toBe(3);
    });
    test('得到最大值测试', function () {
        expect(bst.max()).toBe(25);
    });
    test('查找特定值测试', function () {
        expect(bst.search(25)).toBe(true);
        expect(bst.search(7)).toBe(true);
        expect(bst.search(18)).toBe(true);
        expect(bst.search(3)).toBe(true);
        expect(bst.search(100)).toBe(false);
    });
    test('删除节点测试', function () {
        var str = '';
        bst.remove(8);
        //删除8 测试先序
        bst.preOrderTraverse(function (key) {
            str = str + ',' + key;
        });
        expect(str.slice(1)).toBe('11,7,5,3,6,9,10,15,13,12,14,20,18,25');
        //删除9 测试中序
        bst.remove(9);
        str = '';
        bst.inOrderTraverse(function (key) {
            str = str + ',' + key;
        });
        expect(str.slice(1)).toBe('3,5,6,7,10,11,12,13,14,15,18,20,25');
        //删除15 测试后序
        bst.remove(15);
        str = '';
        bst.postOrderTraverse(function (key) {
            str = str + ',' + key;
        });
        expect(str.slice(1)).toBe('3,6,5,10,7,12,14,13,25,20,18,11');
    });
});
//# sourceMappingURL=BST.test.js.map