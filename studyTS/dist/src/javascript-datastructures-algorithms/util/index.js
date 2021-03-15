"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRandomArray = exports.defaultEquals = void 0;
function defaultEquals(a, b) {
    return a === b;
}
exports.defaultEquals = defaultEquals;
function createRandomArray(size) {
    var array = [];
    for (var i = 0; i < size; i++) {
        array.push(Math.round(Math.random() * 50));
    }
    return array;
}
exports.createRandomArray = createRandomArray;
//# sourceMappingURL=index.js.map