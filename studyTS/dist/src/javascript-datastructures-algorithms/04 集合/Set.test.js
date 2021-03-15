"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _01______1 = __importDefault(require("./01 \u96C6\u5408\u7684\u5B9E\u73B0"));
var _02_ES2015_Set__1 = require("./02 ES2015 Set \u7C7B");
describe('集合的测试', function () {
    var set = new _01______1.default();
    var otherSet = new _01______1.default();
    test('方法测试', function () {
        expect(set.add(20)).toBe(true);
        set.add(30);
        set.add(50);
        expect(set.add(20)).toBe(false);
        expect(set.size()).toBe(3);
        expect(set.values()).toEqual([20, 30, 50]);
        set.delete(30);
        expect(set.values()).toEqual([20, 50]);
        set.clear();
        expect(set.values()).toEqual([]);
        expect(set.size()).toBe(0);
    });
    test('求并集测试', function () {
        set.add(30);
        set.add(50);
        otherSet.add(50);
        otherSet.add(200);
        var newSet = set.getUnion(otherSet);
        expect(newSet.values()).toEqual([30, 50, 200]);
    });
    test('求交集测试', function () {
        set.clear();
        otherSet.clear();
        set.add(0);
        set.add(1);
        set.add(2);
        set.add(3);
        otherSet.add(2);
        otherSet.add(3);
        otherSet.add(4);
        var intersection = set.getIntersection(otherSet);
        expect(intersection.values()).toEqual([2, 3]);
        otherSet.clear();
        intersection = set.getIntersection(otherSet);
        expect(intersection.values()).toEqual([]);
    });
    test('求差集测试', function () {
        set.clear();
        otherSet.clear();
        set.add(0);
        set.add(1);
        set.add(2);
        set.add(3);
        otherSet.add(2);
        otherSet.add(3);
        otherSet.add(4);
        expect(set.getDifference(otherSet).values()).toEqual([0, 1]);
        otherSet.delete(3);
        expect(set.getDifference(otherSet).values()).toEqual([0, 1, 3]);
    });
    test('求子集测试', function () {
        set.clear();
        otherSet.clear();
        set.add(0);
        set.add(1);
        set.add(2);
        set.add(3);
        otherSet.add(2);
        otherSet.add(3);
        expect(set.isSubsetOf(otherSet)).toBe(false);
        expect(otherSet.isSubsetOf(set)).toBe(true);
    });
});
describe('02 ES2015 Set 类测试', function () {
    var setA = new Set([1, 2, 3]);
    var setB = new Set([2, 3, 4]);
    test('求并集测试', function () {
        expect(_02_ES2015_Set__1.getUnion(setA, setB)).toEqual(new Set([1, 2, 3, 4]));
    });
    test('求交集测试', function () {
        expect(_02_ES2015_Set__1.getIntersection(setA, setB)).toEqual(new Set([2, 3]));
    });
    test('求差集测试', function () {
        expect(_02_ES2015_Set__1.getDifference(setA, setB)).toEqual(new Set([1]));
    });
    test('求子集测试', function () {
        expect(_02_ES2015_Set__1.isSubsetOf(setA, setB)).toBe(false);
        setA.delete(1);
        expect(_02_ES2015_Set__1.isSubsetOf(setA, setB)).toBe(true);
    });
});
//# sourceMappingURL=Set.test.js.map