"use strict";
//复杂度 O(n^2)
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertionSort = void 0;
function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var j = i;
        var temp = arr[i];
        while (j > 0 && arr[j - 1] > temp) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = temp;
    }
    return arr;
}
exports.insertionSort = insertionSort;
//# sourceMappingURL=03%20%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F.js.map