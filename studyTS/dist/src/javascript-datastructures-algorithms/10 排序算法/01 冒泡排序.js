"use strict";
//交换次数  O(N^2)
//比较次数  O(N^2)
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSort = void 0;
function bubbleSort(arr) {
    var _a;
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                ;
                _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
            }
        }
    }
    return arr;
}
exports.bubbleSort = bubbleSort;
//# sourceMappingURL=01%20%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F.js.map