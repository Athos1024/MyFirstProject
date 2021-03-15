"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minCoinChange = void 0;
var const_1 = require("../../models/const");
function minCoinChange(coins, amount) {
    var f = [];
    var temp = [];
    f[0] = 0;
    var _loop_1 = function (i) {
        coins.forEach(function (coin) {
            if (i - coin < 0) {
                temp.push(const_1.INF);
            }
            else {
                temp.push(f[i - coin] + 1);
            }
        });
        var min = Math.min.apply(Math, temp);
        f[i] = min;
        temp = [];
    };
    for (var i = 1; i <= amount; i++) {
        _loop_1(i);
    }
    return f[amount] == const_1.INF ? -1 : f[amount];
}
exports.minCoinChange = minCoinChange;
console.log(minCoinChange([2, 5, 10, 25], 13));
// f(x)  =min {  f(x-2) + 1 , f(x -5) +1 , f(x-10) +1 ,  f (x-25) +1   }
// f(-1) = 正无穷
// f(0) = 0
//f(1) = min { f(0) +1 , 正无穷 ...} = 1
//f(2 ) =min { f(1)+1 ,正无穷... }  = 2
//# sourceMappingURL=01%20%E7%A1%AC%E5%B8%81%E6%89%BE%E9%9B%B6.js.map