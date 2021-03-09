export namespace Iterator{

/**
 * 优点： 1、它支持以不同的方式遍历一个聚合对象。 2、迭代器简化了聚合类。 3、在同一个聚合上可以有多个遍历。 
 * 4、在迭代器模式中，增加新的聚合类和迭代器类都很方便，无须修改原有代码。
缺点：由于迭代器模式将存储数据和遍历数据的职责分离，
增加新的聚合类需要对应增加新的迭代器类，类的个数成对增加，这在一定程度上增加了系统的复杂性。
 */

    export interface Iterator {
        next(): any
        hasNext(): boolean
    }
    
    interface Aggregator {
        createIterator(): Iterator
    }
    
    class ConcreteIterator implements Iterator {
        private collection: any[] = []
        private position: number = 0
        constructor(collection: any[]) {
            this.collection = collection
        }
        /**
         * 获取下一个元素
         */
        public next(): any {
            var result = this.collection[this.position]
            this.position += 1
            return result
        }
        /**
         * 判断是否还有下一个元素
         */
        public hasNext(): boolean {
            return this.position < this.collection.length
        }
    }
    
    class Numbers implements Aggregator {
        private collection: number[] = []
        constructor(collection: number[]) {
            this.collection = collection
        }
        public createIterator(): Iterator {
            return new ConcreteIterator(this.collection)
        }
    }
    
    // class Client {
    //     public static main(): void {
    //         const nArray = [7, 29, 8, 15, 2, 14]
    //         const numbers: Numbers = new Numbers(
    //             nArray
    //         )
    //         let it: ConcreteIterator = <ConcreteIterator>numbers.createIterator()
    //         while (it.hasNext()) {
    //             console.log(it.next())
    //         }
    //     }
    // }
    // Client.main()

    //************************************* */

    interface Aggregate {
        iterator(): Iterater;
    }
    interface Iterater {
        hasNext(): boolean;
        next(): Object;
    }
    class Book {
        private name: string;
        constructor(n: string) {
            this.name = n;
        }
        public getName(): string {
            return this.name;
        }
    }
    class BookShelf implements Aggregate {
        private books: Book[] = [];
        private count: number;
        constructor() {
            this.count = 0;
        }
        public getBook(index: number): Book { //取得哪本書
            return this.books[index];
        }
        public appendBook(book: Book): void { //增加書
            this.books.push(book);
            this.count++;
        }
        public getLength(): number { //取得書架目前多少書
            return this.count;
        }
        public iterator(): Iterater { //取得尋訪方法 會將自己放入Iterator內產出一遍歷方法
            return new BookShelfIterator(this);
        }
    
    }
    class BookShelfIterator implements Iterater {
        private bookshelf: BookShelf;
        private index: number;
        constructor(bshelf: BookShelf) { //把書架放進來
            this.bookshelf = bshelf;
            this.index = 0; //目前位置在0
        }
        public hasNext(): boolean { //是否有下一個就是由現在位置並確定書架是不是有那麼多書 如果現在位置9 且書也只有9本，代表已經沒有下一個了
            if (this.index < this.bookshelf.getLength()) {
                return true;
            } else {
                return false;
            }
        }
        //取得下一本書，且會透過該書架
        public next(): Object {
            let book: Book = this.bookshelf.getBook(this.index);
            this.index++;
            return book;
        }
    
    }
    
    class Client {
        public static main(): void {
            let bookshelf: BookShelf = new BookShelf();
            bookshelf.appendBook(new Book('A Book'));
            bookshelf.appendBook(new Book('B Book'));
            bookshelf.appendBook(new Book('C Book'));
            let it: Iterater = bookshelf.iterator();
            while (it.hasNext()) {
                console.log((<Book>it.next()).getName());
            }
        }
    }
    Client.main()


}