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
var _01______1 = __importDefault(require("./01 \u94FE\u8868\u7684\u5B9E\u73B0"));
var linked_list_models_1 = require("../models/linked-list-models");
var DoublyLikedList = /** @class */ (function (_super) {
    __extends(DoublyLikedList, _super);
    function DoublyLikedList() {
        var _this = _super.call(this) || this;
        _this.tail = null; //新增的属性指向尾部
        return _this;
    }
    /* 双向列表重写的方法 */
    DoublyLikedList.prototype.push = function (element) {
        var node = new linked_list_models_1.DoublyNode(element);
        if (this.isEmpty()) {
            this.tail = this.head = node;
        }
        else {
            var current = this.tail;
            this.tail = node;
            current.next = node;
            node.prev = current;
        }
        this.count++;
    };
    DoublyLikedList.prototype.insert = function (element, index) {
        //重写insert方法
        if (index < 0 || index > this.count)
            return false;
        var node = new linked_list_models_1.DoublyNode(element);
        var current = this.head;
        //在开头插入元素
        if (index === 0) {
            if (this.isEmpty()) {
                //链表为空
                this.head = this.tail = node;
            }
            else {
                //链表不为空
                this.head = node;
                node.next = current;
                current.prev = node;
            }
        }
        else if (index === this.count) {
            //在末尾插入元素
            current = this.tail;
            this.tail = node;
            node.prev = current;
            current.next = node;
        }
        else {
            //在任意节点插入
            var prev = this.getElementAt(index - 1);
            current = prev.next;
            // 例如 1<=>2 插入 x ,需要改变四次指针得到  1<=>x<=>2
            prev.next = node;
            node.prev = prev;
            node.next = current;
            current.prev = node;
        }
        this.count++;
        return true;
    };
    DoublyLikedList.prototype.removeAt = function (index) {
        //重新removeAt方法
        if (index < 0 || index >= this.count)
            return undefined;
        var current = this.head;
        if (index === 0) {
            //删除头部元素
            if (this.size() === 1) {
                //如果只有一个元素头尾指向空
                this.head = this.tail = null;
            }
            else {
                this.head = current.next;
                current.next.prev = null;
            }
        }
        else if (index === this.count - 1) {
            //删除尾部
            current = this.tail;
            this.tail = current.prev;
            current.prev.next = null;
        }
        else {
            //删除任意节点
            var prev = this.getElementAt(index - 1);
            current = prev.next;
            // 例如 1<=>2<=>3 删 2 只用将1,3建立起链接 就ok了 =>1<=>3
            prev.next = current.next;
            current.next.prev = prev;
        }
        this.count--;
        return current.element;
    };
    DoublyLikedList.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this.tail = null;
    };
    /* 双向列表新增的方法 */
    DoublyLikedList.prototype.inverseToString = function (separator) {
        if (separator === void 0) { separator = ','; }
        //从尾部开始遍历
        if (this.isEmpty())
            return '';
        var current = this.tail;
        var res = '';
        while (current !== null) {
            res = res + separator + current.element;
            current = current.prev;
        }
        return res.slice(1);
    };
    DoublyLikedList.prototype.getTail = function () {
        return this.tail;
    };
    return DoublyLikedList;
}(_01______1.default));
exports.default = DoublyLikedList;
//# sourceMappingURL=02%20%E5%8F%8C%E5%90%91%E9%93%BE%E8%A1%A8%E7%9A%84%E5%AE%9E%E7%8E%B0.js.map