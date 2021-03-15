"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quickSort = void 0;
function quickSort(arr) {
    quick(arr, 0, arr.length - 1);
    return arr;
}
exports.quickSort = quickSort;
function quick(arr, left, right) {
    if (arr.length > 1) {
        var index = partition(arr, left, right);
        //两半局部有序分开  递归排序 分而治之
        if (left < index - 1) {
            quick(arr, left, index - 1);
        }
        if (index < right) {
            quick(arr, index, right);
        }
    }
}
function partition(arr, left, right) {
    //将数组 以pivot 为标准 划分为 两半 局部有序的
    var pivot = arr[Math.floor((left + right) / 2)];
    var i = left;
    var j = right;
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}
function swap(arr, i, j) {
    var _a;
    ;
    _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
}
// 3  6  5   7  4  1 8 2  9
//# sourceMappingURL=05%20%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F.js.map