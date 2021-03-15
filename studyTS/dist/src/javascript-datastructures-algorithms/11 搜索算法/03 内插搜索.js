"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interpolationSearch = void 0;
var const_1 = require("../models/const");
function interpolationSearch(arr, value) {
    var low = 0;
    var high = arr.length - 1;
    var position = -1;
    var delta = -1;
    while (low <= high && value >= arr[low] && value <= arr[high]) {
        delta = (value - arr[low]) / (arr[high] - arr[low]);
        position = low + Math.floor((high - low) * delta);
        if (arr[position] === value) {
            return position;
        }
        if (arr[position] < value) {
            low = position + 1;
        }
        else {
            high = position - 1;
        }
    }
    return const_1.DOES_NOT_EXIST;
}
exports.interpolationSearch = interpolationSearch;
console.log(interpolationSearch([1, 6, 7, 9, 15, 27, 30, 41, 66], 30));
//# sourceMappingURL=03%20%E5%86%85%E6%8F%92%E6%90%9C%E7%B4%A2.js.map