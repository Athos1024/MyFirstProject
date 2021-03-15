"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearch = void 0;
var const_1 = require("../models/const");
function binarySearch(arr, value) {
    //二分查找
    var low = 0;
    var high = arr.length - 1;
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        var element = arr[mid];
        if (element === value) {
            return mid;
        }
        if (value > element) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return const_1.DOES_NOT_EXIST;
}
exports.binarySearch = binarySearch;
//# sourceMappingURL=02%20%E4%BA%8C%E5%88%86%E6%90%9C%E7%B4%A2.js.map