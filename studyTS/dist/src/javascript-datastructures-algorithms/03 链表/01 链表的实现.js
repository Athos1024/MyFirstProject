"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var linked_list_models_1 = require("../models/linked-list-models");
var util_1 = require("../util");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.count = 0;
        this.head = null;
        this.equalsFn = util_1.defaultEquals;
    }
    LinkedList.prototype.push = function (element) {
        //向链表尾部添加一个新元素
        var node = new linked_list_models_1.Node(element);
        //如果列表为空 直接添加
        if (this.head === null) {
            this.head = node;
        }
        else {
            //否则 找到链表最后一个节点 添加
            var current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    };
    LinkedList.prototype.insert = function (element, index) {
        //向链表的特定位置插入一个新元素
        if (index < 0 || index > this.count)
            return false;
        var current = this.head;
        var node = new linked_list_models_1.Node(element);
        if (index === 0) {
            this.head = node;
            node.next = current;
        }
        else {
            var previous = this.getElementAt(index - 1);
            current = previous.next;
            previous.next = node;
            node.next = current;
        }
        this.count++;
        return true;
    };
    LinkedList.prototype.getElementAt = function (index) {
        //返回链表中特定位置的元素。如果链表中不存在这样的元素，则返回 undefined
        if (index < 0 || index >= this.count)
            return undefined;
        var current = this.head;
        for (var i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    };
    LinkedList.prototype.indexOf = function (element) {
        //返回元素在链表中的索引,如果链表中没有该元素则返回-1。
        var current = this.head;
        var res = 0;
        var temp = false;
        while (current !== null) {
            if (this.equalsFn(current.element, element)) {
                temp = true;
                break;
            }
            current = current.next;
            res++;
        }
        return temp ? res : -1;
    };
    LinkedList.prototype.removeAt = function (index) {
        //从链表的特定位置移除一个元素。
        if (index < 0 || index >= this.count)
            return undefined;
        var current = this.head;
        if (index === 0) {
            this.head = current.next;
        }
        else {
            // 将 previous 与 current 的下一项链接起来：跳过 current，从而移除它
            var preivous = this.getElementAt(index - 1);
            current = preivous.next;
            preivous.next = current.next;
        }
        this.count--;
        return current.element;
    };
    LinkedList.prototype.remove = function (element) {
        //从链表中移除一个元素
        var index = this.indexOf(element);
        return index === -1 ? null : this.removeAt(index);
    };
    LinkedList.prototype.isEmpty = function () {
        //如果链表中不包含任何元素，返回 true，如果链表长度大于 0则返回 false。
        return this.count === 0;
    };
    LinkedList.prototype.size = function () {
        //返回链表包含的元素个数，与数组的 length 属性类似。
        return this.count;
    };
    LinkedList.prototype.toString = function (separator) {
        if (separator === void 0) { separator = ','; }
        //返回表示整个链表的字符串。
        var res = '';
        var current = this.head;
        while (current !== null) {
            res = res + separator + current.element;
            current = current.next;
        }
        return res.slice(1);
    };
    LinkedList.prototype.getHead = function () {
        return this.head;
    };
    LinkedList.prototype.clear = function () {
        this.head = null;
        this.count = 0;
    };
    return LinkedList;
}());
exports.default = LinkedList;
//# sourceMappingURL=01%20%E9%93%BE%E8%A1%A8%E7%9A%84%E5%AE%9E%E7%8E%B0.js.map