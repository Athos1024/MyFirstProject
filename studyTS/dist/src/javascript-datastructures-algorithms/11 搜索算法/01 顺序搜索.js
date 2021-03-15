"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequentialSearch = void 0;
var const_1 = require("../models/const");
function sequentialSearch(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return const_1.DOES_NOT_EXIST;
}
exports.sequentialSearch = sequentialSearch;
//# sourceMappingURL=01%20%E9%A1%BA%E5%BA%8F%E6%90%9C%E7%B4%A2.js.map