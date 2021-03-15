"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countingSort = void 0;
function countingSort(arr) {
    var count = []; //计数
    var result = []; //结果
    arr.forEach(function (el) {
        //将每个数字 以索引 存入 count中
        if (!count[el]) {
            count[el] = 0;
        }
        count[el]++;
    });
    count.forEach(function (el, i) {
        //将count 取出
        if (el && el > 0) {
            for (var j = 0; j < el; j++) {
                result.push(i);
            }
        }
    });
    return result;
}
exports.countingSort = countingSort;
//# sourceMappingURL=07%20%E8%AE%A1%E6%95%B0%E6%8E%92%E5%BA%8F.js.map