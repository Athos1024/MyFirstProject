"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../util");
var _01_____1 = require("./01 \u5192\u6CE1\u6392\u5E8F");
var _02_____1 = require("./02 \u9009\u62E9\u6392\u5E8F");
var _03_____1 = require("./03 \u63D2\u5165\u6392\u5E8F");
var _04_____1 = require("./04 \u5E0C\u5C14\u6392\u5E8F");
var _05_____1 = require("./05 \u5FEB\u901F\u6392\u5E8F");
var _06_____1 = require("./06 \u5F52\u5E76\u6392\u5E8F");
var _07_____1 = require("./07 \u8BA1\u6570\u6392\u5E8F");
var _08_____1 = require("./08 \u57FA\u6570\u6392\u5E8F");
describe('排序算法测试', function () {
    test('冒泡排序测试', function () {
        var arr = util_1.createRandomArray(10);
        var sortArr = Array.from(arr).sort(function (a, b) { return a - b; });
        expect(_01_____1.bubbleSort(arr)).toEqual(sortArr);
    });
    test('选择排序测试', function () {
        var arr = util_1.createRandomArray(10);
        var sortArr = Array.from(arr).sort(function (a, b) { return a - b; });
        expect(_02_____1.selectionSort(arr)).toEqual(sortArr);
    });
    test('插入排序测试', function () {
        var arr = util_1.createRandomArray(10);
        var sortArr = Array.from(arr).sort(function (a, b) { return a - b; });
        expect(_03_____1.insertionSort(arr)).toEqual(sortArr);
    });
    test('希尔排序测试', function () {
        var arr = util_1.createRandomArray(10);
        var sortArr = Array.from(arr).sort(function (a, b) { return a - b; });
        expect(_04_____1.shellSort(arr)).toEqual(sortArr);
    });
    test('快速排序', function () {
        var arr = util_1.createRandomArray(10);
        var sortArr = Array.from(arr).sort(function (a, b) { return a - b; });
        expect(_05_____1.quickSort(arr)).toEqual(sortArr);
    });
    test('归并排序', function () {
        var arr = util_1.createRandomArray(10);
        var sortArr = Array.from(arr).sort(function (a, b) { return a - b; });
        expect(_06_____1.mergeSort(arr)).toEqual(sortArr);
    });
    test('计数排序', function () {
        var arr = util_1.createRandomArray(10);
        var sortArr = Array.from(arr).sort(function (a, b) { return a - b; });
        expect(_07_____1.countingSort(arr)).toEqual(sortArr);
    });
    test('基数排序', function () {
        var arr = util_1.createRandomArray(10);
        var sortArr = Array.from(arr).sort(function (a, b) { return a - b; });
        expect(_08_____1.radixSort(arr)).toEqual(sortArr);
    });
});
//# sourceMappingURL=sort.test.js.map