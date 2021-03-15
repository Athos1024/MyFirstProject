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
exports.DoublyNode = exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(element) {
        this.element = element;
        this.next = null;
    }
    return Node;
}());
exports.Node = Node;
var DoublyNode = /** @class */ (function (_super) {
    __extends(DoublyNode, _super);
    function DoublyNode(element) {
        var _this = _super.call(this, element) || this;
        _this.prev = null;
        return _this;
    }
    return DoublyNode;
}(Node));
exports.DoublyNode = DoublyNode;
//# sourceMappingURL=linked-list-models.js.map