"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffle = void 0;
function shuffle(arr) {
    var _a;
    for (var i = arr.length - 1; i > 0; i--) {
        var index = Math.floor(Math.random() * (i + 1)) // [0,i+1)
        ;
        _a = [arr[index], arr[i]], arr[i] = _a[0], arr[index] = _a[1]; //swap
    }
    return arr;
}
exports.shuffle = shuffle;
//# sourceMappingURL=04%20%E9%9A%8F%E6%9C%BA%E7%AE%97%E6%B3%95.js.map