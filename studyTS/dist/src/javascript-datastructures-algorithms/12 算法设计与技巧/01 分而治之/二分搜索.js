"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearch = void 0;
function binarySearchRecursive(arr, value, left, right) {
    if (left > right) {
        return -1;
    }
    var mid = Math.floor((left + right) / 2);
    var element = arr[mid];
    if (element === value) {
        return mid;
    }
    if (value > element) {
        return binarySearchRecursive(arr, value, mid + 1, right);
    }
    else {
        return binarySearchRecursive(arr, value, left, mid);
    }
}
function binarySearch(arr, value) {
    var res = binarySearchRecursive(arr, value, 0, arr.length - 1);
    return res;
}
exports.binarySearch = binarySearch;
//# sourceMappingURL=%E4%BA%8C%E5%88%86%E6%90%9C%E7%B4%A2.js.map