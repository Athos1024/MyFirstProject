var List01;
(function (List01) {
    var Node = /** @class */ (function () {
        function Node(e) {
            this.element = e;
            this.next = null;
        }
        return Node;
    }());
    var List = /** @class */ (function () {
        function List() {
            this.count = 0;
            this.head = null;
        }
        List.prototype.push = function (element) {
            var node = new Node(element);
            if (this.count == 0) {
                this.head = node;
            }
            else {
                var current = this.head;
                while (current.next) {
                    current = current.next;
                }
                current.next = node;
            }
            this.count++;
        };
        List.prototype.insert = function (element, index) {
            if (index < 0 || index > this.count)
                return null;
            var current = this.head;
            var node = new Node(element);
            if (index == 0) {
                this.head = node;
                this.head.next = current;
            }
            else {
                var previous = this.getElement(index - 1);
                current = previous.next;
                previous.next = node;
                node.next = current;
            }
            this.count++;
        };
        List.prototype.getElement = function (index) {
            if (index < 0 || index >= this.count)
                return undefined;
            var currnet = this.head;
            for (var i = 0; i < index; i++) {
                currnet = currnet.next;
            }
            return currnet;
        };
        List.prototype.indexOf = function (element) {
            var res = 0;
            var temp = false;
            var current = this.head;
            while (current.next) {
                if (current.element == element) {
                    temp = true;
                    break;
                }
                res++;
                current = current.next;
            }
            return temp ? res : -1;
        };
        List.prototype.removeAt = function (index) {
            if (index < 0 || index > this.count)
                return undefined;
            if (index == 0) {
            }
        };
        return List;
    }());
})(List01 || (List01 = {}));
//# sourceMappingURL=List01.js.map