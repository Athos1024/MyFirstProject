"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSubsetOf = exports.getDifference = exports.getIntersection = exports.getUnion = void 0;
function getUnion(setA, setB) {
    return new Set(__spreadArrays(setA, setB));
}
exports.getUnion = getUnion;
function getIntersection(setA, setB) {
    var _a;
    var smallerSet = setA;
    var biggerSet = setB;
    if (smallerSet.size > biggerSet.size) {
        ;
        _a = [biggerSet, smallerSet], smallerSet = _a[0], biggerSet = _a[1];
    }
    return new Set(__spreadArrays(smallerSet).filter(function (el) { return biggerSet.has(el); }));
}
exports.getIntersection = getIntersection;
function getDifference(setA, setB) {
    return new Set(__spreadArrays(setA).filter(function (el) { return !setB.has(el); }));
}
exports.getDifference = getDifference;
function isSubsetOf(setA, setB) {
    if (setA.size > setB.size)
        return false;
    //注意 set提供的foreach 是无法 break的 为了优化采用迭代器迭代
    var iteratorResult = { value: null, done: false };
    var values = setA.values();
    var res = true;
    while (!iteratorResult.done) {
        iteratorResult = values.next();
        if (iteratorResult.value && !setB.has(iteratorResult.value)) {
            res = false;
            break;
        }
    }
    return res;
}
exports.isSubsetOf = isSubsetOf;
//# sourceMappingURL=02%20ES2015%20Set%20%E7%B1%BB.js.map