"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _01______1 = __importDefault(require("./01 \u961F\u5217\u7684\u5B9E\u73B0"));
var _02_______1 = __importDefault(require("./02 \u53CC\u7AEF\u961F\u5217\u5B9E\u73B0"));
var _03______1 = require("./03 \u961F\u5217\u7684\u5B9E\u8DF5");
describe('基本队列的测试', function () {
    test('结构体测试', function () {
        var que = new _01______1.default();
        //测试peek size isEmpty
        expect(que.peek()).toBe(undefined);
        expect(que.size()).toBe(0);
        expect(que.isEmpty()).toBe(true);
        //添加队列元素
        que.enqueue('John', 'Jack', 'Camila');
        //测试peek size isEmpty
        expect(que.size()).toBe(3);
        expect(que.isEmpty()).toBe(false);
        expect(que.peek()).toBe('John');
        //出列两个元素
        expect(que.dequeue()).toBe('John');
        expect(que.dequeue()).toBe('Jack');
        //测试peek size  toString
        expect(que.peek()).toBe('Camila');
        expect(que.size()).toBe(1);
        expect(que.toString()).toBe('Camila');
        que.enqueue('hh');
        expect(que.toString()).toBe('Camila,hh');
        expect(que.dequeue()).toBe('Camila');
        que.enqueue('waw');
        expect(que.toString()).toBe('hh,waw');
    });
    test('击鼓传花测试', function () {
        var arr = ['张三', '李四', '王五', '赵六', '韩七'];
        expect(_03______1.hotPotato(arr, 2)).toBe('王五');
        expect(_03______1.hotPotato(arr, 3)).toBe('赵六');
        expect(_03______1.hotPotato(arr, 1)).toBe('韩七');
        var arr1 = ['张三', '李四', '王五', '赵六'];
        expect(_03______1.hotPotato(arr1, 2)).toBe('张三');
    });
});
describe('双端队列的测试', function () {
    test('结构体测试', function () {
        var que = new _02_______1.default();
        //测试peek size isEmpty
        expect(que.peekFront()).toBe(undefined);
        expect(que.peekBack()).toBe(undefined);
        expect(que.size()).toBe(0);
        expect(que.isEmpty()).toBe(true);
        //添加队列元素
        que.addBack('John', 'Jack', 'Camila');
        //测试peek size isEmpty
        expect(que.peekFront()).toBe('John');
        expect(que.peekBack()).toBe('Camila');
        expect(que.size()).toBe(3);
        expect(que.isEmpty()).toBe(false);
        //出列两个元素
        expect(que.removeBack()).toBe('Camila');
        expect(que.removeFront()).toBe('John');
        //测试peek size isEmpty
        expect(que.size()).toBe(1);
        expect(que.peekFront()).toBe('Jack');
        expect(que.peekBack()).toBe('Jack');
        //添加队列前端多个
        expect(que.addFront('John', 'Camila'));
        expect(que.toString('*')).toBe('Camila*John*Jack');
        //添加队列前端 单个
        que.addFront('20');
        expect(que.peekFront()).toBe('20');
    });
    test('回文检查器', function () {
        expect(_03______1.palindromeChecker('level')).toBe(true);
        expect(_03______1.palindromeChecker('kayak')).toBe(true);
        expect(_03______1.palindromeChecker('Was it a car or a cat I  saw')).toBe(true);
        expect(_03______1.palindromeChecker('Step on no pets')).toBe(true);
        expect(_03______1.palindromeChecker('')).toBe(false);
        expect(_03______1.palindromeChecker('queue')).toBe(false);
    });
});
//# sourceMappingURL=queue.test.js.map