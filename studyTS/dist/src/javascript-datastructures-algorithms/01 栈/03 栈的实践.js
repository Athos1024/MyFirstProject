"use strict";
//十进制转二进制
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseConverter = exports.decimalToBinary = void 0;
// 6 /2 => 3  , 0
//3 /2 => 1 ,1
// 1 1 0
var _02_________1 = __importDefault(require("./02 \u6808\u7684\u5B9E\u73B0\u57FA\u4E8E\u5BF9\u8C61"));
function decimalToBinary(decNumber) {
    var stack = new _02_________1.default();
    var binaryString = '';
    //进栈
    while (decNumber > 0) {
        stack.push(decNumber % 2);
        decNumber = Math.floor(decNumber / 2);
    }
    //出栈
    while (!stack.isEmpty()) {
        binaryString += stack.pop();
    }
    return binaryString;
}
exports.decimalToBinary = decimalToBinary;
//进阶版
function baseConverter(decNumber, base) {
    if (base === void 0) { base = 2; }
    var remStack = new _02_________1.default();
    var digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var baseString = '';
    if (!(base >= 2 && base <= 36)) {
        return '';
    }
    //进栈
    while (decNumber > 0) {
        remStack.push(decNumber % base);
        decNumber = Math.floor(decNumber / base);
    }
    //出栈
    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }
    return baseString;
}
exports.baseConverter = baseConverter;
//# sourceMappingURL=03%20%E6%A0%88%E7%9A%84%E5%AE%9E%E8%B7%B5.js.map