"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstHeapSort = void 0;
// 01 堆排序初体验
var _02______1 = __importDefault(require("./02 \u6700\u5927\u5806\u5B9E\u73B0"));
var _01______1 = __importDefault(require("./01 \u6700\u5C0F\u5806\u5B9E\u73B0"));
function firstHeapSort(arr, options) {
    if (options === void 0) { options = 1; }
    var res = [];
    //创建一个堆
    var Heap = new _01______1.default();
    if (options === -1) {
        Heap = new _02______1.default();
    }
    //将数组插到堆里
    arr.forEach(function (el) { return Heap.insert(el); });
    //每次取出最值 push进去即可
    for (var i = 0, j = Heap.size(); i < j; i++) {
        res.push(Heap.extract());
    }
    return res;
}
exports.firstHeapSort = firstHeapSort;
//# sourceMappingURL=03%20%E5%A0%86%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95.js.map