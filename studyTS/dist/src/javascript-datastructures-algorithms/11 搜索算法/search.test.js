"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../util");
var _01_____1 = require("./01 \u987A\u5E8F\u641C\u7D22");
var _02_____1 = require("./02 \u4E8C\u5206\u641C\u7D22");
var _05_____1 = require("../10 \u6392\u5E8F\u7B97\u6CD5/05 \u5FEB\u901F\u6392\u5E8F");
describe('搜索算法测试', function () {
    test('顺序搜索测试', function () {
        var arr = util_1.createRandomArray(10);
        for (var i = 0; i < arr.length; i++) {
            expect(_01_____1.sequentialSearch(arr, arr[i])).toBe(i);
        }
        expect(_01_____1.sequentialSearch(arr, null)).toBe(-1);
    });
    test('二分搜索测试', function () {
        var arr = util_1.createRandomArray(10);
        var sortedArray = _05_____1.quickSort(arr);
        expect(_02_____1.binarySearch(sortedArray, sortedArray[3])).toBe(3);
    });
});
//# sourceMappingURL=search.test.js.map