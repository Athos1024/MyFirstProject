declare const find: (i: number, parent: number[]) => number;
declare const union: (i: number, j: number, parent: number[]) => boolean;
declare const getEdges: (graph: number[][]) => {
    edges: number[];
    vertices: number[][];
};
declare const sortEdges: (edges?: number[], vertices?: number[][]) => {
    edges: number[];
    vertices: number[][];
};
declare const kruskal: (graph: number[][]) => any[];
declare const graph: number[][];
//# sourceMappingURL=04%20%E6%9C%80%E5%B0%8F%E7%94%9F%E6%88%90%E6%A0%91-kruskal.d.ts.map