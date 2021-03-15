"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _01_________1 = __importDefault(require("./01 \u6808\u7684\u5B9E\u73B0\u57FA\u4E8E\u6570\u7EC4"));
var _02_________1 = __importDefault(require("./02 \u6808\u7684\u5B9E\u73B0\u57FA\u4E8E\u5BF9\u8C61"));
var _03_____1 = require("./03 \u6808\u7684\u5B9E\u8DF5");
describe('测试基于数组的栈结构', function () {
    test('stack测试', function () {
        var stack = new _01_________1.default();
        //测试size 和 isEmpty
        expect(stack.size()).toBe(0);
        expect(stack.isEmpty()).toBe(true);
        //压入 5,8
        stack.push(5);
        stack.push(8);
        //测试size 和 isEmpty
        expect(stack.isEmpty()).toBe(false);
        expect(stack.size()).toBe(2);
        //压入 11
        stack.push(11);
        //移除 11
        expect(stack.pop()).toBe(11);
        // 测试toString
        expect(stack.toString()).toBe('5,8');
    });
});
describe('测试基于对象的栈结构', function () {
    test('基本测试', function () {
        var stack = new _02_________1.default();
        //测试size 和 isEmpty
        expect(stack.size()).toBe(0);
        expect(stack.isEmpty()).toBe(true);
        //压入 5,8
        stack.push(5);
        stack.push(8);
        //测试size 和 isEmpty
        expect(stack.isEmpty()).toBe(false);
        expect(stack.size()).toBe(2);
        //压入 11
        stack.push(11);
        //移除 11
        expect(stack.pop()).toBe(11);
        // 测试toString
        expect(stack.toString()).toBe('5,8');
    });
    test('十进制转二进制测试', function () {
        expect(_03_____1.decimalToBinary(5)).toBe('101');
        expect(_03_____1.decimalToBinary(30)).toBe('11110');
        expect(_03_____1.decimalToBinary(50)).toBe('110010');
        expect(_03_____1.decimalToBinary(99)).toBe('1100011');
    });
    test('任意进制转换测试', function () {
        expect(_03_____1.baseConverter(30)).toBe('11110');
        expect(_03_____1.baseConverter(50)).toBe('110010');
        expect(_03_____1.baseConverter(30, 8)).toBe('36');
        expect(_03_____1.baseConverter(50, 16)).toBe('32');
        expect(_03_____1.baseConverter(50, 36)).toBe('1E');
        expect(_03_____1.baseConverter(100, 36)).toBe('2S');
        expect(_03_____1.baseConverter(10, 26)).toBe('A');
        expect(_03_____1.baseConverter(100, 24)).toBe('44');
    });
});
//# sourceMappingURL=stack.test.js.map