export default class mySet<T> {
    protected items: {
        [key: string]: T;
    };
    constructor();
    add(element: T): boolean;
    delete(element: T): boolean;
    has(element: T): any;
    clear(): void;
    size(): number;
    values(): any;
    getUnion(otherSet: mySet<T>): mySet<T>;
    getIntersection(otherSet: mySet<T>): mySet<T>;
    getDifference(otherSet: mySet<T>): mySet<T>;
    isSubsetOf(otherSet: mySet<T>): any;
}
//# sourceMappingURL=01%20%E9%9B%86%E5%90%88%E7%9A%84%E5%AE%9E%E7%8E%B0.d.ts.map