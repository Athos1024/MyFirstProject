"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _03_______1 = __importDefault(require("./03 \u7EA2\u9ED1\u6811\u5B98\u65B9\u7248"));
var _04________1 = __importDefault(require("./04 \u81EA\u5DF1\u5B9E\u73B0\u7EA2\u9ED1\u6811"));
describe('红黑树官方测试', function () {
    var rbt = new _03_______1.default();
    for (var i = 10; i > 0; i--) {
        rbt.insert(i);
    }
    test('先序遍历', function () {
        var str = '';
        rbt.preOrderTraverse(function (key) {
            str = str + ',' + key;
        });
        expect(str.slice(1)).toBe('7,5,3,2,1,4,6,9,8,10');
    });
});
describe('自己的红黑树测试', function () {
    var rbt = new _04________1.default();
    for (var i = 10; i > 0; i--) {
        rbt.insert(i);
    }
    test('先序遍历', function () {
        var str = '';
        rbt.preOrderTraverse(function (key) {
            str = str + ',' + key;
        });
        expect(str.slice(1)).toBe('7,5,3,2,1,4,6,9,8,10');
    });
});
//# sourceMappingURL=RBT.test.js.map