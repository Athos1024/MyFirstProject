"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.palindromeChecker = exports.hotPotato = void 0;
var _01______1 = __importDefault(require("./01 \u961F\u5217\u7684\u5B9E\u73B0"));
var _02_______1 = __importDefault(require("./02 \u53CC\u7AEF\u961F\u5217\u5B9E\u73B0"));
//01 循环队列——击鼓传花游戏 ( hot potato)
function hotPotato(list, num) {
    if (num === void 0) { num = 3; }
    var que = new _01______1.default();
    que.enqueue.apply(que, list);
    var temp = 1;
    while (que.size() > 1) {
        temp % num === 0 ? que.dequeue() : que.enqueue(que.dequeue());
        temp++;
    }
    return que.dequeue();
}
exports.hotPotato = hotPotato;
//02  回文检查器
function palindromeChecker(aString) {
    if (aString.length < 1)
        return false;
    var deque = new _02_______1.default();
    //将字符串去除空格,转成数组格式入栈
    deque.addBack.apply(deque, aString
        .toLocaleLowerCase()
        .split(' ')
        .join('')
        .split(''));
    var result = true;
    while (deque.size() > 1 && result) {
        //然后将队列 前端 和 后端 remove 并比较 赋值给result
        //循环的出口是 result 为 false 或 队列size <= 1
        result = deque.removeFront() === deque.removeBack();
    }
    return result;
}
exports.palindromeChecker = palindromeChecker;
//# sourceMappingURL=03%20%E9%98%9F%E5%88%97%E7%9A%84%E5%AE%9E%E8%B7%B5.js.map