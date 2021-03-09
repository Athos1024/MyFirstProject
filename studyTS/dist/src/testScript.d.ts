declare class Book {
    private name;
    constructor(name: string);
    getName(): string;
}
interface Iterator {
    next(): any;
    hasNext(): boolean;
}
interface Aggregate {
    iterator(): Iterator;
}
//# sourceMappingURL=testScript.d.ts.map