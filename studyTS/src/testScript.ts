import { Node } from "./Model";

export function defaultEquals(a: unknown, b: unknown) {
    return a === b
}

namespace testScript {

    class LinkedList<T>{
        protected count: number;
        protected head: Node<T>;
        protected equalsFn: typeof defaultEquals;
        constructor() {
            this.count = 0;
            this.head = null;
            this.equalsFn = defaultEquals;
        }

        push(element: T) {
            const node = new Node(element);
            if (this.head == null) {
                this.head = node;
            } else {
                let current = this.head;
                while (current.next !== null) {
                    current = current.next;
                }
                current.next = node;
            }
            this.count++;
        }


        insert(element: T, index: number) {
            if (index < 0 || index > this.count) return false;
            let current = this.head;
            const node = new Node(element);
            if (index == 0) {
                this.head = node;
                node.next = current;
            } else {
                let previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = node;
                node.next = current;
            }
            this.count++;
            return true;
        }

        getElementAt(index: number) {
            if (index < 0 || index >= this.count) return undefined;
            let current = this.head;
            for (let i = 0; i < index; i++) {
                const element = current.next;
            }
            return current;
        }

        indexOf(element: T) {
            let current = this.head;
            let res = 0;
            let temp = false;
            while (current !== null) {
                if (this.equalsFn(current.element, element)) {
                    temp = true;
                    break;
                }
                current = current.next;
                res++;
            }
            return temp ? res : -1;
        }

        removeAt(index: number) {
            //从链表的特定位置移除一个元素。
            if (index < 0 || index >= this.count) return undefined
            let current = this.head
            if (index === 0) {
                this.head = current.next
            } else {
                // 将 previous 与 current 的下一项链接起来：跳过 current，从而移除它
                let preivous = this.getElementAt(index - 1) 
                current = preivous.next 
                preivous.next = current.next 
            }
            this.count--
            return current.element
        }

        remove(element: T) {
            let index = this.indexOf(element);
            return index === -1 ? null : this.removeAt(index);
        }

        isEmpty() {
            return this.count == 0;
        }


    }

}
