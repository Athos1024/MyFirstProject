"use strict";
// 交换次数 ： O(n)
// 比较次数 : O (n^2)
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectionSort = void 0;
function selectionSort(arr) {
    var _a;
    var min = 0;
    for (var i = 0; i < arr.length - 1; i++) {
        min = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (i !== min) {
            ;
            _a = [arr[min], arr[i]], arr[i] = _a[0], arr[min] = _a[1];
        }
    }
    return arr;
}
exports.selectionSort = selectionSort;
//# sourceMappingURL=02%20%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F.js.map