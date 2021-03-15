"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.knapSack = void 0;
var const_1 = require("../../models/const");
function knapSack(goods, capacity) {
    //初始化 f
    var f = [];
    f[0] = { value: 0, pre: -1 };
    f[1] = { value: 0, pre: -1 };
    //声明变量 temp
    var temp = [];
    var _loop_1 = function (i) {
        goods.forEach(function (el) {
            if (i - el.weight < 0) {
                temp.push({
                    value: const_1.NEGATIVE_INF,
                    pre: -1
                });
            }
            else {
                temp.push({
                    value: f[i - el.weight].value + el.value,
                    pre: f[i - el.weight]
                });
            }
        });
        //求最大值
        f[i] = { value: const_1.NEGATIVE_INF };
        temp.forEach(function (el) {
            if (el.value > f[i].value) {
                f[i] = el;
            }
        });
        // f[i] = Math.max(...temp)
        //初始化temp
        temp = [];
    };
    for (var i = 2; i <= capacity; i++) {
        _loop_1(i);
    }
    return f[capacity] === const_1.NEGATIVE_INF ? -1 : f[capacity];
}
exports.knapSack = knapSack;
function knapSackToString(obj) {
    var current = obj;
    var temp = [];
    while (current.pre !== undefined) {
        if (current.value === 0) {
            break;
        }
        temp.push(current.value - current.pre.value);
        current = current.pre;
    }
    console.log(temp);
}
knapSackToString(knapSack([
    { weight: 2, value: 3 },
    { weight: 3, value: 4 },
    { weight: 4, value: 5 }
], 10));
// max Money
// f(x) =   max { f(x-2)+3, f(x-3)+4, f(x-4)+5 }
//f ( 0 ) = 0
//f ( 1 ) = 0
//f ( 2 ) = 3
//f ( 3 ) = 4
//f ( 4 ) = 6
//f ( 5 ) = 7
//f ( 6 ) = 9
//f ( 7 ) = 10
//f ( 8 ) = 12
//f ( 9 ) = 13
//f ( 10 ) = 15
//# sourceMappingURL=02%20%E8%83%8C%E5%8C%85%E9%97%AE%E9%A2%98.js.map