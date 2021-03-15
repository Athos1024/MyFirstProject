export default class Graph {
    private isDirected;
    private vertices;
    private adjList;
    constructor(isDirected?: boolean);
    private initializeColor;
    private depthFirstSearchVisit;
    addVertex(v: string | number): void;
    addEdge(v: string | number, w: string | number): boolean;
    toString(): string;
    breadthFirstSearch(startVertex: string | number, callback: (v: string | number) => void): void;
    depthFirstSearch(v: string | number, cb: (v: string | number) => void): void;
    getShortedPathByBfs(startVertex: string | number): {
        distance: {};
        predecessors: {};
    };
    getShortedPathByBfsToString(v: string | number): string;
}
//# sourceMappingURL=01%20%E5%9B%BE%E7%9A%84%E5%AE%9E%E7%8E%B0.d.ts.map