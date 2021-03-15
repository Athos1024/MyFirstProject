"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _01______1 = __importDefault(require("./01 \u6700\u5C0F\u5806\u5B9E\u73B0"));
var _02______1 = __importDefault(require("./02 \u6700\u5927\u5806\u5B9E\u73B0"));
var _03______1 = require("./03 \u5806\u6392\u5E8F\u7B97\u6CD5");
describe('最小堆测试', function () {
    var minHeap = new _01______1.default();
    minHeap.insert(2);
    minHeap.insert(1);
    minHeap.insert(5);
    minHeap.insert(4);
    minHeap.insert(6);
    minHeap.insert(3);
    minHeap.insert(0);
    minHeap.insert(2);
    test('insert测试', function () {
        var str = '';
        minHeap.preTraverse(function (value) {
            str = str + ',' + value;
        });
        expect(str.slice(1)).toBe('0,2,2,4,6,1,5,3');
    });
    test('取最值测试测试', function () {
        expect(minHeap.findMinimum()).toBe(0);
        expect(minHeap.size()).toBe(8);
    });
    test('extract方法测试', function () {
        expect(minHeap.extract()).toBe(0);
        var str = '';
        minHeap.preTraverse(function (value) {
            str = str + ',' + value;
        });
        expect(str.slice(1)).toBe('1,2,2,6,3,5,4');
        expect(minHeap.findMinimum()).toBe(1);
        expect(minHeap.size()).toBe(7);
    });
});
describe('最大堆测试', function () {
    var maxHeap = new _02______1.default();
    maxHeap.insert(2);
    maxHeap.insert(1);
    maxHeap.insert(5);
    maxHeap.insert(4);
    maxHeap.insert(6);
    maxHeap.insert(3);
    maxHeap.insert(0);
    maxHeap.insert(2);
    test('insert测试', function () {
        var str = '';
        maxHeap.preTraverse(function (value) {
            str = str + ',' + value;
        });
        expect(str.slice(1)).toBe('6,5,2,1,4,3,2,0');
    });
    test('取最值测试测试', function () {
        expect(maxHeap.findMinimum()).toBe(6);
        expect(maxHeap.size()).toBe(8);
    });
    test('extract方法测试', function () {
        expect(maxHeap.extract()).toBe(6);
        var str = '';
        maxHeap.preTraverse(function (value) {
            str = str + ',' + value;
        });
        expect(str.slice(1)).toBe('5,4,2,1,3,2,0');
        expect(maxHeap.findMinimum()).toBe(5);
        expect(maxHeap.size()).toBe(7);
    });
});
describe('堆排序算法测试', function () {
    var arr = [3, 5, 1, 6, 4, 7, 2];
    expect(_03______1.firstHeapSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(_03______1.firstHeapSort(arr, -1)).toEqual([7, 6, 5, 4, 3, 2, 1]);
});
//# sourceMappingURL=Heap.test.js.map