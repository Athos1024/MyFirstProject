"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSort = void 0;
function mergeSort(arr) {
    //分而治之
    //先分
    if (arr.length > 1) {
        //将数组 分成两半 递归进行 直到 数组长度 小于等于 1
        var middle = Math.floor(arr.length / 2);
        var left = mergeSort(arr.slice(0, middle));
        var right = mergeSort(arr.slice(middle, arr.length));
        //然后 合并排序
        arr = merge(left, right);
    }
    //将结果返回
    return arr;
}
exports.mergeSort = mergeSort;
function merge(left, right) {
    //将左右两个数组 合并 排序
    //i 指向 左数组   j 指向右数组
    var i = 0;
    var j = 0;
    //将结果有序的push 进 result 中
    var result = [];
    while (i < left.length && j < right.length) {
        //排序
        result.push(left[i] < right[j] ? left[i++] : right[j++]);
    }
    //合并 =>将 左右 数组 剩余的部分 concat
    return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}
//# sourceMappingURL=06%20%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F.js.map