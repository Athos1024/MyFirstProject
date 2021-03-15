"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shellSort = void 0;
//复杂度为被证明，猜测 为 O (N ^1.3)
function shellSort(arr) {
    //获取增量
    var gap = Math.floor(arr.length / 2);
    while (gap >= 1) {
        //进行插入排序
        for (var i = gap; i < arr.length; i++) {
            var j = i;
            var temp = arr[i];
            while (j > gap - 1 && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }
            arr[j] = temp;
        }
        //缩小增量
        gap = Math.floor(gap / 2);
    }
    return arr;
}
exports.shellSort = shellSort;
//# sourceMappingURL=04%20%E5%B8%8C%E5%B0%94%E6%8E%92%E5%BA%8F.js.map