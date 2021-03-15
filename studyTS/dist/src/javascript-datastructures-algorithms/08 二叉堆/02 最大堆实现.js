"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _01______1 = __importDefault(require("./01 \u6700\u5C0F\u5806\u5B9E\u73B0"));
var MaxHeap = /** @class */ (function (_super) {
    __extends(MaxHeap, _super);
    function MaxHeap() {
        return _super.call(this) || this;
    }
    MaxHeap.prototype.compare = function (a, b) {
        //重新compare 方法即可
        return a < b;
    };
    return MaxHeap;
}(_01______1.default));
exports.default = MaxHeap;
//# sourceMappingURL=02%20%E6%9C%80%E5%A4%A7%E5%A0%86%E5%AE%9E%E7%8E%B0.js.map