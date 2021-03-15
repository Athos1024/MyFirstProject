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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadBlackTreeNode = exports.BLACK = exports.RED = void 0;
var binary_search_tree_models_1 = require("./binary-search-tree-models");
//定义表示颜色的常量
exports.RED = Symbol('color-red');
exports.BLACK = Symbol('color-black');
var ReadBlackTreeNode = /** @class */ (function (_super) {
    __extends(ReadBlackTreeNode, _super);
    function ReadBlackTreeNode(key) {
        var _this = _super.call(this, key) || this;
        //对红黑树来说 节点需要额外的属性 color 和指向父节点的引用 parent
        _this.parent = null;
        _this.color = exports.RED;
        return _this;
    }
    ReadBlackTreeNode.prototype.isRed = function () {
        return this.color === exports.RED;
    };
    return ReadBlackTreeNode;
}(binary_search_tree_models_1.Node));
exports.ReadBlackTreeNode = ReadBlackTreeNode;
//# sourceMappingURL=red-black-tree-models.js.map