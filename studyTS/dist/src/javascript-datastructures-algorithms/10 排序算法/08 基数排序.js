"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.radixSort = void 0;
function radixSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    //找到最大值
    var max = -Infinity;
    arr.forEach(function (el) { return (el > max ? (max = el) : null); });
    //求他的位数
    var digit = (max + '').length;
    //循环计数排序
    var count = [];
    var _loop_1 = function (i) {
        //按 个位排序, 十位排序 ,百位排序 ....
        arr.forEach(function (el) {
            var str = el + '';
            var temp = +str[str.length - 1 - i];
            if (isNaN(temp)) {
                temp = 0;
            }
            if (Array.isArray(count[temp])) {
                count[temp].push(el);
            }
            else {
                count[temp] = [el];
            }
        });
        arr = [];
        count.forEach(function (el) {
            if (Array.isArray(el)) {
                el.forEach(function (e) {
                    arr.push(e);
                });
            }
        });
        count = [];
    };
    for (var i = 0; i < digit; i++) {
        _loop_1(i);
    }
    return arr;
}
exports.radixSort = radixSort;
//# sourceMappingURL=08%20%E5%9F%BA%E6%95%B0%E6%8E%92%E5%BA%8F.js.map