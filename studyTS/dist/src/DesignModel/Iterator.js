"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Iterator = void 0;
var Iterator;
(function (Iterator) {
    /**
     * 优点： 1、它支持以不同的方式遍历一个聚合对象。 2、迭代器简化了聚合类。 3、在同一个聚合上可以有多个遍历。
     * 4、在迭代器模式中，增加新的聚合类和迭代器类都很方便，无须修改原有代码。
    缺点：由于迭代器模式将存储数据和遍历数据的职责分离，
    增加新的聚合类需要对应增加新的迭代器类，类的个数成对增加，这在一定程度上增加了系统的复杂性。
     */
    var ConcreteIterator = /** @class */ (function () {
        function ConcreteIterator(collection) {
            this.collection = [];
            this.position = 0;
            this.collection = collection;
        }
        /**
         * 获取下一个元素
         */
        ConcreteIterator.prototype.next = function () {
            var result = this.collection[this.position];
            this.position += 1;
            return result;
        };
        /**
         * 判断是否还有下一个元素
         */
        ConcreteIterator.prototype.hasNext = function () {
            return this.position < this.collection.length;
        };
        return ConcreteIterator;
    }());
    var Numbers = /** @class */ (function () {
        function Numbers(collection) {
            this.collection = [];
            this.collection = collection;
        }
        Numbers.prototype.createIterator = function () {
            return new ConcreteIterator(this.collection);
        };
        return Numbers;
    }());
    var Book = /** @class */ (function () {
        function Book(n) {
            this.name = n;
        }
        Book.prototype.getName = function () {
            return this.name;
        };
        return Book;
    }());
    var BookShelf = /** @class */ (function () {
        function BookShelf() {
            this.books = [];
            this.count = 0;
        }
        BookShelf.prototype.getBook = function (index) {
            return this.books[index];
        };
        BookShelf.prototype.appendBook = function (book) {
            this.books.push(book);
            this.count++;
        };
        BookShelf.prototype.getLength = function () {
            return this.count;
        };
        BookShelf.prototype.iterator = function () {
            return new BookShelfIterator(this);
        };
        return BookShelf;
    }());
    var BookShelfIterator = /** @class */ (function () {
        function BookShelfIterator(bshelf) {
            this.bookshelf = bshelf;
            this.index = 0; //目前位置在0
        }
        BookShelfIterator.prototype.hasNext = function () {
            if (this.index < this.bookshelf.getLength()) {
                return true;
            }
            else {
                return false;
            }
        };
        //取得下一本書，且會透過該書架
        BookShelfIterator.prototype.next = function () {
            var book = this.bookshelf.getBook(this.index);
            this.index++;
            return book;
        };
        return BookShelfIterator;
    }());
    var Client = /** @class */ (function () {
        function Client() {
        }
        Client.main = function () {
            var bookshelf = new BookShelf();
            bookshelf.appendBook(new Book('A Book'));
            bookshelf.appendBook(new Book('B Book'));
            bookshelf.appendBook(new Book('C Book'));
            var it = bookshelf.iterator();
            while (it.hasNext()) {
                console.log(it.next().getName());
            }
        };
        return Client;
    }());
    Client.main();
})(Iterator = exports.Iterator || (exports.Iterator = {}));
//# sourceMappingURL=Iterator.js.map